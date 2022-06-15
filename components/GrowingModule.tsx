import React, {
  createRef,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { useHover } from "react-use";
import Background from "./Background";
import { animated, useSpring } from "@react-spring/web";
import { triggerAsyncId } from "async_hooks";
import useGrowOnHover from "../hooks/useGrowOnHover";
import useOpacityOnHover from "../hooks/useOpacityOnHover";
import BasicModule from "./BasicModule";
const GrowingModule: React.FC<{
  children: ReactNode | ReactNode[];
  bg?: ReactNode | string;
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
  const config = {
    mass: 8,
    tension: 170,
    friction: 26,
    precision: 0.001,
  };
  const growProps = useGrowOnHover(
    250,
    typeof window != "undefined" ? window.innerHeight : 500,
    config
  );
  return (
    <BasicModule animatedProps={growProps} bg={bg}>
      {children}
    </BasicModule>
  );
};

export default GrowingModule;
