import Image from "next/image";
import { AiFillPhone } from "react-icons/ai";

import contactBg from "@/assets/images/contact-bg.png";
import ContactHero from "@/assets/images/contact-hero.jpg";
import { ContentContainer } from "@/components";
import ContactForm from "@/components/contact-form/ContactForm";

export default function Page() {
  return (
    <section>
      <div className="w-screen top-0 left-0 relative h-full">
        <Image src={ContactHero} alt="oblomov media iletişim arka planı" />
      </div>
      <h1 className="page-header m-auto mb-24">Bizimle İletişime Geçin</h1>
      <section style={{ backgroundImage: `url(${contactBg.src})`, backgroundRepeat: "no-repeat" }}>
        <ContentContainer className='pt-12 pb-10'>
          <section className="my-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Opening Hours */}
            <article className="flex flex-col gap-2">
              <h2 className="uppercase text-3xl font-bold mb-4">Açılış Saatleri</h2>
              <p className="text-sm text-gray-300 mb-4">Mauris neque. Pellentesque dolor. Mauris in est. Vivamus lacus sed justo enean</p>
              <p className=" w-fit border-b-2 border-b-brandColor">Pazartesi - Cuma</p>
              <div className="flex gap-4 items-center text-brandColor">
                <span className="text-4xl leading-normal relative">8
                  <sup className="ml-1 text-sm leading-normal absolute top-[8px]">00</sup>
                </span>
                <span className="ml-4">-</span>
                <span className="text-4xl leading-normal relative">16
                  <sup className="ml-1 text-sm leading-normal absolute top-[8px]">00</sup>
                </span>
              </div>
              <p className="w-fit border-b-2 border-b-brandColor">Cumartesi</p>
              <div className="flex gap-4 items-center text-brandColor">
                <span className="text-4xl leading-normal relative">8
                  <sup className="ml-1 text-sm leading-normal absolute top-[8px]">00</sup>
                </span>
                <span className="ml-4">-</span>
                <span className="text-4xl leading-normal relative">15
                  <sup className="ml-1 text-sm leading-normal absolute top-[8px]">00</sup>
                </span>

              </div>
            </article>
            {/* End of Opening Hours */}
            {/* Contact Adresses */}
            <article className="flex flex-col gap-2">
              <h2 className="uppercase text-3xl font-bold mb-4">Bizimle İletişime Geçin</h2>
              <p className="text-sm text-gray-300 mb-4">Mauris neque. Pellentesque dolor. Mauris in est. Vivamus lacus sed justo enean</p>
              <section className="grid gap-4">
                <div className="flex gap-2 items-center">
                  <AiFillPhone className="text-brandColor" />
                  <p className="text-sm text-gray-300">+90 0577 777 77 77</p>
                </div>
                <div className="flex gap-2 items-center">
                  <AiFillPhone className="text-brandColor" />
                  <p className="text-sm text-gray-300">+90 0577 777 77 77</p>
                </div>
                <div className="flex gap-2 items-center">
                  <AiFillPhone className="text-brandColor" />
                  <p className="text-sm text-gray-300">+90 0577 777 77 77</p>
                </div>
              </section>
            </article>
            {/* End of the Contact Adressed */}
            {/* Info */}
            <article className="flex flex-col gap-2">
              <h2 className="uppercase text-3xl font-bold mb-4">İşbirliği İçin Bize Ulaşın</h2>
              <p className="text-sm text-gray-300 mb-4">Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem.
                Nam lacinia suscipit accumsan. Donec sodales, neque vitae rutrum convallis, nulla tortor pharetra odio, in varius ante ante sed nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </article>
            {/* End of the Info */}
          </section>
        </ContentContainer>
      </section>
      <ContentContainer className='pt-24 pb-10'>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-4xl font-bold mb-4 leading-tight tracking-wide uppercase">Bize Mesaj Bırakın</h3>
            <p className="text-sm text-gray-300">Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis odio, at ornare nibh. In malesuada, tortor eget sodales mollis, mauris lectus hendrerit purus, porttitor finibus eros lorem eget mauris.</p>
          </div>
          <ContactForm />
        </section>
      </ContentContainer>
    </section>
  );
}