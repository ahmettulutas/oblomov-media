import { ContentContainer, ContactUsButton, VideoPlayer } from "@/components";
import { videos } from "@/constants/videos";

const Page = () => {
  return (
    <ContentContainer className="pt-52 pb-10">
      <h1 className="page-header my-12">Videolarımıza Göz Atın</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map(item => (<VideoPlayer key={item.key} videoId={item.link} />))}
      </div>
      <div className="flex justify-center my-6">
        <ContactUsButton />
      </div>
    </ContentContainer>
  );
};

export default Page;