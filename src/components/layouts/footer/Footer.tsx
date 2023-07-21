
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram } from 'react-icons/fa';

import { ContentContainer } from '@/components/containers';

export const Footer = () => (
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
        <h6 className='font-bold mb-2'>Bizimle İletişime Geçin</h6>
        <p className='text-sm text-gray-300'> Nullam viverra consectetuer quisque cursus et, porttitor risus.</p>
      </div>
      <div className="w-full col-span-3 md:col-span-1">
        <p className='text-sm text-gray-300 text-right'> +90 531 779 89 28<br /> ahmetulutas93@gmail.com</p>
      </div>
    </ContentContainer>
  </footer>
);
