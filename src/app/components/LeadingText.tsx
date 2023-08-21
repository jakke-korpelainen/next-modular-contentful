import clsx from "clsx";
import type { ReactNode } from "react";

export interface LeadingTextProps {
  children?: ReactNode;
  textAlign?: "LEFT" | "CENTER" | "RIGHT";
  borderDirection?: "LEFT" | "TOP" | "BOTTOM" | "RIGHT" | "NONE";
}

const defaultClasses =
  "flex items-center justify-start gap-10 text-2xl font-black text-heading tracking-wide sm:text-4xl lg:text-5xl xl:text-6xl";
const flexRowClass = "flex-row";
const flexColClass = "flex-col";

const BORDERS = {
  TOP: "before:shadow-inner before:rounded-2xl before:grow-0 before:mx-auto before:bg-orange before:w-1/2 before:min-h-[0.5rem] before:sm:min-h-[2rem]",
  LEFT: "before:shadow-inner before:rounded-2xl before:grow-0 before:mx-auto before:bg-orange before:h-64 before:min-w-[0.5rem] before:sm:min-w-[2rem]",
  RIGHT:
    "after:shadow-inner after:rounded-2xl after:grow-0 after:mx-auto after:bg-orange after:h-64 after:min-w-[0.5rem] after:sm:min-w-[2rem]",
  BOTTOM:
    "after:shadow-inner after:rounded-2xl after:grow-0 after:mx-auto after:bg-orange after:w-1/2 after:min-h-[0.5rem] after:sm:min-h-[2rem]",
  NONE: "",
};

const ALIGN = {
  LEFT: "text-left",
  CENTER: "text-center",
  RIGHT: "text-right",
};

export const LeadingText = ({ children, textAlign = "CENTER", borderDirection = "BOTTOM" }: LeadingTextProps) => {
  const border = BORDERS[borderDirection];
  const align = ALIGN[textAlign];
  const shouldFlexRow = ["LEFT", "RIGHT"].includes(borderDirection);

  const classes = clsx(defaultClasses, border, align, defaultClasses, {
    [flexRowClass]: shouldFlexRow,
    [flexColClass]: !shouldFlexRow,
  });

  return (
    <h2 className={classes}>
      <span className="grow">{children}</span>
    </h2>
  );
};
