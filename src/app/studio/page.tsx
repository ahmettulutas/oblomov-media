import React from 'react';
import { Accordion, ContentContainer } from '@/components';
import studioBg from '@/assets/images/studio-bg.jpeg';
import icon1 from '@/assets/images/studio-icon1.png';
import icon2 from '@/assets/images/studio-icon2.png';
import icon3 from '@/assets/images/studio-icon3.png';
import Image from 'next/image';
import { accordionData } from '@/constants/accordion';

export default function Page() {
  return (
    <section style={{ backgroundImage: `url(${studioBg.src})`, backgroundAttachment: 'fixed' }} className="bg-center bg-no-repeat bg-cover">
      <ContentContainer className='pt-52 pb-10'>
        <h1 className='text-4xl font-bold text-center m-auto mb-24 max-w-[50%] leading-tight'>KİŞİSEL VE KURUMSAL MEDYA VE İÇERİK ÜRETEN YENİ TRENDLERLE SİZİ BİLİNİR KILAN BİR MEDYA ŞİRKETİ.</h1>
        <section className='grid grid-cols-3 gap-8'>
          <div className='col-span-3 md:col-span-1 flex flex-col gap-4 text-center'>
            <div className='relative h-40'>
              <Image src={icon1.src} fill alt="icon" />
            </div>
            <h4>KALİTELİ SES</h4>
            <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut eros a, vulputate consequat odio.</p>
          </div>
          <div className='col-span-3 md:col-span-1 flex flex-col gap-4 text-center'>
            <div className='relative h-40'>
              <Image src={icon2.src} fill alt="icon" />
            </div>
            <h4>PROFESYONEL VİDEO</h4>
            <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut eros a, vulputate consequat odio.</p>
          </div>
          <div className='col-span-3 md:col-span-1 flex flex-col gap-4 text-center'>
            <div className='relative h-40'>
              <Image src={icon3.src} fill alt="icon" />
            </div>
            <h4>İÇERİK YÖNETİMİ</h4>
            <p>Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut eros a, vulputate consequat odio.</p>
          </div>
        </section>
        <section className='my-16'>
          <Accordion items={accordionData} />
        </section>
      </ContentContainer>
    </section>
  );
}
