import { ReactNode } from 'react';

import { Footer } from './footer';
import { Navbar } from './navbar';

/* import { Header } from '../header'; */


interface LayoutPropsInterface {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutPropsInterface) => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};
