import React, { ReactElement, ReactInstance, ReactNode, useRef } from "react";
import NextImage from "next/image";
import { animated } from "@react-spring/web";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
const BasicModule: React.FC<{
  children: ReactNode | ReactNode[];
  className?: string;
  bg?: ReactNode | string;
  padding?: Boolean;
  animatedProps?: Object;
}> = ({
  children,
  className = "",
  bg = "",
  padding = true,
  animatedProps = {},
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    /**
     * This rootMargin creates a horizontal line vertically centered
     * that will help trigger an intersection at that the very point.
     */
    rootMargin: "-50% 0% -50% 0%",

    /**
     * This is the default so you could remove it.
     * I just wanted to leave it here to make it more explicit
     * as this threshold is the only one that works with the above
     * rootMargin
     */
    threshold: 0,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <animated.div
      ref={ref}
      className={` ${
        padding ? "py-8" : null
      } lg:snap-center block relative px-8 transition-all duration-300 overflow-hidden border-t-[0px] border-secondo 
      ${className} ${
        isVisible ? "bg-secondo text-primo" : "bg-primo text-secondo"
      }`}
    >
      {typeof bg == "string" && bg != "" ? (
        <NextImage
          className="z-0"
          width={typeof window != "undefined" ? window.innerWidth : 500}
          layout="fill"
          src={bg}
          objectFit="cover"
        ></NextImage>
      ) : (
        <div className="z-0 absolute top-0 bottom-0 left-0 right-0">{bg}</div>
      )}
      {children}
    </animated.div>
  );
};

export default BasicModule;
