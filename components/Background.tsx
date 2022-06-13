import React, { createRef, ReactNode, useRef, useState } from "react";
import Image from "next/image";
import { useHover } from "react-use";

import { animated, useSpring } from "@react-spring/web";
import { triggerAsyncId } from "async_hooks";
const Background: React.FC<{
  src: string;
  className?: string;

  showBgOnHover?: Boolean;
  transform?: Boolean;
}> = ({ src = "", className = "", transform = true }) => {
  const [over, toggle] = useState(false);
  const springStyle = useSpring({
    transform: transform ? `scale(${over ? "1.2" : "1.6"})` : "",
    opacity: over ? 1 : 0.2,
    config: {
      stiffness: 300,
      friction: 80,
      mass: 5,
    },
  });
  return (
    <animated.div
      /*     onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      style={springStyle} */
      className="absolute w-full h-full -top-0 -left-0 z-0"
    >
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        className={className}
      ></Image>
    </animated.div>
  );
};

export default Background;
