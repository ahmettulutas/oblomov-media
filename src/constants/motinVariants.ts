export const listVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

export const videoCardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const carouselVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
export const animatePlane = {
  hidden: {},
  visible: {
    translateX: [0, 10, 0],
    translateY: [0, -10, 0],
    opacity: [1, 0.5, 1],
    transition: { repeat: Infinity, duration: 1 },
  },
};

export const showSvg = {
  hidden: { pathLength: 0, scale: 0.9, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: 1.1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0, spring: 10 },
      scale: {
        type: "spring",
        duration: 0.5,
        bounce: 0,
        delay: 0,
        stiffness: 300,
      },
    },
  },
};
