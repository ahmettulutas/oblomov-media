import studioBg from "@/assets/images/studio-bg.jpeg";
import { AccordionContainer, Carousel, ContentContainer, Features } from "@/components";
import { CameraCanvas } from "@/components/3dCamera";
import { accordionData } from "@/constants/accordion";
import { featuresData } from "@/constants/feature";
import { images } from "@/constants/images";

export default function Page() {
  return (
    <section style={{ backgroundImage: `url(${studioBg.src})`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }} className="bg-center bg-no-repeat bg-cover">
      <ContentContainer className='pt-52 pb-10'>

        <h1 className='page-header mb-24'>kişisel ve kurumsal medya ve içerik üreten yeni trendlerle sizi bilinir kılan bir medya şirketi</h1>
        <Features data={featuresData} />
        <section className='my-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <AccordionContainer className='order-2 md:order-1' items={accordionData} />
          <div className='order-1 md:order-2'>
            <CameraCanvas />
          </div>
        </section>
      </ContentContainer >
      <div className='my-10'>
        <Carousel imageCarousel showDots images={images} loop />
      </div>
    </section >
  );
}
