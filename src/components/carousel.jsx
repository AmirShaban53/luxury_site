import { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const tracker = useRef();
  const [activeImg, setActiveImg] = useState(0);
  // const handleChangeImg = () => {
  //   if (activeImg.current >= images) activeImg.current = 0;
  //   if (activeImg.current < 0) activeImg.current = images.length - 1;
  //   else {
  //     activeImg.current++;
  //   }
  // };

  const handleChangeImg = () => {
    setActiveImg((prev) => prev + 1);
  };

  const handleSetActiveImg = (index) => {
    clearInterval(tracker.current);
    setActiveImg(index);
    tracker.current = setInterval(() => {
      handleChangeImg();
    }, 4000);
  };

  useEffect(() => {
    if (activeImg >= images.length) setActiveImg(0);
  }, [activeImg]);
  useEffect(() => {
    tracker.current = setInterval(() => {
      handleChangeImg();
    }, 4000);
    return () => clearInterval(tracker.current);
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div
        className="flex absolute duration-1000 transition-all ease-in-out"
        style={{
          transform: `translateX(-${
            activeImg === images.length - 1
              ? activeImg * 85 - 15
              : activeImg * 85
          }%)`,
        }}
      >
        {images.map((image, index) => {
          return (
            <div key={index} className="w-[85%] shrink-0">
              <img src={image} alt="singer" className="object-cover h-full" />
            </div>
          );
        })}
      </div>
      <div className="absolute p-2 left-1/2 -translate-x-1/2 bottom-6 space-x-[0.3rem]">
        {images.map((img, index) => {
          const active = activeImg === index;
          return (
            <button
              type="button"
              key={index}
              onClick={() => handleSetActiveImg(index)}
              className=""
            >
              <span
                className={`inline-block ${
                  active ? "bg-white" : "bg-zinc-200/50"
                } h-[0.2rem] w-24 rounded-full cursor-pointer`}
              ></span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

const images = ["/hero/fashion.webp", "/hero/twins.webp", "/hero/travel.webp", "/hero/jessica.webp"];
