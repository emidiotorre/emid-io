import Trail from "./Trail";
import GrowingModule from "./GrowingModule";
import Background from "./Background";
import Gallery from "./Gallery";
import useOpacityOnHover from "../hooks/useOpacityOnHover";
import { animated, useSpring } from "@react-spring/web";
import { MutableRefObject, ReactNode, useEffect, useRef } from "react";

import BasicModule from "./BasicModule";

/**
 * cover: it's the src of the background image
 */
export interface ProjectModuleProps {
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
  images: string[];
}

const ProjectModule: React.FC<ProjectModuleProps> = ({
  title,
  subtitle,
  description,
  images,
  link,
}) => {
  const config = {
    mass: 80,
    tension: 170,
    friction: 26,
    precision: 0.01,
  };
  const opacityProps = useOpacityOnHover(0, 1, {});
  const opacityBlockBgProps = useOpacityOnHover(0, 1, {});

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        opacityProps.onMouseEnter();
        opacityBlockBgProps.onMouseEnter();
      }}
      onMouseLeave={() => {
        opacityProps.onMouseLeave();
        opacityBlockBgProps.onMouseLeave();
      }}
    >
      {/* <Background
        src={cover}
        className="transform scale-150 transform-gpu"
        animatedProps={{ style: opacityProps.style }}
    ></Background> */}
      <BasicModule
        className="lg:h-[65vh] overflow-hidden z-10"
        padding={true}
        bg={
          <>
            <Gallery
              /* animatedProps={{ style: opacityProps.style }} */
              className="hidden lg:block lg:absolute top-16 right-16 z-0 -mt-8 w-[50vw] h-[50vh]"
              images={images}
            ></Gallery>
            <Gallery
              className="block lg:hidden lg:absolute -ml-8 pt-8 top-0 left-0 z-0 -mt-8 w-[100vw]"
              images={images}
            ></Gallery>
          </>
        }
      >
        <div className="block lg:inline-block lg:relative lg:bottom-0 lg:-mb-8 lg:-ml-8 lg:px-8 lg:pt-8 lg:pb-16 lg:max-w-[50ch]">
          <animated.div
            className="hidden lg:block bg-white absolute z-[1] top-0 left-0 bottom-0 right-0"
            /* style={opacityBlockBgProps.style} */
          ></animated.div>
          <div className="z-10 relative top-4">
            <h2 className="z-10 text-md lg:text-3xl font-bold">{title}</h2>
            <h3 className="z-10 text-md lg:text-xl font-light">{subtitle}</h3>
          </div>
          <animated.div
            /* style={opacityBlockBgProps.style} */
            className="hidden lg:block z-10 relative top-8 text-md lg:text-xl max-w-[50ch]"
          >
            {description}
            <div className="my-8 flex justify-end">
              <a
                href={link}
                target="_blank"
                className="cursor-pointer transition-all duration-300 w-full text-center lg:w-auto block lg:inline-block bg-secondo px-4 py-2 rounded-full text-white hover:bg-primo text-xl uppercase"
              >
                open →
              </a>
            </div>
          </animated.div>
          <animated.div className="block lg:hidden z-10 relative top-8 text-md lg:text-xl max-w-[50ch]">
            {description}
            <div className="my-8 flex justify-start">
              <a
                href={link}
                target="_blank"
                className="cursor-pointer transition-all duration-300 w-full text-center w-auto inline-block bg-secondo px-4 py-2 rounded-full text-white hover:bg-primo text-xl uppercase"
              >
                open →
              </a>
            </div>
          </animated.div>
        </div>
      </BasicModule>
    </div>
  );
};

export default ProjectModule;
