"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

const defaultClasses =
  "flex h-full w-full grow flex-col items-center justify-center gap-10 opacity-0 transition-opacity delay-1000 duration-1000";
const visibleClass = "opacity-100";

const loadingDelay = 500; // loading delay in ms

/**
 * Only displayed if loading takes more than n ms to reduce unnecessary flickering.
 */
export const Loading = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, loadingDelay);
  }, []);

  const classes = clsx(defaultClasses, { [visibleClass]: visible });

  return (
    <div className={classes}>
      <div className="flex h-full w-full grow flex-col items-center justify-center gap-10 sm:gap-20">
        <div className="mt-8 h-full w-full">
          <h2 className="flex items-center justify-center gap-2 text-center text-2xl">
            <span>Loading Page</span>
            <div>
              <span style={{ animationDelay: ".3s" }} className="animate-ping text-orange delay-300">
                .
              </span>
              <span style={{ animationDelay: ".6s" }} className="delay-600 animate-ping text-orange">
                .
              </span>
              <span style={{ animationDelay: ".9s" }} className="delay-900 animate-ping text-orange">
                .
              </span>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};
