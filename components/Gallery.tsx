import { animated } from "@react-spring/web";
import React from "react";
import Flickity from "react-flickity-component";
import Image from "./Image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useTailwindBreakpoint from "../hooks/useTailwindBreakpoint";

const Gallery: React.FC<{
  images?: string[];
  className?: string;
  animatedProps?: Object;
}> = ({ images = [], className = "", animatedProps = {} }) => {
  const currentBreakpoint = useTailwindBreakpoint();
  return (
    <animated.div
      className={`focus:outline-none ${className} overflow-visible`}
      {...animatedProps}
    >
      <Swiper
        style={{ overflow: "visible !important" }}
        spaceBetween={0}
        slidesPerView={
          currentBreakpoint == "sm" || currentBreakpoint == "md" ? 1.2 : 1
        }
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((img, idx) => {
          return (
            <SwiperSlide className="">
              <Image
                className="focus:outline-none w-full h-full"
                src={img}
                width={typeof window != "undefined" ? window.innerWidth : 800}
                height={
                  typeof window != "undefined"
                    ? window.innerWidth * 0.65
                    : 800 * 0.65
                }
                key={idx}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </animated.div>
  );
};

export default Gallery;
