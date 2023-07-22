import { ContentContainer, ContactUsButton, VideoPlayer } from '@/components';
import { videos } from '@/constants/videos';

const Page = () => {
  return (
    <ContentContainer className='pt-52 pb-10'>
      <h1 className='text-4xl font-bold text-center my-4'>Watch our Videos</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {videos.map(item => (<VideoPlayer key={item.key} videoId={item.link} />))}
      </div>
      <div className='flex justify-center my-6'>
        <ContactUsButton />
      </div>
    </ContentContainer>
  )
};

export default Page;