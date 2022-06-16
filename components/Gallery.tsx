import { animated } from "@react-spring/web";
import React from "react";
import Flickity from "react-flickity-component";
import Image from "next/image";

const Gallery: React.FC<{
  images?: string[];
  className?: string;
  animatedProps?: Object;
}> = ({ images = [], className = "", animatedProps = {} }) => {
  const flickityOptions = {
    initialIndex: 0,
    //freeScroll: true,
    wrapAround: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false,
  };

  return (
    <animated.div
      className={`focus:outline-none ${className}`}
      {...animatedProps}
    >
      {/* @ts-ignore */}
      <Flickity
        className={`carousel`} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {images.map((img, idx) => {
          return <img className="focus:outline-none" src={img} key={idx} />;
        })}
      </Flickity>
    </animated.div>
  );
};

export default Gallery;
