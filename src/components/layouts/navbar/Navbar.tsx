'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '@/components/containers';
import { listVariants, navLinks, sideVariants } from '@/constants/navbar';
import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import CameraIcon from 'public/images/icons/camera.svg';
import { NavbarToggle } from './NavbarToggle';
import { usePathname } from 'next/navigation';
export const Navbar: React.FC = () => {

  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const currentPathName = usePathname();
  const handleScroll = () => {
    if (window.scrollY > 70) setScrolled(true);
    else setScrolled(false);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (() => window.removeEventListener('scroll', handleScroll));
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [currentPathName]);

  return (
    <nav className={twMerge('text-white transition-all ease-in delay-100 border-red-500 top-0 right-0 z-50 left-0 bg-transparent opacity-95', scrolled ? 'bg-primaryDark fixed py-2' : 'bg-transparent absolute py-4')}>
      <Container className={twMerge('flex justify-between', scrolled ? 'py-1' : 'py-10')}>
        <Link href="/" className="flex gap-3 items-center justify-center">
          <CameraIcon className="text-white" />
          <p className="text-xl">OBLOMOV</p>
        </Link>
        <ul className="gap-2 hidden md:flex">
          { navLinks.map(item => (
            <li key={item.id}>
              <Link href={item.id} className={`${currentPathName === item.id ? 'before:w-full' : ''} h-full block relative mx-auto text-white before:w-0 hover:before:w-full
              before:h-0.25 before:bg-white before:transition-all before:bottom-[-0.125rem] before:duration-200 before:absolute`}>
                {item.title.toLocaleUpperCase('tr-TR')}
              </Link>
            </li>
          ))}
        </ul>
        <AnimatePresence>
          { open && (
            <motion.aside
              className="md:hidden bg-primaryDark absolute right-0 top-0 h-screen p-4"
              initial={{ width: 0 }}
              animate={{ width: '50vw' }}
              exit={{ width: 0, transition: { delay: 0.4, duration: 0.3 } }}
            >
              <motion.ul
                className="mt-24"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {navLinks.map(({ title, id }) => (
                  <motion.li
                    className="border-t-2 border-borderTop py-3 px-3 text-center"
                    key={id}
                    whileHover={{ scale: 1.1 }}
                    variants={listVariants}
                  >
                    <Link href={id}>{title}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.aside>
          )}
        </AnimatePresence>
        <div className="z-20 md:hidden flex justify-center items-center">
          <NavbarToggle open={open} toggle={() => setOpen(!open)}/>
        </div>
      </Container>
    </nav>
  );
};
