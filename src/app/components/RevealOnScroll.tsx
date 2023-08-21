"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const DIRECTION = {
  TOP: { false: "-translate-y-36", true: "-translate-y-0" },
  BOTTOM: { false: "translate-y-36", true: "translate-y-0" },
  LEFT: { false: "-translate-x-36", true: "-translate-x-0" },
  RIGHT: { false: "translate-x-36", true: "translate-x-0" },
  NONE: { false: "", true: "" },
};

const VISIBILITY = {
  ALWAYS: "",
  ENABLED: "transition delay-200 duration-700",
};

interface RevealOnScrollProps {
  children?: React.ReactNode;
  direction?: "LEFT" | "RIGHT" | "TOP" | "BOTTOM" | "NONE";
}

export const RevealOnScroll = ({ children, direction = "LEFT" }: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    if (el) {
      scrollObserver.observe(el);
    }

    return () => {
      if (el) {
        scrollObserver.unobserve(el);
      }
    };
  }, []);

  const translation = DIRECTION[direction];
  const visibilityEnabled = direction !== "NONE";

  const visibility = {
    [VISIBILITY.ALWAYS]: !visibilityEnabled,
    [VISIBILITY.ENABLED]: visibilityEnabled,
    [`opacity-100 ${translation["true"]}`]: visibilityEnabled && isVisible,
    [`opacity-0 ${translation["false"]}`]: visibilityEnabled && !isVisible,
  };

  const classes = visibility;

  return (
    <div className={isVisible ? "w-full" : "w-full overflow-hidden"}>
      <div ref={ref} className={clsx(classes)}>
        {children}
      </div>
    </div>
  );
};
