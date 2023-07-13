"use client";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Container } from "@/components/containers";
import { listVariants, navLinks, navVariants, sideVariants, ulVariants } from "@/constants/navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import CloseIcon from "public/images/icons/close.svg";
import MenuIcon from "public/images/icons/menu.svg";
import CameraIcon from "public/images/icons/camera.svg";

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
  }, []);
  return (
    <nav className={twMerge("text-white transition-all ease-in delay-100 border-red-500 top-0 right-0 z-50 left-0 bg-transparent opacity-95", scrolled ? "bg-primaryDark fixed py-2" : "bg-transparent absolute py-4")}>
      <Container className={twMerge("flex justify-between", scrolled ? "py-1" : "py-10")}>
        <Link href="/" className="flex gap-3 items-center justify-center">
          <CameraIcon className="text-white" />
          <p className="text-xl">OBLOMOV</p>
        </Link>
        <ul className="gap-2 hidden md:flex">
          { navLinks.map(item => (
            <li key={item.id}>
              <Link href={item.id} className="h-full block relative mx-auto text-white before:w-0 hover:before:w-full
              before:h-0.25 before:bg-white before:transition-all before:bottom-[-0.125rem] before:duration-200 before:absolute">
                {item.title.toLocaleUpperCase("tr-TR")}
              </Link>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          { open ?
            <motion.nav
              className="md:hidden bg-primaryDark p-4 absolute right-0 top-0 h-screen"
              initial={false}
              animate={open ? "open" : "closed"}
              variants={navVariants}
            >
              <CloseIcon className="m-4 ml-auto text-white" onClick={() => cycleOpen()}/>
              <motion.ul
                initial="closed"
                exit="closed"
                variants={ulVariants}
              >
                {navLinks.map(item => (
                  <motion.li key={item.id} whileHover={{ scale: 1.1 }} variants={listVariants} className="border-t-2 border-borderTop py-3 px-3">
                    <Link className="text-white" href={item.id}>{item.title}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
            : null
          }
        </AnimatePresence>
        { !open ? <MenuIcon onClick={() => cycleOpen()} className="text-white md:hidden"/> : null }
      </Container>
    </nav>
  );
};
