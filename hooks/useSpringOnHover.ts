import { useRef, useState, useEffect, MutableRefObject } from "react";
import { SpringConfig, useSpring } from "@react-spring/web";
export default function useGrowOnHover(
  from: Object = {},
  to: Object = {},
  config: SpringConfig
) {
  const [hover, toggleHover] = useState(false);
  const style = useSpring(() => {
    Object.keys(from).map((k) => {
      //@ts-ignore
      to[k] = hover ? to[k] : from[k];
    });
    return {
      from,
      to,
      config,
    };
  });
  const onMouseEnter = () => {
    toggleHover(true);
  };
  const onMouseLeave = () => {
    toggleHover(false);
  };

  return { onMouseEnter, onMouseLeave, style };
}
