"use client";
import React from "react";

import useClickOutside from "@/hooks/useClickOutside";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, onClose);

  return (
    <div style={{ zIndex: 9999 }} className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-opacity-50 bg-gray-900  backdrop-blur z-40">
      <div ref={modalRef} className="z-80 bg-white rounded-lg w-full max-w-screen-lg h-2/4 md:h-3/4 mx-4">
        {children}
      </div>
    </div>
  );
};