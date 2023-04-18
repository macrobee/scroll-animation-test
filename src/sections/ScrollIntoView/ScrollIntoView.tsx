import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./ScrollIntoView.scss";

interface IScrollTextIntoViewProps {
  text: string;
}

const ScrollTextIntoView: FC<IScrollTextIntoViewProps> = ({ text }) => {
  const sectionContainer = useRef(null);
  const titleContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionContainer,
  });
  const offset = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <div
      ref={sectionContainer}
      className="section-container section-container_main-color"
    >
      <motion.div ref={titleContainer} className="clip-container">
        <motion.h1 style={{ top: offset }} className="sticky-title">
          {text.split("").map((letter) => (
            <span>{letter}</span>
          ))}
        </motion.h1>
      </motion.div>
      <svg id="progress" width="300" height="300" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="150" pathLength="1" className="bg" />
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          pathLength="1"
          className="fg"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className={"cover"}
      ></motion.div>
    </div>
  );
};

export default ScrollTextIntoView;
