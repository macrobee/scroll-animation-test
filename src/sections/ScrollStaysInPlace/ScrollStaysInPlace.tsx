import { FC, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import "./ScrollStaysInPlace.scss";

interface IScrollStaysInPlaceProps {
  text: string;
}

const ScrollStaysInPlace: FC<IScrollStaysInPlaceProps> = ({ text }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({ target: container });
  const verticalShift = useTransform(scrollYProgress, [0, 1], [`0%`, `-700%`]);

  return (
    <div
      ref={container}
      className="section-container section-container_main-color"
    >
      <h1>{text}</h1>
      <motion.div
        className={`background-container`}
        style={{
          translateY: verticalShift,
          translateX: `-50%`,
        }}
      >
        <svg height="100" width="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            stroke-width="1"
            fill="yellow"
          />
        </svg>
      </motion.div>
      <motion.div
        className={`foreground-container`}
      >
        <svg height="200" width="500">
          <polygon
            points="0,200 250,10 300,120 410,50 500,200"
            style={{ stroke: `black`, strokeWidth: `1` }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default ScrollStaysInPlace;
