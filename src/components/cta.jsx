import React from "react";
import { ContainerFluid } from "./layout";

const Cta = () => {
  return (
    <div>
      <ContainerFluid>
        <div>
          <div className="h-[85vh]">
            <img
              src="resized/hero/fashion.webp"
              className="object-center w-full h-full object-cover"
            />
          </div>
          <div className="flex">
            <div className="basis-1/2 w-full aspect-square">
              <img
                src="/resized/carlos.webp"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="basis-1/2 flex justify-center items-center p-28 bg-neutral-200">
              <div className="relative h-full">
                <div className="absolute  text-center left-1/2 -translate-x-1/2 bottom-16 font-semibold">
                  <p className="mb-8">N.52 .26 BAG</p>
                  <div className="mb-8">
                    <p>A TIMELESS BAG</p>
                    <p>DESIGNED TO ETERNITY</p>
                  </div>
                  <div>
                    <button type="button">Shop</button>
                  </div>
                </div>
                <img
                  src="/resized/eyeglasses.webp"
                  className="h-full w-full object-cover mx-auto"
                  alt="this is a simple image"
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Cta;
