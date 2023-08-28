import React from "react";
import { Container } from "./layout";

const Men = () => {
  return (
    <div>
      <Container>
        <div className="md:w-2/3 mx-auto text-center">
          <p>Men Collection</p>
          <p>
            We are committed to the environment and sustainablity therefore our
            handbags are crafted in limited qunatities and are avaliable only
            through this digital flagship.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-6">
            <img src="/girl.jpg" className="h-full object-cover" />
          </div>
          <div className="col-span-6">
            <img src="/girl.jpg" className="h-full object-cover" />
          </div>
        </div>
        <div className="text-center">
          <p>Discover the collection</p>
        </div>
      </Container>
    </div>
  );
};

export default Men;
