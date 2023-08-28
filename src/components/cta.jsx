import React from "react";
import { ContainerFluid } from "./layout";

const Cta = () => {
  return (
    <div>
      <ContainerFluid>
        <div>
          <div className="h-[85vh]">
            <img
              src="/hero/fashion.webp"
              className="object-center w-full h-full object-cover"
            />
          </div>
          <div className="flex">
            <div className="basis-1/2 aspect-square">
              <img src="/jewel.jpg" />
            </div>
            <div className="basis-1/2 flex justify-center items-center d">
              <p>TIMELESS AND ICONC.</p>
              <p>THE SIGNATURE OF</p>
              <p>TOMAS THAN</p>
            </div>
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Cta;
