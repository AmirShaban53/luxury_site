import { useRef } from "react";
import { ContainerFluid } from "./layout";
import PanImage from "./panImage";
import { motion, useScroll, useTransform } from "framer-motion";

const Cta = () => {
  const img1Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: img1Ref,
    offset: ["start end", "end start"],
  });
  const position = useTransform(
    scrollYProgress,
    [0.15, 0.5, 1],
    ["100%", "50%", "0%"]
  );
  return (
    <div>
      <ContainerFluid>
        <div>
          <div className="h-[50vh] md:h-[85vh] 2xl:h-[50vh] relative" ref={img1Ref}>
            <img
              src="resized/hero/fashion.webp"
              alt="man in a style overcoat"
              className="object-center w-full h-full object-cover"
            />
            <motion.div
              className="absolute bottom-6 uppercase text-white text-2xl md:text-7xl"
              style={{
                left: position,
              }}
            >
              <p className="whitespace-nowrap font-noto">
                Explore your own style.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-12" id="glasses">
            <div className="col-span-12 md:col-span-6 aspect-square 2xl:aspect-[8/7]">
              <PanImage src={"/resized/carlos.webp"} />
            </div>
            <div className="col-span-12 md:col-span-6 aspect-square 2xl:aspect-[8/7] p-8 lg:p-28 bg-neutral-100">
              <div className="relative h-full">
                <div className="absolute  text-center left-1/2 -translate-x-1/2 bottom-16 font-semibold">
                  
                  <div className="mb-8">
                    <p>Minimal Framed</p>
                    <p>Eyeglasses</p>
                  </div>
                  <div>
                    <button type="button" className="underline underline-offset-8">Shop</button>
                  </div>
                </div>
                <img
                  src="/resized/eyeglasses.webp"
                  className="h-full w-full object-cover mx-auto"
                  alt="minimal eyeglasses"
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
