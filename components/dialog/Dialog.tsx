"use client";

import { useEffect } from "react";

type DialogProps = {
   isOpen: boolean;
   title?: string;
   children: React.ReactNode;
   onClose: () => void;
};

export default function Dialog({
   isOpen,
   title,
   children,
   onClose,
}: DialogProps) {
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
      }
      return () => {
         document.body.style.overflow = "";
      };
   }, [isOpen]);

   useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
         if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
   }, [onClose]);

   if (!isOpen) return null;

   return (
      <div
         className="fixed inset-0 z-50 flex items-center justify-center"
         role="dialog"
         aria-modal="true"
         aria-labelledby="dialog-title"
      >
         {/* Overlay */}
         <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
         />

         {/* Content */}
         <div className="relative z-10 flex max-h-[80vh] w-full max-w-md flex-col rounded-2xl border border-gray-700 bg-gray-900 shadow-lg lg:max-w-6xl">
            {/* Header */}
            <div className="sticky top-0 z-10 rounded-t-2xl border-b border-gray-700 bg-gray-900/80 p-6 backdrop-blur-md">
               <div className="grid grid-cols-3 items-center">
                  <div />
                  <h2
                     id="dialog-title"
                     className="text-center text-lg font-semibold text-white"
                  >
                     {title}
                  </h2>
                  <div className="flex justify-end">
                     <button
                        onClick={onClose}
                        aria-label="Close dialog"
                        className="text-gray-400 transition hover:text-white"
                     >
                        ✕
                     </button>
                  </div>
               </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
               {children}
            </div>
         </div>
      </div>
   );
}
