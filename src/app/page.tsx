import { Navbar } from "@/components/navbar";
import TextType from "@/components/textType";
import LightPillar from "@/components/LightPillar";

export default function Home() {
  return (
    <div className="relative isolate flex min-h-screen w-full flex-1 flex-col items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      <div className="absolute inset-0 z-0">
        <LightPillar
          topColor="#ffffff"
          bottomColor="#7b567a"
          intensity={1}
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
      <main className="relative z-10 flex w-full max-w-5xl flex-1 flex-col items-center justify-between bg-transparent px-6 py-10 sm:px-16 sm:items-start">
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
    </div>
  );
}
