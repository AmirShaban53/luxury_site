import React from "react";
import { ContainerFluid } from "./layout";
import PanImage from "./panImage";
import { Forward, KeyboardArrowRight, ArrowForward } from "@mui/icons-material";

const Letter = () => {
  return (
    <div>
      <ContainerFluid>
        <div className="flex flex-col md:flex-row">
          <div className="basis-1/2 p-12 bg-neutral-100 ">
            <div className="md:w-2/3 mx-auto h-full flex flex-col justify-between">
              <div className="text-center font-semibold tracking-tight text-neutral-700 text-sm leading-3">
                <p>Be the first to know about</p>
                <p>new designers and launches</p>
              </div>
              <div className="text-center">
                <div className="font-noto tracking-tighter leading-snug text-4xl italic mb-4">
                  <p>Sign up for</p>
                  <p>our Newsletter</p>
                </div>
                <div className="mb-4">
                  <form
                    action=""
                    className="border border-neutral-400 flex p-2"
                  >
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Your email"
                      className="outline-none bg-transparent grow"
                    />
                    <button type="submit">
                      {" "}
                      <ArrowForward />{" "}
                    </button>
                  </form>
                </div>
                <div className="text-xs tracking-tight">
                  <p>
                    By signing up you agree with out{" "}
                    <span className="underline text-neutral-400">Terms and conditions</span> and{" "}
                    <span className="underline text-neutral-400">Privacy Policies</span>
                  </p>
                  <p>To opt out, click Unsubscribe in our emails.</p>
                </div>
              </div>
              <div>
                <p>. </p>
              </div>
            </div>
          </div>
          <div className="basis-1/2 aspect-square">
            <PanImage src="/resized/jimmy.webp" />
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Letter;
