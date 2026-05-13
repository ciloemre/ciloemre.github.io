"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from "react";

export type ScrollDirection = "up" | "down";

type ScrollDirectionValue = {
  direction: ScrollDirection;
  directionRef: MutableRefObject<ScrollDirection>;
};

const fallbackDirectionRef: MutableRefObject<ScrollDirection> = {
  current: "down",
};

const ScrollDirectionContext = createContext<ScrollDirectionValue | null>(
  null,
);

export function ScrollDirectionProvider({ children }: { children: ReactNode }) {
  const directionRef = useRef<ScrollDirection>("down");
  const [direction, setDirection] = useState<ScrollDirection>("down");
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      let next = directionRef.current;
      if (y > lastY.current) next = "down";
      else if (y < lastY.current) next = "up";
      directionRef.current = next;
      lastY.current = y;
      setDirection(next);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const value = useMemo(
    () => ({ direction, directionRef }),
    [direction],
  );

  return (
    <ScrollDirectionContext.Provider value={value}>
      {children}
    </ScrollDirectionContext.Provider>
  );
}

export function useScrollDirection(): ScrollDirection {
  const ctx = useContext(ScrollDirectionContext);
  return ctx?.direction ?? "down";
}

/** Always current scroll direction; safe without provider (defaults to `"down"`). */
export function useScrollDirectionRef(): MutableRefObject<ScrollDirection> {
  const ctx = useContext(ScrollDirectionContext);
  return ctx?.directionRef ?? fallbackDirectionRef;
}
