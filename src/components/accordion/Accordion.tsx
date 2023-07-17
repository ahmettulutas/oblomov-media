'use client';
import React from 'react';
import { AccordionData } from '@/constants/accordion';
import { AccordionItem } from './AccordionItem';

type Props<T> = {
  items: Array<T>;
}

export const Accordion:React.FC<Props<AccordionData>> = ({ items }) => {
  const [id, setId] = React.useState<undefined | number>(undefined);
  const handleSelect = (id: number | undefined): void => {
    setId(id);
  };
  return (
    <section>
      {items.map(accordion => (<AccordionItem item={accordion} key={accordion.id} toggle={handleSelect} selected={id}/>))}
    </section>
  );
};
