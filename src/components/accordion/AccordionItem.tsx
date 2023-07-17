'use client';
import { AccordionData } from '@/constants/accordion';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
type Props = {
  item: AccordionData;
  selected: undefined | number;
  // eslint-disable-next-line no-unused-vars
  toggle: (id: number | undefined) => void;
}

export const AccordionItem:React.FC<Props> = ({ item, toggle, selected }) => {
  const isOpen = selected === item.id;
  return (
    <div className={`relative ${isOpen ? 'before:absolute before:block before:bg-brandColor before:left-0 before:h-full before:w-0.25': ''}`}>
      <div className={`py-4 flex gap-4 cursor-pointer relative ${isOpen ? 'text-brandColor': ''}`}
        onClick={() => toggle(isOpen ? undefined : item.id)}> {/* Cleans the selected state and closes the accordion if user clicks on the isOpen item */}
        <span className='absolute left-4'>{item.id}</span>
        <h5 className='pl-12'>{item.title.toLocaleUpperCase()}</h5>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.4 }}
              className="p-2 pl-12"
            >
              <p className='text-sm'>{item.description}</p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
