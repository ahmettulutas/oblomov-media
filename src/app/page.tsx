import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

import { Container } from "@/components/containers";

export default function Home() {

  const mainClassName = "flex h-[100svh] h-screen flex-col items-center justify-between";
  return (
    <main className={mainClassName}>
      <video className="fixed top-0 h-full w-full object-cover -z-[10] overflow-hidden"
        src="/banner.mp4"
        autoPlay
        loop
        playsInline // future note. this line has solved autoplay bug on ios
        muted
        controls={false}
      />
      <Image width={400} height={200} alt="camera-focus" src={"/camera.png"} className="m-auto p-4" priority />
      <div className="fixed top-0 h-full w-full bg-overLay -z-[8] opacity-70" />
      <Container className={"flex justify-between text-sm md:text-xl py-4 items-center"}>
        <p>OBLOMOV</p>
        <Image alt="slider-bar" width={100} height={40} style={{ height: "auto" }} src={"/slider-bar.png"} className='object-cover' />
        <Link href="/videos" className="flex gap-2 items-center">
          <p>Daha fazla</p>
          <HiArrowNarrowRight />
        </Link>
      </Container>
    </main>
  );
}
