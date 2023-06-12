import { Inter } from "next/font/google";
import Image from "next/image";
// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
      <video className="fixed top-0 h-full w-full object-cover -z-10 overflow-hidden"
        src="https://assets.mixkit.co/videos/preview/mixkit-aerial-landscape-of-a-huge-city-at-dusk-41374-large.mp4"
        autoPlay
        loop
        muted
      >
      </video>
      <div className="fixed top-0 h-full w-full flex justify-center align-middle z-[-8]">
        <Image width="100" height="90" alt="focus" src="/camera-focus.svg"/>
      </div>
      <div className="fixed top-0 h-full w-full bg-overLay z-[-9]">
        <svg className="fixed top-0 h-full w-full bg-overLay z-[-8]" version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="600.000000pt" height="300.000000pt" viewBox="0 0 600.000000 300.000000"
          preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
          </g>
        </svg>
      </div>
    </main>
  );
}
