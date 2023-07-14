'use client';
import React from 'react';
import Modal from '../modal/Modal';
type VideoProps = {
  videoId: string;
}
const VideoPlayer: React.FC<VideoProps> = ({ videoId }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='grid grid-cols-1 w-auto' onClick={() => setShowModal(true)}>
      <img
        className='col-span-1'
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt="Video Thumbnail"
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <Modal onClose={() => setShowModal(false)}>
              <iframe
                width="420" height="345"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                className="w-full h-full"
                title="YouTube Video"
                allowFullScreen
              ></iframe>
            </Modal>
          </div>
        </div>
      )}

    </div>


  );
};

export default VideoPlayer;