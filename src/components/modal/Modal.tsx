'use client';
import useClickOutside from '@/hooks/useClickOutside';
import React from 'react';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, onClose);
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-opacity-50 bg-gray-900 z-80 backdrop-blur">
      <div ref={modalRef} className="bg-white rounded-lg w-full max-w-screen-lg h-3/4 mx-4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
