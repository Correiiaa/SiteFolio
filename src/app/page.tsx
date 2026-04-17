import { Navbar } from "@/components/navbar";
import TextType from "@/components/textType";
import LightPillar from "@/components/LightPillar";
import { ProjectsComponent } from "@/components/projectsComponente";
import { cookies } from "next/headers";
import en from "../../public/language/en-US.json";
import pt from "../../public/language/pt-PT.json";

export default async function Home() {
  const cookieStore = await cookies();
  const rawLocale = cookieStore.get("i18nextLng")?.value || "en-US";
  const locale = rawLocale.startsWith("pt") ? pt : en;

  const projects = [
    {
      title: locale.projects.ecommerce.title,
      description: locale.projects.ecommerce.description,
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      href: "https://github.com/Correiiaa/E-commerce",
    },
    {
      title: locale.projects.ecommerceMobile.title,
      description: locale.projects.ecommerceMobile.description,
      stack: ["React Native", "Mobile UI", "TypeScript"],
      href: "https://github.com/Correiiaa/E-commerce-mobile",
    },
    {
      title: locale.projects.storeManagement.title,
      description: locale.projects.storeManagement.description,
      stack: ["JavaScript", "Dashboard", "CRUD"],
      href: "https://github.com/Correiiaa/Sistema_De_Gestao_Loja",
    },
    {
      title: locale.projects.bluetoothCar.title,
      description: locale.projects.bluetoothCar.description,
      stack: ["ESP32", "Bluetooth", "IoT"],
      href: "https://github.com/Correiiaa/ESP32_Bluetooth_Car",
    },
    {
      title: locale.projects.library.title,
      description: locale.projects.library.description,
      stack: ["Python", "Biblioteca", "Gestão"],
      href: "https://github.com/Correiiaa/Python_Biblioteca_ESAN",
    },
    {
      title: locale.projects.roboticArm.title,
      description: locale.projects.roboticArm.description,
      stack: ["Arduino", "Bluetooth", "Robótica"],
      href: "https://github.com/Correiiaa/Robotic-Arm-Bluetooth-Control",
    },
  ];

  return (
    <div className="relative isolate flex min-h-screen w-full flex-1 flex-col items-stretch justify-center overflow-hidden bg-black text-white font-sans">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <LightPillar
          topColor="#ffffff"
          bottomColor="#4b4b4b"
          intensity={0.8}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      <Navbar />
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-between bg-transparent px-6 py-10 sm:px-16 sm:items-start">
        <div className="w-auto text-left">
          <TextType
            strings={[
              "Full Stack Developer",
              "React, Next.js, Node.js, TypeScript",
              "Python, PHP, SQL",
              "Toni Correia",
            ]}
          />
        </div>
      </main>
      <ProjectsComponent
        heading={locale.projects.myProjects}
        sectionLabel={locale.projects.sectionLabel}
        sectionIntro={locale.projects.sectionIntro}
        viewRepositoryLabel={locale.projects.viewRepository}
        projects={projects}
      />
    </div>
  );
}
