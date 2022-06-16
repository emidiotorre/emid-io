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
    rootMargin:
      typeof window != "undefined"
        ? `-${window.innerHeight / 3}px 0px -${window.innerHeight / 3}px 0px`
        : "-400px 0px -400px 0px",
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <animated.div
      ref={ref}
      className={` ${
        padding ? "py-8" : null
      } lg:snap-center block relative px-8 transition-all duration-300 overflow-hidden border-t-[8px] border-secondo bg-primo text-secondo 
      ${className} ${isVisible ? "bg-white text-black" : null}`}
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
        bg
      )}
      {children}
    </animated.div>
  );
};

export default BasicModule;
