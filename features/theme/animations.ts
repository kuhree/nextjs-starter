import { Transition, Variant, Variants } from 'framer-motion';

export type Animation = Variants & {
  animate: Variant & { transition?: Transition };
  initial?: Variant;
  exit?: Variant;
};

export const variantProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export const easing = [0.6, -0.05, 0.01, 0.99];

export const bubble: Animation = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 3,
      ease: easing,
      repeat: 1,
      repeatType: 'reverse',
    },
  },
  exit: { y: 100, opacity: 0 },
} as const;

export const pageTransition: Animation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.45 },
  },
  exit: { opacity: 0 },
};

export const fadeIn: Animation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.25,
      ease: easing,
    },
  },
  exit: { opacity: 0 },
};

export const fadeInUp: Animation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
  exit: { opacity: 0, y: 20 },
};

export const fadeInDown: Animation = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
  exit: { opacity: 0, y: -20 },
};

export const slideInLeft: Animation = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
  exit: { opacity: 0, x: -20 },
};

export const listAnimation: Animation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: easing,
      when: 'beforeChildren',
      staggerChildren: 0.25,
      staggerDirection: 1,
      duration: 0.25,
    },
  },
  exit: { opacity: 0 },
};

export const listChildAnimation: Animation = {
  initial: { opacity: 0, x: -20, scale: 0.9 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      ease: easing,
      duration: 0.25,
    },
  },
  exit: { opacity: 0, x: -20 },
};

export const buttonAnimation: Animation = {
  initial: { opacity: 0, scale: 0.7 },
  animate: { opacity: 1, scale: 1, transition: { ease: easing } },
  exit: { opacity: 0, scale: 0 },
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
};

export const svgFill: Animation = {
  initial: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  animate: {
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
    transition: { delay: 0.7, easing: easing },
  },
};

export function addTransition(
  transition: Transition,
  animation: Animation,
): Animation {
  return {
    ...animation,
    animate: {
      ...animation.animate,
      transition: {
        ...animation.animate.transition,
        ...transition,
      },
    },
  };
}
