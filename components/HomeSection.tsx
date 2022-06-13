import React, { createRef, ReactNode, useRef, useState } from "react";
import Image from "next/image";
import { useHover } from "react-use";
import Background from "./Background";
import { animated, useSpring } from "@react-spring/web";
import { triggerAsyncId } from "async_hooks";
const HomeSection: React.FC<{
  children: ReactNode[];
  bg?: string;
  className?: string;
  padding?: Boolean;
  transform?: Boolean;
  showBgOnHover?: Boolean;
}> = ({
  children,
  bg = "",
  className = "",
  padding = true,
  showBgOnHover = false,
  transform = true,
}) => {
  const [over, toggle] = useState(false);
  const springStyle = useSpring({
    from: {
      minHeight: 250,
      opacity: 0.2,
    },
    to: {
      minHeight: bg && over ? 600 : 250,
      opacity: bg && over ? 1 : 0.2,
    },
    config: {
      stiffness: 1000,
      friction: 50,
      mass: 5,
      precision: 0.01,
    },
  });
  return (
    <animated.div
      style={{
        minHeight: springStyle.minHeight,
      }}
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      className={` ${
        padding ? "py-8" : null
      } block relative px-8 transition-all duration-300 overflow-hidden border-0 border-b border-asparagus-800 bg-asparagus-50 hover:bg-[#fff] hover:text-asparagus-800
      ${className}`}
    >
      {bg ? (
        <animated.div style={{ opacity: springStyle.opacity }}>
          <Background src={bg}></Background>
        </animated.div>
      ) : null}
      <div className="z-10 relative">{children}</div>
    </animated.div>
  );
};

export default HomeSection;
