import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbFocusCentered } from "react-icons/tb";

import { Container } from "@/components/containers";

export default function Home() {

  const mainClassName = "flex h-[100svh] h-screen flex-col items-center justify-between";
  return (
    <main className={mainClassName}>
      <video className="fixed top-0 h-full w-full object-cover -z-[10] overflow-hidden"
        src="/banner.mp4"
        autoPlay
        loop
        muted
        controls={false}
      />
      <div className="relative w-4/5 md:w-2/6 h-60 m-auto">
        <TbFocusCentered className="text-4xl m-auto w-full h-full stroke-[.3px]" />
      </div>
      <div className="fixed top-0 h-full w-full bg-overLay -z-[8] opacity-70" />
      <Container className={"flex justify-between text-sm md:text-xl py-4 items-center"}>
        <p>OBLOMOV</p>
        <div className="relative w-20 h-10">
          <Image alt="slider-bar" fill src={"/slider-bar.png"} className='object-cover' />
        </div>
        <Link href="/videos" className="flex gap-2 items-center">
          <p>Daha fazla</p>
          <HiArrowNarrowRight />
        </Link>
      </Container>
    </main>
  );
}
