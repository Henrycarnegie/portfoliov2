import { cn } from "@/lib/utils";
import React from "react";

type BaseCardProps = {
   children: React.ReactNode;
   className?: string;
};

export default function BaseCard({ children, className }: BaseCardProps) {
   return (
      <div className={cn("rounded-2xl border transition-all", className)}>
         {children}
      </div>
   );
}
