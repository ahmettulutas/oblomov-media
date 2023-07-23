import Image from "next/image";
import React from "react";

import icon1 from "@/assets/images/studio-icon1.png";
import icon2 from "@/assets/images/studio-icon2.png";
import icon3 from "@/assets/images/studio-icon3.png";

export const Features: React.FC = () => {
  return (
    <section className='grid grid-cols-3 gap-12'>
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
  );
};

