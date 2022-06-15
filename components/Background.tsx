import React from "react";
import NextImage from "next/image";
import { animated } from "@react-spring/web";

const Background: React.FC<{
  src: string;
  className?: string;
  showBgOnHover?: Boolean;
  transform?: Boolean;
  animatedProps?: Object;
}> = ({ src, className = "", transform = true, animatedProps = {} }) => {
  return (
    <animated.div
      className={`absolute top-0 left-0 right-0 bottom-0 z-0 ${className}`}
      {...animatedProps}
    >
      <NextImage
        width={typeof window != "undefined" ? window.innerWidth : 500}
        layout="fill"
        src={src}
        objectFit="cover"
      ></NextImage>
    </animated.div>
  );
};

export default Background;
