import { useRef, useState, useEffect, MutableRefObject } from "react";
import { SpringConfig, useSpring } from "@react-spring/web";
export default function useGrowOnHover(
  baseHeight: Number = 0,
  grownHeight: Number = 0,
  config: SpringConfig
) {
  const [hover, toggleHover] = useState(false);
  const style = useSpring({
    from: {
      minHeight: baseHeight,
    },
    to: {
      minHeight: hover ? grownHeight : baseHeight,
    },
    config,
  });
  const onMouseEnter = () => {
    toggleHover(true);
  };
  const onMouseLeave = () => {
    toggleHover(false);
  };

  return { onMouseEnter, onMouseLeave, style };
}
