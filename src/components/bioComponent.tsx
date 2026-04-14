"use client";

import Image from "next/image";
import GradientText from "./gradientText";
import { useTranslation } from "react-i18next";
import {
  faDiagramProject,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="flex-1  text-center md:text-left md:pl-5">
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

          <p className="text-2xl text-white text-center md:text-left">
            {t("bio.helloImAm")}{" "}
            <GradientText colors={["#5227FF", "#FF9FFC"]}>
              {t("bio.devFullStackbio")}
            </GradientText>{" "}
            {t("bio.inLoveWith")}
          </p>
          <div className="redes py-8 flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-0">
            <button className="projects bg-fuchsia-950 w-full md:flex-1 h-16 rounded-4xl focus:ring-white shadow-2xl shadow-white border-2 border-gray-50">
              <span className="text-base font-medium text-primary ">
                {t("bio.myProjects")}
              </span>
              <FontAwesomeIcon
                icon={faDiagramProject}
                className="text-base pl-4"
              />
            </button>

            <button className="bg-rose-900 w-full md:flex-1 h-16 rounded-4xl focus:ring-white shadow-2xl shadow-white border-2 border-gray-50">
              <span className="text-base font-medium text-primary ">
                {t("bio.socialMedia")}
              </span>
              <FontAwesomeIcon icon={faPaperPlane} className="text-base pl-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
