import studioBg from "@/assets/images/studio-bg.jpeg";
import { Accordion, Carousel, ContentContainer, Features } from "@/components";
import { CameraCanvas } from "@/components/3dCamera";
import { accordionData } from "@/constants/accordion";
import { images } from "@/constants/images";

const carouselItems = [<p key={1}>Deneme</p>, <p key={1}>Deneme2</p>, <p key={1}>Deneme3</p>];

export default function Page() {
  return (
    <section style={{ backgroundImage: `url(${studioBg.src})`, backgroundAttachment: "fixed" }} className="bg-center bg-no-repeat bg-cover">
      <ContentContainer className='pt-52 pb-10'>
        <h1 className='text-4xl font-bold text-center m-auto mb-24 lg:max-w-[50%] leading-tight'>KİŞİSEL VE KURUMSAL MEDYA VE İÇERİK ÜRETEN YENİ TRENDLERLE SİZİ BİLİNİR KILAN BİR MEDYA ŞİRKETİ.</h1>
        <Features />
        <section className='my-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Accordion className='order-2 md:order-1' items={accordionData} />
          <div className='order-1 md:order-2'>
            <CameraCanvas />
          </div>
        </section>
      </ContentContainer >
      <div className='my-10'>
        <Carousel imageCarousel showDots images={images} loop />
        {/* <Carousel imageCarousel={false} carouselItems={carouselItems} /> */}
      </div>
    </section >
  );
}
