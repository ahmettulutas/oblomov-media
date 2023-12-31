import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { ContentContainer } from "@/components/containers";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primaryDark relative">
      <ContentContainer className="grid grid-cols-3 gap-6 text-md py-10">
        <div className="relative w-full col-span-3 md:col-span-1 flex flex-col">
          <p className="font-bold mb-2">Bize Ulaşın</p>
          <div className="flex gap-2">
            <FaFacebookF fill="red" width={20} height={20} />
            <FaGooglePlusG fill="red" width={20} height={20} />
            <FaTwitter fill="red" width={20} height={20} />
            <FaInstagram fill="red" width={20} height={20} />
          </div>
        </div>
        <div className="w-full col-span-3 md:col-span-1 text-center">
          <h6 className="font-bold mb-2">Bizimle İletişime Geçin</h6>
          <p className="text-sm text-gray-300">
            {" "}
            Nullam viverra consectetuer quisque cursus et, porttitor risus.
          </p>
          <p className="text-sm text-gray-300">
            {" "}
            +90 531 779 89 28
            <br /> oblomovmedia@gmail.com
          </p>
        </div>
        <div className="w-full col-span-3 md:col-span-1 text-right">
          <h6 className="font-bold mb-2">Bizi Ziyaret Edin</h6>
          <p className="text-sm text-gray-300">
            KURTKÖY MH. ANKARA CAD. YEŞİLIRMAK SK.İSLAM Ş. MERK.NO:30 D:10
            PENDİK - İSTANBUL, 34100, Kurtköy
          </p>
        </div>
      </ContentContainer>
      <ContentContainer className="text-xs flex gap-1">
        © {year}
        <a
          className="text-yellow-400 flex gap-1 items-center w-auto"
          target="_blank"
          href="https://tr.linkedin.com/in/ahmet-ulutas"
          rel="noreferrer"
        >
          Ahmet Ulutaş{" "}
          <FaLinkedin className="text-yellow-400" width={12} height={12} />{" "}
        </a>
        Tüm hakları saklıdır.
      </ContentContainer>
    </footer>
  );
};
