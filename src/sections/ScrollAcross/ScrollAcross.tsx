import { useRef, FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import './ScrollAcross.scss';

interface IScrollAcrossProps {
  text: string;
  imageUrl: string;
}

const ScrollAcross: FC<IScrollAcrossProps> = ({ text, imageUrl }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({target: container});
  const imagePosition = useTransform(scrollYProgress, [0,1],[`-100%`,`300%`]);

  return (
    <div
      ref={container}
      className="section-container section-container_secondary-color no-overflow"
    >
      <motion.h1 >{text}</motion.h1>
      <motion.img className="moving-image" style={{ translateX: imagePosition, translateY:`-50%` }} src={imageUrl} alt="bike scrolling across screen" />
    </div>
  );
};

export default ScrollAcross;
