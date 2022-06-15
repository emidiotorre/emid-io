import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { useEffect } from "react";
import useCssProp from "../hooks/useCssProp";

const ColorWheel: React.FC<{}> = function () {
  const { getProp, setProp } = useCssProp("--color-primo");
  const { getProp: getPropSecondary, setProp: setPropSecondary } =
    useCssProp("--color-secondo");

  const randomColorValue = () => Math.floor(Math.random() * 200 + 55 / 2);
  const config = {
    mass: 8,
    tension: 170,
    friction: 64,
    precision: 0.1,
  };

  const palette = [
    { r: 255, g: 231, b: 48 },
    { r: 255, g: 89, b: 100 },
    { r: 10, g: 10, b: 10 },
    { r: 0, g: 107, b: 225 },
    { r: 107, g: 241, b: 120 },
    { r: 53, g: 167, b: 255 },
  ];

  const [style, setRotation] = useSpring(() => {
    return {
      rotate: 170,
      config,
    };
  });

  const [colors, set] = useSpring(() => {
    return {
      r: palette[0].r,
      g: palette[0].g,
      b: palette[0].b,
      onChange: (_, api) => {
        setProp(`${api.get().r} ${api.get().g} ${api.get().b}`);
      },
      config,
    };
  });

  const [colorsSecondary, setSecondary] = useSpring(() => {
    return {
      r: palette[1].r,
      g: palette[2].g,
      b: palette[3].b,
      onChange: (_, api) => {
        setPropSecondary(`${api.get().r} ${api.get().g} ${api.get().b}`);
      },
      config,
    };
  });
  function changeColors() {
    setRotation({
      rotate: 360,
      reset: true,
    });
    const primaryIdx =
      Math.floor(Math.random() * palette.length) % palette.length;
    let secondaryIdx =
      Math.floor(Math.random() * palette.length) % palette.length;
    while (secondaryIdx == primaryIdx) {
      secondaryIdx =
        Math.floor(Math.random() * palette.length) % palette.length;
    }
    set({
      r: palette[primaryIdx].r, //Math.floor(Math.random() * 200 + 55 / 2)
      g: palette[primaryIdx].g,
      b: palette[primaryIdx].b,
      reset: true,
    });
    setSecondary({
      r: palette[secondaryIdx].r, //Math.floor(Math.random() * 200 + 55 / 2)
      g: palette[secondaryIdx].g,
      b: palette[secondaryIdx].b,
      reset: true,
    });
  }
  useEffect(() => {
    changeColors();
    setInterval(() => {
      setRotation({
        rotate: 130,
      });
    }, 900);
  }, []);
  return (
    <animated.div
      className={`fixed z-20 top-6 right-8 h-[32px] w-[32px]  `}
      style={style}
      onClick={changeColors}
    >
      <Image src="/colorWheel.png" width="32" height="32" />
    </animated.div>
  );
};

export default ColorWheel;
