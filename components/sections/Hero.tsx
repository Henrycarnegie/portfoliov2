import Image from "next/image";

const HeroSection = () => {
   return (
      <section
         id="beranda"
         className="px-4 md:px-56 pt-24 flex flex-col justify-center items-center"
      >
         <div className="flex flex-col gap-24 text-center">
            <div className="flex flex-col justify-center items-center">
               <span className="font-be_vietnam_pro text-2xl lg:text-6xl text-transparent bg-clip-text bg-lienar-to-r w-fit from-purple-500 via-pink-400 to-emerald-300 font-bold">
                  Designer & Frontend Developer
               </span>
               <span className="font-be_vietnam_pro text-lg text-gray-500 font-bold">
                  I design and code to solve the problem, and I love what I do.
               </span>
            </div>
         </div>

         <div className="flex max-w-fit pt-28">
            <Image
               className="mx-auto"
               src="/hero-devices.svg"
               alt="Logo"
               width={1000}
               height={150}
            />
         </div>
      </section>
   );
};

export default HeroSection;
