/** Cubic-bezier: responsive start, soft settle — tuned for scroll-triggered reveals */
export const scrollRevealEase = [0.33, 1, 0.68, 1] as const;

export const scrollReveal = {
  heading: {
    duration: 0.72,
    ease: scrollRevealEase,
  },
  group: {
    duration: 0.68,
    ease: scrollRevealEase,
  },
  item: {
    duration: 0.68,
    ease: scrollRevealEase,
  },
  stagger: 0.12,
} as const;
