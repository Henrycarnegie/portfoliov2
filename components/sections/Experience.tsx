import CardExperience from "../card/CardExperience";

const ExperienceSection = () => {
   return (
      <section
         id="pengalaman"
         className="px-6 md:px-14 xl:px-80 py-40 flex flex-col justify-center items-center"
      >
         <div className="pt-10 flex flex-col gap-4 w-full ">
            <h1 className="font-be_vietnam_pro text-center text-sm">
               Sneak Peak <br />
               <span className="text-4xl text-transparent bg-clip-text bg-linear-to-r w-fit from-purple-500 via-pink-400 to-emerald-300 font-bold">
                  My Experience
               </span>
            </h1>
            <div className="grid gap-6">
               <div className="md:col-span-4 bg-linear-to-t from-slate-950/10 to-slate-950 border-l-8 border-purple-500 rounded-2xl p-4">
                  <h2 className="text-gray-400 mb-4">Education :</h2>
                  <div className="flex flex-col gap-3">
                     <CardExperience
                        imgSrc="/logo_itera.svg"
                        imgAlt="Logo Itera"
                        label="S1 Teknik Informatika"
                        instansi="Institut Teknologi Sumatera"
                        tglExperience="Aug 2021 - Aug 2025"
                     />
                  </div>
               </div>
               <div className="md:col-span-4 bg-linear-to-t from-slate-950/10 to-slate-950 border-l-8 border-purple-500 rounded-2xl p-4">
                  <h2 className="text-gray-400 mb-4">Experience :</h2>
                  <div className="flex flex-col gap-3">
                     <CardExperience
                        imgSrc="/favicon.ico"
                        imgAlt=""
                        label="Frontend Developer"
                        instansi="PT. Jann Azzam Mandiri"
                        tglExperience="Feb 2024 - Jul 2024"
                     />
                     <CardExperience
                        imgSrc="/logo_celerates.svg"
                        imgAlt="Logo Celerates School"
                        label="UI Design & Frontend Developer"
                        instansi="Celerates School"
                        tglExperience="Feb 2024 - Jul 2024"
                     />
                     <CardExperience
                        imgSrc="/logo_hmif.jpeg"
                        imgAlt="Logo HMIF"
                        label="Staff Divisi Pengembangan Anggota HMIF ITERA"
                        instansi="Himpunan Mahasiswa Informatika ITERA"
                        tglExperience="Aug 2021 - Aug 2025"
                     />
                     <CardExperience
                        imgSrc="/logo_km.png"
                        imgAlt="Logo KM"
                        label="Staff Divisi Teknologi Infomasi KM ITERA"
                        instansi="Keluarga Mahasiswa ITERA"
                        tglExperience="Aug 2021 - Aug 2025"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ExperienceSection;
