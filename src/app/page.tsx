import Image from "next/image";
import { Waves } from "./_components/waves";

export default function Home() {
  return (
    <div className="h-svh bg-gradient-to-r from-transparent to-secondary from-50% to-50% flex p-3 relative">
      <div className="absolute right-0 bottom-0 w-full h-32 overflow-hidden">
        <Waves />
      </div>
      <div className="border border-foreground flex-1 flex justify-center items-center gap-4 p-6 pl-16">
        <div className="flex-1 flex h-full gap-6">
          <span className="h-fit scale-flip [writing-mode:vertical-rl] font-styled">
            Ai que não sei oq sei la oq mais
          </span>
          <Image
            src="https://wallpaper.forfun.com/fetch/c7/c75c73acc09db223b6fac179fb421e7a.jpeg"
            alt="picture"
            className="h-full w-[30rem] object-cover"
            width={2880}
            height={2560}
          />
        </div>
        <div className="flex-1 text-xl mb-5">
          <h1 className="text-5xl font-bold font-styled">Maria Clara Brito</h1>
          <span className="italic pl-56">Psicóloga Psicanalista</span>
        </div>
      </div>
    </div>
  );
}
