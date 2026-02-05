"use client";

import Image from "next/image";
import BaseCard from "../base/BaseCard";

type CardExperienceProps = {
  imgSrc?: string;
  imgAlt: string;
  label: string;
  instansi: string;
  tglExperience: string;
};

export default function CardExperience({
  imgSrc = "/favicon.ico",
  imgAlt,
  label,
  instansi,
  tglExperience,
}: CardExperienceProps) {
  return (
    <BaseCard className="flex items-center justify-between p-3 border-gray-600/80 bg-linear-to-t from-slate-950/10 to-slate-950">
      <div className="flex items-center gap-3">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={40}
          height={40}
          className="rounded-lg object-contain"
        />

        <div>
          <h3 className="text-sm md:text-base text-gray-300">{label}</h3>
          <p className="text-xs md:text-sm text-gray-400">{instansi}</p>
        </div>
      </div>

      <span className="text-xs text-gray-400">{tglExperience}</span>
    </BaseCard>
  );
}
