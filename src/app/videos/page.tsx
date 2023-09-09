import { ContentContainer, VideoPlayer } from "@/components";
import { videos } from "@/constants/videos";

export default function Page () {
  return (
    <ContentContainer className="pt-52 pb-10">
      <h1 className="page-header m-auto mb-12">Videolarımıza Göz Atın</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map(item => (<VideoPlayer key={item.key} videoId={item.link} />))}
      </div>
    </ContentContainer>
  );
}

