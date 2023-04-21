import { FC, useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import "./ScrollItemsAcross.scss";

interface IScrollItemsAcrossProps {
  text: string;
}

const ScrollItemsAcross: FC<IScrollItemsAcrossProps> = ({ text }) => {
  const container = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    container.current
      ? setContainerWidth(container.current.clientWidth)
      : setContainerWidth(0);
  }, [container.current]);

  const { scrollYProgress } = useScroll({ target: container });

  const translateFirstDistance = useTransform(
    scrollYProgress,
    [0, 1],
    [-200, containerWidth]
  );
  const translateSecondDistance = useTransform(
    scrollYProgress,
    [0, 1],
    [200, -containerWidth]
  );

  return (
    <div
      ref={container}
      className="section-container section-container_secondary-color"
    >
      <h1>{text}</h1>
      <div className="sticky-container">
        <motion.p
          style={{ translateX: translateFirstDistance, translateY:`50%` }}
          className="scrolling-item_1"
        >
          Pew
        </motion.p>
        <motion.p
          style={{ translateX: translateSecondDistance, translateY:`-50%` }}
          className="scrolling-item_2"
        >
          Pew
        </motion.p>
      </div>
    </div>
  );
};

export default ScrollItemsAcross;
