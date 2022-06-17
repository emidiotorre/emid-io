import { useWindowSize } from "react-use";
import useTailwindConfig from "./useTailwindConfig";
import { useEffect } from "react";

export default function () {
  const config = useTailwindConfig();
  const windowSize = useWindowSize();
  const getBreakpointValue = (value: string): number =>
    +config.theme.screens[value].slice(
      0,
      config.theme.screens[value].indexOf("px")
    );

  const getCurrentBreakpoint = (): string => {
    /* console.log(
      Object.keys(config.theme.screens).sort((a, b) =>
        getBreakpointValue(a) > getBreakpointValue(b) ? 1 : -1
      )
    ); */
    return Object.keys(config.theme.screens)
      .sort((a, b) => (getBreakpointValue(a) > getBreakpointValue(b) ? 1 : -1))
      .reduce((biggestBreakpoint, breakpoint) => {
        const biggestBreakpointValue = getBreakpointValue(biggestBreakpoint);
        const value = getBreakpointValue(breakpoint);
        return value > biggestBreakpointValue && windowSize.width >= value
          ? breakpoint
          : biggestBreakpoint;
      }, "sm");
  };

  let currentBreakpoint = getCurrentBreakpoint();
  useEffect(() => {
    currentBreakpoint = getCurrentBreakpoint();
    getCurrentBreakpoint();
    console.log("currentBreakpoint: ", currentBreakpoint);
  }, [windowSize.width]);

  return currentBreakpoint;
}
