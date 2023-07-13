import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <main className={"flex h-screen flex-col items-center justify-between"}>
      <video className="fixed top-0 h-full w-full object-cover -z-[10] overflow-hidden"
        src="https://assets.mixkit.co/videos/preview/mixkit-aerial-landscape-of-a-huge-city-at-dusk-41374-large.mp4"
        autoPlay
        loop
        muted
      >
      </video>
      <div className="relative w-80 h-screen flex items-center">
      <Image alt="camera-focus" style={{width:"100%", height:"auto", objectFit: "cover"}} width={400} height={400} src={"/camera.png"} className="m-auto p-4" />
      </div>
      <div className="fixed top-0 h-full w-full bg-overLay -z-[8] opacity-70">
      </div>
      <section className="flex justify-between m-8 items-center text-xl">
        <Link href="/videos" className="flex gap-2 items-center">
          <p>Daha fazla</p>
          <HiArrowNarrowRight />
        </Link>
      </section>
    </main>
  );
}
