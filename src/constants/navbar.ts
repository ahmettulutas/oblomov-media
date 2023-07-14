export const navLinks = [
  {
    id: '/',
    title: 'Anasayfa'
  },
  {
    id: '/videos',
    title: 'Videolar'
  },
  {
    id: '/studio',
    title: 'Stüdyo'
  },
  {
    id: '/contact',
    title: 'İletişim'
  }

] as const;
export const listVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1
    }
  }
};