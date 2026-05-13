"use client";

import type { Target, Transition } from "framer-motion";
import { flushSync } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { useScrollDirectionRef } from "@/components/scroll-direction-context";

type RevealKind = "smooth" | "snap" | null;

/**
 * Re-animates when entering from below (scroll down); snaps to visible when
 * re-entering from above (scroll up). Root margin matches previous Framer `viewport.margin` values.
 */
export function useDirectionalReveal<E extends HTMLElement = HTMLDivElement>(
  options: {
    margin?: string;
    transition: Transition;
    hidden: Target;
    visible: Target;
  },
) {
  const ref = useRef<E | null>(null);
  const margin = options.margin ?? "0px";
  const directionRef = useScrollDirectionRef();
  const [isInView, setIsInView] = useState(false);
  const [revealKind, setRevealKind] = useState<RevealKind>(null);
  const prevInView = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const next = entry.isIntersecting;
        const prev = prevInView.current;

        flushSync(() => {
          if (next && !prev) {
            setRevealKind(directionRef.current === "up" ? "snap" : "smooth");
          } else if (!next && prev) {
            setRevealKind(null);
          }
          prevInView.current = next;
          setIsInView(next);
        });
      },
      { threshold: 0, rootMargin: margin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [margin, directionRef]);

  const transition: Transition = !isInView
    ? { duration: 0 }
    : revealKind === "snap"
      ? { duration: 0, delay: 0 }
      : options.transition;

  return {
    ref,
    initial: false as const,
    animate: isInView ? options.visible : options.hidden,
    transition,
  };
}
