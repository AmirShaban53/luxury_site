export const heroVart = {
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const LetterVar = {
  initial: { y: 100 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

export const btnVart = {
  initial: { y: 0 },
  hover: { y: -2 },
  tap: { y: 2, scale: 0.95 },
};
