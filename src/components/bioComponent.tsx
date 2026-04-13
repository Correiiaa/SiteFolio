"use client";

import Image from "next/image";
import GradientText from "./gradientText";
import { useTranslation } from "react-i18next";

export const BioComponent = () => {
  const { t } = useTranslation();

  return (
    <main className="max-w-5xl mx-auto px-6 mt-12">
      <div className="flex flex-col md:flex-row md:items-start items-center gap-6">
        {/* Image on the left on md+ */}
        <div className="w-[180px] h-[180px] flex-shrink-0 overflow-hidden rounded-lg relative mx-auto md:mx-0 ring-4 ring-white/30 shadow-[0_0_40px_rgba(255,255,255,0.55)] transition-shadow duration-200 hover:shadow-[0_0_50px_rgba(255,255,255,0.9)] transform hover:scale-[1.02]">
          <Image
            src="/profile.png"
            alt="Toni Correia"
            fill
            className="object-cover"
          />
        </div>

        {/* Content on the right (expands) */}
        <div className="flex-1 text-center md:text-left md:pl-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-fade-in mx-auto md:mx-0">
            <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
            <span className="text-sm font-medium text-primary">
              {t("bio.devFullStack")}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
            <GradientText
              colors={["#ffffff", "#3d3d3d"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              Toni Correia
            </GradientText>
          </h1>

          <p className="text-2xl text-gray-300 text-center md:text-left">
            {t("bio.helloImAm")}{" "}
            <GradientText colors={["#5227FF", "#FF9FFC"]}>
              {t("bio.devFullStackbio")}
            </GradientText>{" "}
            {t("bio.inLoveWith")}
          </p>
        </div>
      </div>
    </main>
  );
};
