"use client";

import Image from "next/image";
import BaseCard from "../base/BaseCard";
import PrimaryButton from "@/components/button/PrimaryButton";
import { Project } from "@/types/project";

type CardProjectProps = {
   project: Project;
   onOpen: (project: Project) => void;
};

export default function CardProject({ project, onOpen }: CardProjectProps) {
   return (
      <BaseCard className="group overflow-hidden border-gray-800 hover:border-pink-500/50 hover:shadow-pink-500/20">
         <Image
            src={project.srcImage ?? "/favicon.ico"}
            alt={project.altImage}
            width={400}
            height={400}
            className="h-52 w-full object-cover transition group-hover:scale-105"
         />

         <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-white group-hover:text-pink-400">
               {project.projectName}
            </h2>

            <p className="text-sm text-gray-400 line-clamp-2">
               {project.description}
            </p>

            <PrimaryButton
               className="px-0 bg-transparent"
               onClick={() => onOpen(project)}
            >
               View Project →
            </PrimaryButton>
         </div>
      </BaseCard>
   );
}
