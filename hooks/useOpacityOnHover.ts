import { useRef, useState, useEffect, MutableRefObject } from "react";
import { SpringConfig, useSpring } from "@react-spring/web";
export default function useGrowOnHover(
  startValue: Number = 0,
  endValue: Number = 0,
  config: SpringConfig
) {
  const [hover, toggleHover] = useState(false);
  const style = useSpring({
    from: {
      opacity: startValue,
    },
    to: {
      opacity: hover ? endValue : startValue,
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
