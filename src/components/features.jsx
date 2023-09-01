import React from "react";
import { ContainerFluid } from "./layout";

const Features = () => {
  return (
    <div className="bg-neutral-200">
      <ContainerFluid>
        <div className="grid grid-cols-12 ">
          <div className="col-span-6 aspect-square ">
            <img
              src="/resized/features/mohamad.webp"
              className="w-full h-full object-cover "
              alt="this is a simple image"
            />
          </div>
          <div className="col-span-6 aspect-square p-28">
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
                src="/resized/sweater.webp"
                className="h-full w-full object-cover mx-auto"
                alt="this is a simple image"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-6 aspect-square p-20 flex gap-12 flex-col">
            <div className="flex gap-2 grow">
              <div className="basis-1/2">
                <img
                  src="/resized/brooke.webp"
                  className="h-full object-cover mx-auto"
                  alt="this is a simple image"
                />
              </div>
              <div className="basis-1/2 ">
                <img
                  src="/resized/black.webp"
                  className="h-full object-cover mx-auto"
                  alt="this is a simple image"
                />
              </div>
            </div>
            <div className="space-y-3">
              <p>Who are we?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                sequi sint qui. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minus sequi sint qui.
              </p>
              <div>
                <button type="button">Discover</button>
              </div>
            </div>
          </div>
          <div className="col-span-6 aspect-square relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <p>MEMORIES OF MY ORIENT</p>
            </div>
            <img
              src="/resized/features/intro.webp"
              className="w-full h-full object-cover"
              alt="this is a simple image"
            />
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-6 aspect-square ">
            <img
              src="/resized/features/skin.webp"
              className="w-full h-full object-cover"
              alt="this is a simple image"
            />
          </div>
          <div className="col-span-6 aspect-square p-28">
            <div className="relative h-full">
              <div className="absolute text-white text-center left-1/2 -translate-x-1/2 bottom-16">
                <p>N.52 .26 BAG</p>
                <p>A TIMELESS BAG</p>
                <p>DESIGNED TO ETERNITY</p>
                <div>
                  <button type="button">Shop</button>
                </div>
              </div>
              <img
                src="/resized/features/skinProduct.webp"
                className="h-full object-cover object-bottom mx-auto"
                alt="this is a simple image"
              />
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Features;
