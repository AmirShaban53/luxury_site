import React from "react";
import { Container } from "./layout";
import Carousel from "./carousel";

const Hero = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <Carousel />
      </div>
    </>
  );
};

export default Hero;
