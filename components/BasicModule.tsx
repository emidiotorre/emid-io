import React, { ReactElement, ReactInstance, ReactNode } from "react";
import NextImage from "next/image";
import { animated } from "@react-spring/web";
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
  return (
    <animated.div
      className={` ${
        padding ? "py-8" : null
      } md:snap-center block relative px-8 transition-all duration-300 overflow-hidden border-t-[8px] border-secondo bg-primo hover:bg-[#fff] text-secondo hover:text-black
      ${className}`}
      {...animatedProps}
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
