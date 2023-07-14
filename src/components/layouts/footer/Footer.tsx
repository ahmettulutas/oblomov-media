import { ContentContainer } from '@/components/containers';
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => (
  <footer className="bg-primaryDark">
    <ContentContainer className="grid grid-cols-3 gap-4 text-xl py-10">
      <div className="relative w-full col-span-3 md:col-span-1 flex flex-col">
        <p className="mb-2">Find Us Here</p>
        <div className="flex gap-2">
          <FaFacebookF fill="red" width={20} height={20} />
          <FaGooglePlusG fill="red" width={20} height={20} />
          <FaTwitter fill="red" width={20} height={20} />
          <FaLinkedin fill="red" width={20} height={20} />
        </div>
      </div>
      <div className="relative w-full h-10 col-span-3 md:col-span-1">
          hi
      </div>
      <div className="relative w-full h-10 col-span-3 md:col-span-1">
          hi
      </div>
    </ContentContainer>
  </footer>
);
