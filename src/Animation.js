export const HomeSectionAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.35,
      ease: "easeOut",
    },
  },
};

export const FadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.35,
    },
  },
};

export const buttonAnim = {
  hidden: {
    x: -1000,
  },
  show: {
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
      damping: 10,
      stiffness: 100,
      ease: "easeOut",
    },
  },
};

export const titleAnim = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const photoAnim = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.25,
      ease: "easeOut",
    },
  },
};
