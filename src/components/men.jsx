import React from "react";
import { Container } from "./layout";

const Men = () => {
  return (
    <div className="py-24" id="men">
      <Container>
        <div className="md:w-1/2 mx-auto text-center mb-12">
          <p className="mb-6 uppercase font-semibold text-lg tracking-tight">
            Men Collection
          </p>
          <p className="tracking-tight text-neutral-600 text-sm">
            We are committed to the environment and sustainablity therefore our
            handbags are crafted in limited qunatities and are avaliable only
            through this digital flagship.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-12">
          <div className="col-span-8 col-start-3 md:col-span-4 md:col-start-3">
            <img
              src="/resized/mens/browns.webp"
              className="w-full aspect-[3/4] object-cover"
              alt="man wearing an overcoat"
            />
            <div className="flex justify-between text-sm mt-1 tracking-tight">
              <p className="font-semibold">Overcoat</p>
              <p className="font-light text-neutral-500">$ 299.00</p>
            </div>
          </div>
          <div className="col-span-8 col-start-3 md:col-span-4 md:col-start-7">
            <img
              src="/resized/mens/hoodie.webp"
              className="w-full aspect-[3/4] object-cover"
              alt="man in a white hoodie"
            />
            <div className="flex justify-between text-sm mt-1 tracking-tight">
              <p className="font-semibold">White Hoodie</p>
              <p className="font-light text-neutral-500">$ 159.00</p>
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

export default Men;
