import React from "react";
import { ContainerFluid } from "./layout";

const Letter = () => {
  return (
    <div>
      <ContainerFluid>
        <div className="flex">
          <div className="basis-1/2 p-12 bg-neutral-100 flex flex-col justify-between items-center">
            <div className="text-center">
              <p>Be the first to know about</p>
              <p>new designers and launches</p>
            </div>
            <div className="text-center">
              <div>
                <p>Sign up for</p>
                <p>our Newsletter</p>
              </div>
              <div>
                <form action="">
                  <input type="email" name="" id="" />
                  <button type="submit"></button>
                </form>
              </div>
              <div>
                <p>
                  By signing up you agree with out{" "}
                  <span>Terms and conditions</span> and{" "}
                  <span>Privacy Policies</span>
                </p>
                <p>To opt out, click Unsubscribe in our emails.</p>
              </div>
            </div>
            <div>
              <p>. </p>
            </div>
          </div>
          <div className="basis-1/2 aspect-square">
            <img src="/resized/jimmy.webp" className="h-full w-full object-cover" />
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Letter;
