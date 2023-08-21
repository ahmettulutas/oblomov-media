import Image from "next/image";
import React from "react";

import { Feature } from "@/constants/feature";

type Props = {
  data: Array<Feature>
}

export const Features: React.FC<Props> = ({ data }) => {
  return (
    <section className="grid grid-cols-3 gap-12">
      {(data || []).map(item => (
        <div key={item.index} className="col-span-3 md:col-span-1 flex flex-col gap-4 text-center">
          <div className="relative h-40">
            <Image src={item.img} fill alt="icon" />
          </div>
          <h4 className="uppercase">{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

