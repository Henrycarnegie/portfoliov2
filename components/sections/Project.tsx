"use client";

import { useState } from "react";
import CardProject from "../card/CardProject";
import { Project } from "@/types/project";
import { projects } from "@/lib/project";
import ProjectDialog from "../dialog/ProjectDialog";

export default function ProjectSection() {
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

   return (
      <section
         id="projects"
         className="px-6 py-40 bg-linear-to-b from-gray-950 via-gray-900 to-black md:px-14 xl:px-80"
      >
         <header className="mb-12">
            <p className="text-sm text-gray-400">enjoy</p>
            <h2 className="text-4xl font-bold bg-linear-to-r from-purple-500 via-pink-400 to-emerald-300 bg-clip-text text-transparent">
               My Recent Work
            </h2>
         </header>

         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
               <CardProject
                  key={project.projectName}
                  project={project}
                  onOpen={setSelectedProject} // ✅ FIX
               />
            ))}
         </div>

         <ProjectDialog
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
         />
      </section>
   );
}
