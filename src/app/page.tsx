import Image from 'next/image';
import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Container } from '@/components/containers';

export default function Home() {
  return (
    <main className={'flex h-screen max-h-screen flex-col items-center justify-between'}>
      <video className="fixed top-0 h-full w-full object-cover -z-[10] overflow-hidden"
        src="/banner.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative w-80 h-screen flex items-center">
        <Image alt="camera-focus" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} width={400} height={400} src={'/camera.png'} className="m-auto p-4" />
      </div>
      <div className="fixed top-0 h-full w-full bg-overLay -z-[8] opacity-70" />
      <Container className={'flex justify-between text-sm md:text-xl py-4 items-center'}>
        <p>OBLOMOV</p>
        <div className="relative w-20 h-10">
          <Image alt="slider-bar" fill src={'/slider-bar.png'} />
        </div>
        <Link href="/" className="flex gap-2 items-center">
          <p>Daha fazla</p>
          <HiArrowNarrowRight />
        </Link>
      </Container>
      {/*       <CameraCanvas /> */}
    </main>
  );
}
