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
      className="relative md:snap-start"
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
        className="md:h-[80vh] overflow-hidden z-10 hover:bg-primo md:hover:bg-secondo"
        padding={true}
        bg={
          <>
            <Gallery
              animatedProps={{ style: opacityProps.style }}
              className="hidden md:block md:absolute top-16 right-16 z-0 -mt-8 w-[50vw]"
              images={images}
            ></Gallery>
            <Gallery
              className="block md:hidden md:absolute -ml-8 pt-8 top-0 left-0 z-0 -mt-8 w-[100vw]"
              images={images}
            ></Gallery>
          </>
        }
      >
        <div className="block md:inline-block md:relative md:bottom-0 md:-mb-8 md:-ml-8 md:px-8 md:pt-8 md:pb-16 md:max-w-[50ch]">
          <animated.div
            className="hidden md:block bg-white absolute z-[1] top-0 left-0 bottom-0 right-0"
            style={opacityBlockBgProps.style}
          ></animated.div>
          <div className="z-10 relative top-4">
            <h2 className="z-10 text-md md:text-3xl font-bold ">{title}</h2>
            <h3 className="z-10 text-md md:text-xl font-light ">{subtitle}</h3>
          </div>
          <animated.div
            style={opacityBlockBgProps.style}
            className="hidden md:block z-10 relative top-8 text-md md:text-xl max-w-[50ch]"
          >
            {description}
            <div className="my-8 flex justify-end">
              <a
                href={link}
                target="_blank"
                className="cursor-pointer transition-all duration-300 w-full text-center md:w-auto block md:inline-block bg-secondo px-4 py-2 rounded-full text-primo hover:bg-primo hover:text-secondo text-xl uppercase"
              >
                visit →
              </a>
            </div>
          </animated.div>
          <animated.div className="block md:hidden z-10 relative top-8 text-md md:text-xl max-w-[50ch]">
            {description}
            <div className="my-8 flex justify-end">
              <a
                href={link}
                target="_blank"
                className="cursor-pointer transition-all duration-300 w-full text-center md:w-auto block md:inline-block bg-secondo px-4 py-2 rounded-full text-primo hover:bg-primo hover:text-secondo text-xl uppercase"
              >
                visit →
              </a>
            </div>
          </animated.div>
        </div>
      </BasicModule>
    </div>
  );
};

export default ProjectModule;
