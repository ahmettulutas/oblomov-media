import { StaticImageData } from "next/image";

import icon1 from "@/assets/images/studio-icon1.png";
import icon2 from "@/assets/images/studio-icon2.png";
import icon3 from "@/assets/images/studio-icon3.png";

export type Feature = {
  index: number;
  title: string;
  description: string;
  img: StaticImageData;
}
export const featuresData: Array<Feature> = [
  {
    index: 0,
    title: "Kaliteli Ses",
    img: icon1,
    description: "Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut eros a, vulputate consequat odio."
  },
  {
    index: 1,
    title: "Profesyonel Video",
    img: icon2,
    description: "Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut eros a, vulputate consequat odio."
  },
  {
    index: 2,
    title: "İçerik Yönetimi",
    img: icon3,
    description: "Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut eros a, vulputate consequat odio."
  },

];