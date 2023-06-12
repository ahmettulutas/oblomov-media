"use client";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Container } from "@/components/container";
import { listVariants, navLinks, sideVariants } from "@/constants/navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import CloseIcon from "@/images/icons/close.svg";
import MenuIcon from "@/images/icons/menu.svg";
import CameraIcon from "@/images/icons/camera.svg";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false),
    [open, cycleOpen] = useCycle(false, true),

    handleScroll = () => {
      if (window.scrollY > 70) setScrolled(true);
      else setScrolled(false);
    };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return (() => window.removeEventListener("scroll", handleScroll));
  });

  return (
    <nav className={twMerge("text-white transition-all ease-in delay-100 border-red-500 top-0 right-0 left-0 bg-transparent opacity-95", scrolled ? "bg-primaryDark sticky" : "bg-transparent absolute py-2")}>
      <Container className={twMerge("flex justify-between", scrolled ? "py-1" : "py-10")}>
        <CameraIcon className="text-white" />
        <ul className="gap-2 hidden md:flex">
          {navLinks.map(item => (
            <li key={item.id}>
              <Link href={item.id} className="h-full block relative mx-auto text-white before:w-0 hover:before:w-full before:h-0.5 before:bg-white before:transition-all before:bottom-[-0.125rem] before:duration-200 before:absolute">
                {item.title.toLocaleUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {open && (
            <motion.aside
              className="md:hidden bg-primaryDark p-4 absolute right-0 top-0 h-screen"
              animate={{ width: "250px" }}
              exit={{ width: 0, transition: { delay: 0.8, duration: 0.3 } }}
            >
              <CloseIcon className="m-4 ml-auto text-white" onClick={() => cycleOpen()}/>
              <motion.div
                initial="closed"
                animate={open ? "open" : "closed"}
                exit="closed"
                variants={sideVariants}
              >

                {navLinks.map(item => (
                  <motion.div key={item.id} whileHover={{ scale: 1.1 }} variants={listVariants} className="border-t-2 border-borderTop py-3 px-3">
                    <Link className="text-white" href={item.id}>{item.title}</Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
        {!open ? <MenuIcon onClick={() => cycleOpen()} className="text-white md:hidden"/> : null}
      </Container>
    </nav>
  );
};
