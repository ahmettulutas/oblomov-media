import { StaticImageData } from "next/image";

import icon1 from "@/assets/images/studio-icon1.png";
import icon2 from "@/assets/images/studio-icon2.png";
import icon3 from "@/assets/images/studio-icon3.png";

export type Feature = {
  index: number;
  title: string;
  description: string;
  img: StaticImageData;
};

export const featuresData: Array<Feature> = [
  {
    index: 0,
    title: "Kaliteli Ses",
    img: icon1,
    description:
      "Profesyonel ses kaydı ve düzenlemesi ile içeriğinizi en yüksek kalitede sunun. Müşterilerinizi etkileyici ses deneyimleriyle buluşturun.",
  },
  {
    index: 1,
    title: "Profesyonel Video",
    img: icon2,
    description:
      "Üst düzey video prodüksiyonu ile hikayelerinizi görsel şölene dönüştürün. Profesyonel ekipmanlar ve kreatif yaklaşımımızla etkileyici videolar üretiyoruz.",
  },
  {
    index: 2,
    title: "İçerik Yönetimi",
    img: icon3,
    description:
      "İçeriklerinizi etkili bir şekilde yönetmek ve hedef kitlenize en iyi şekilde ulaşmak için özel içerik yönetim çözümlerimizle tanışın. İçerikleri yayınlayın, takip edin ve analiz edin.",
  },
];
