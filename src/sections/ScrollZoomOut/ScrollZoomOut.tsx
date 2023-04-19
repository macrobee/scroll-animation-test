import { useRef, FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./ScrollZoomOut.scss";

interface IScrollZoomOutProps {
  text: string;
}

const ScrollZoomOut: FC<IScrollZoomOutProps> = ({ text }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container });

  const imagePosition = useTransform(scrollYProgress, [0, 0.5], [-200, 200]);
  const imageSize = useTransform(scrollYProgress, [0.5, 1], [50,3000]);

  return (
    <div
      ref={container}
      className="section-container section-container_main-color no-overflow"
    >
      <motion.div
        className="expanding-circle"
        style={{
          y: imagePosition,
          translateX: `-50%`,
          translateY: `-50%`,
          left: `50%`,
          width: imageSize,
          height: imageSize,
        }}
      >
        <motion.h1 id={`center-text`}>{text}</motion.h1>
      </motion.div>
    </div>
  );
};

export default ScrollZoomOut;
