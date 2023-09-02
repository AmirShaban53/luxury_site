import {useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const PanImage = ({ src }) => {
  const img1Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: img1Ref,
    offset: ["start end", "end start"],
  });
  const position = useTransform(
    scrollYProgress,
    [0.15, 0.5, 1],
    ["50% 0%", "50% 50%", "50% 100%"]
  );
  return (
    <motion.img
      ref={img1Ref}
      src={src}
      className="w-full h-full object-cover"
      style={{ objectPosition: position }}
      alt="this is a simple image"
    />
  );
};

export default PanImage;
