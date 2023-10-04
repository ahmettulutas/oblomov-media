"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { videoCardVariants } from "@/constants/motinVariants";

import { Modal } from "../modal";

type Props = {
  videoId: string;
}

export const VideoPlayer: React.FC<Props> = ({ videoId }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <AnimatePresence>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={videoCardVariants}
      >
        <div className='grid grid-cols-1 h-80 relative' onClick={() => setShowModal(true)} role="button" tabIndex={0}>
          <Image
            fill
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video Thumbnail"
          />

          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <iframe
                width="420" height="345"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                className="w-full h-full"
                title="YouTube Video"
                allowFullScreen
              />
            </Modal>
          )}

        </div>
      </motion.div>
    </AnimatePresence>

  );
};
