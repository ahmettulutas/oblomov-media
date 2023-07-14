import * as React from 'react';


type ToggleProps = {
  open: boolean;
  toggle: () => void
}
export const NavbarToggle:React.FC<ToggleProps> = ({ open, toggle }) => (
  <button onClick={toggle} aria-label="navbar-toggle" className="">
    <div className={`${open ? 'transform rotate-[45deg] translate-x-[-2px] translate-y-[6px]' : ''} bg-white h-0.5 w-6 transition-all duration-300 ease-in`}></div>
    <div className={`${open ? 'hidden' : ''} bg-white h-0.5 w-6 transition-all duration-300 ease-in mt-1`}></div>
    <div className={`${open ? 'transform rotate-[-45deg] translate-x-[-2px] translate-y-[2px]' : ''} bg-white h-0.5 w-6 transition-all duration-300 ease-in mt-1`}></div>
  </button>
);
