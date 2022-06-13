import React, { useEffect, useState } from "react";
import { useTrail, a } from "@react-spring/web";
import { useIntersection } from "react-use";
const Trail: React.FC<{
  children: any;
  open: Boolean;
  height?: Number;
  className?: string;
}> = ({ children, height = 100, className = "", open = true }) => {
  /*   const [open, setOpen] = useState(false);
  const intersectionRef = React.useRef(null!);
  const intersection = useIntersection(intersectionRef!, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  }); */

  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? height : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  /*   useEffect(() => {
    if (intersection && intersection.intersectionRatio > 1) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [intersection]); */

  return (
    <div className={className} /* ref={intersectionRef!} */>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
