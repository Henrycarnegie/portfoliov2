"use client";

import Image from "next/image";
import Dialog from "./Dialog";
import { Project } from "@/types/project";

type ProjectDialogProps = {
   project: Project | null;
   onClose: () => void;
};

export default function ProjectDialog({
   project,
   onClose,
}: ProjectDialogProps) {
   if (!project) return null;

   return (
      <Dialog isOpen onClose={onClose} title={project.projectName}>
         <div className="space-y-6">
            <Image
               src={project.srcImage ?? "/favicon.ico"}
               alt={project.altImage}
               width={1000}
               height={600}
               className="w-full rounded-xl object-contain"
            />

            <div>
               <p className="text-sm text-gray-400 mb-2">Build with</p>
               <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                     <span
                        key={tech}
                        className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300"
                     >
                        {tech}
                     </span>
                  ))}
               </div>
            </div>

            <div>
               <p className="text-sm text-gray-400 mb-1">Description</p>
               <p className="text-gray-300 leading-6">{project.description}</p>
            </div>
         </div>
      </Dialog>
   );
}
