import { useState, useEffect } from "react";

const Carousel = () => {
  const [activeImg, setActiveImg] = useState(0);

  const handleChangeImg = () => {
    if (activeImg >= images.length - 1) setActiveImg(0);
    else {
      setActiveImg((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const inter = setInterval(() => {
      handleChangeImg();
    }, 2000);
    return () => {
      clearInterval(inter);
    };
  }, []);

  return (
    <div className="h-1/2 aspect-video relative overflow-hidden">
      <div
        className="flex absolute duration-300 transition-all ease-in-out"
        style={{ transform: `translateX(-${activeImg * 100}%)` }}
      >
        {images.map((image, index) => {
          return (
            <div className="w-full shrink-0">
              <img src={image} alt="singer" className="object-contain" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

const images = ["/aurora.jpg", "afro.jpg", "sis.jpg", "farmer.jpg"];
