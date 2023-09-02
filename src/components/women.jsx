import React from "react";
import { Container } from "./layout";

const Women = () => {
  return (
    <div className="py-24" id="women">
      <Container>
        <div className="md:w-1/2 mx-auto text-center mb-12">
          <p className="mb-6 uppercase font-semibold text-lg tracking-tight">
            Women Collection
          </p>
          <p className="tracking-tight text-neutral-600 text-sm">
            We are committed to the environment and sustainablity therefore our
            handbags are crafted in limited qunatities and are avaliable only
            through this digital flagship.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-12">
          <div className="col-span-12 md:col-span-4">
            <img
              src="/resized/womens/bag1.webp"
              className="w-full aspect-[4/6] object-cover"
              alt="brown handbag"
            />
            <div className="flex justify-between text-sm mt-1 tracking-tight">
              <p className="font-semibold">Ashoka</p>
              <p className="font-light text-neutral-500">$ 398.00</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src="/resized/womens/bag3.webp"
              className="w-full aspect-[4/6] object-cover"
              alt="black handbag"
            />
            <div className="flex justify-between text-sm mt-1 tracking-tight">
              <p className="font-semibold">Zurich</p>
              <p className="font-light text-neutral-500">$ 428.00</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <img
              src="/resized/womens/bag2.webp"
              className="w-full aspect-[4/6] object-cover"
              alt="textured handbag"
            />
            <div className="flex justify-between text-sm mt-1 tracking-tight">
              <p className="font-semibold">Ameli</p>
              <p className="font-light text-neutral-500">$ 315.00</p>
            </div>
          </div>
        </div>
        <div className="text-center ">
          <button
            type="button"
            className="underline underline-offset-4 font-semibold"
          >
            Discover the collection
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Women;
