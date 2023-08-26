import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

import { Container } from "@/components/containers";

export default function Home() {

  const mainClassName = "flex h-screen h-[100svh] flex-col items-center justify-between";
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
        <Image alt="camera-focus" fill src={"/camera.png"} className="m-auto p-4" />
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
