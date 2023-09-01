import React from "react";
import { Container } from "./layout";

const Men = () => {
  return (
    <div className="py-24">
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
        <div className="grid grid-cols-12 gap-12 mb-12">
          <div className="col-span-4 col-start-3">
            <img
              src="/resized/mens/browns.webp"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="col-span-4">
            <img
              src="/resized/mens/hoodie.webp"
              className="w-full aspect-[3/4] object-cover"
            />
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
