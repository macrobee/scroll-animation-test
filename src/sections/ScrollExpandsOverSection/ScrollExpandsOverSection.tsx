import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import './ScrollExpandsOverSection.scss';

interface IScrollExpandsOverSectionProps {
  text: string;
}

const ScrollExpandsOverSection: FC<IScrollExpandsOverSectionProps> = ({
  text,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({ target: container });
  const zoomFactor = useTransform(scrollYProgress, [0, 1], [`120%`, `100%`]);

  return (
    <div
      ref={container}
      className="section-container section-container_secondary-color"
    >
      <h1>{text}</h1>
      <div className={`image-container`}>
        <motion.img
          style={{ scale: zoomFactor }}
          src="botw.jpg"
          alt="dramatic clouds in the galaxy"
        />
      </div>
    </div>
  );
};

export default ScrollExpandsOverSection;
