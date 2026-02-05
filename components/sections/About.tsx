import techStack from "@/lib/TechStack";
import Image from "next/image";
import Tooltip from "../tooltip/Tooltip";

const AboutSection = () => {
   return (
      <section
         id="intro"
         className="mx-6 md:mx-14 xl:mx-80 py-10 bg-linear-to-t from-slate-950/10 to-slate-950 border-t-8 border-purple-500 rounded-2xl flex flex-col justify-center items-center"
      >
         <div className="flex justify-between">
            <div className="md:w-[60%] flex flex-col gap-4">
               <h1 className="text-center text-sm font-be_vietnam_pro">
                  something <br />
                  <span className="text-2xl text-transparent bg-clip-text bg-linear-to-r w-fit from-purple-500 via-pink-400 to-yellow-300 font-bold">
                     About Me
                  </span>
               </h1>
               <span className="text-gray-100 text-base text-justify max-w-260 leading-8">
                  Hello! My name is Henry Carnegie, and I enjoy creating
                  beautifull things that goes around internet. My interest in
                  web development started back when i join college and try
                  creating my portfolio website — Fast-forward to today,
                  I&apos;ve been graduated with Bachelor of Computer Science
                  Degree. My main focus these days is building digital
                  experience for client and Pursue master degree for my
                  academic.
                  <br />
                  <br />I have experience building dynamic, responsive websites
                  using{" "}
                  {techStack.map((index) => (
                     <Tooltip
                        image={index.image}
                        label={index.label}
                        key={index.label}
                     />
                  ))}
                  Skilled in designing interactive interfaces, implementing CRUD
                  functionality, and solving problem for stakeholder also
                  creating great user experience for modern web applications.
               </span>
            </div>
            <div className="w-2/6 hidden md:flex justify-center items-center z-0">
               <div className="relative w-75 h-75 group ">
                  <div className="before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-purple-500/90 group-hover:before:translate-x-0.5 group-hover:before:translate-y-0.5 before:transition-transform before:duration-300 before:ease-out before:z-1">
                     <Image
                        src="/profile-picture.png"
                        alt="Profile"
                        fill
                        className="bg-emerald-400 rounded-lg object-cover relative z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 "
                     />
                     <div className="absolute inset-0 rounded-lg border-2 border-purple-500 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
