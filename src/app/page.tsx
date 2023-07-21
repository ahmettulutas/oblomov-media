import Image from 'next/image';
import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { CameraCanvas } from '@/components/3dCamera';
import { Container } from '@/components/containers';

export default function Home() {
  return (
    <main className={'flex h-screen flex-col items-center justify-between bg-secondary'}>
      <Container className={'fixed bottom-0 left-0 right-0 flex justify-between text-sm md:text-xl py-4 items-center z-10'}>
        <p>OBLOMOV</p>
        <div className="relative w-20 h-10">
          <Image alt="slider-bar" fill src={'/slider-bar.png'} style={{ objectFit: 'cover' }} />
        </div>
        <Link href="/" className="flex gap-2 items-center">
          <p>Daha fazla</p>
          <HiArrowNarrowRight />
        </Link>
      </Container>
      <CameraCanvas />
    </main>
  );
}
