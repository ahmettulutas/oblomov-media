"use client";
import React from "react";

import { AccordionData } from "@/constants/accordion";

import { AccordionItem } from "./AccordionItem";

type Props<T> = {
  items: Array<T>;
  className?: string;
}

export const AccordionContainer: React.FC<Props<AccordionData>> = ({ items, className }) => {
  const [id, setId] = React.useState<undefined | number>(undefined);
  const handleSelect = (id: number | undefined): void => {
    setId(id);
  };
  return (
    <section className={className}>
      {items.map(accordion => (<AccordionItem item={accordion} key={accordion.id} toggle={handleSelect} selected={id} />))}
    </section>
  );
};
