import { useRef, FC, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

import "./ScrollZoomOut.scss";

interface IScrollZoomOutProps {
  text: string;
}

const ScrollZoomOut: FC<IScrollZoomOutProps> = ({ text }) => {
  const [circlePosition, setCirclePosition] = useState(0);
  const [circleSizePercent, setCircleSizePercent] = useState(0);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container });

  const maskPosition = useTransform(scrollYProgress, [0, 0.5], [-10, 50]);
  const circleSize = useTransform(scrollYProgress, [0.5, 1], [10, 200]);

  useMotionValueEvent(maskPosition, "change", (value) => {
    setCirclePosition(value);
  });

  useMotionValueEvent(circleSize, "change", (value) => {
    setCircleSizePercent(value);
  });

  return (
    <div
      ref={container}
      className="section-container section-container_main-color no-overflow"
    >
      <div className="expanding-container">
        <motion.div
          style={{
            WebkitMaskImage: `radial-gradient(circle at center ${circlePosition}%, transparent ${circleSizePercent}%, black ${circleSizePercent}%)`,
          }}
          className="mask-container"
        >
          <div className="noise-container">
          <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              consequatur ipsum illum iusto illo voluptatem veniam nam veritatis
              debitis, ad pariatur ducimus eos. Suscipit voluptatibus enim
              similique, vel molestias optio!Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Totam consequatur ipsum illum iusto
              illo voluptatem veniam nam veritatis debitis, ad pariatur ducimus
              eos. Suscipit voluptatibus enim similique, vel molestias optio!
            </p><p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              consequatur ipsum illum iusto illo voluptatem veniam nam veritatis
              debitis, ad pariatur ducimus eos. Suscipit voluptatibus enim
              similique, vel molestias optio!Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Totam consequatur ipsum illum iusto
              illo voluptatem veniam nam veritatis debitis, ad pariatur ducimus
              eos. Suscipit voluptatibus enim similique, vel molestias optio!
            </p><p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              consequatur ipsum illum iusto illo voluptatem veniam nam veritatis
              debitis, ad pariatur ducimus eos. Suscipit voluptatibus enim
              similique, vel molestias optio!Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Totam consequatur ipsum illum iusto
              illo voluptatem veniam nam veritatis debitis, ad pariatur ducimus
              eos. Suscipit voluptatibus enim similique, vel molestias optio!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              consequatur ipsum illum iusto illo voluptatem veniam nam veritatis
              debitis, ad pariatur ducimus eos. Suscipit voluptatibus enim
              similique, vel molestias optio!Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Totam consequatur ipsum illum iusto
              illo voluptatem veniam nam veritatis debitis, ad pariatur ducimus
              eos. Suscipit voluptatibus enim similique, vel molestias optio!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              consequatur ipsum illum iusto illo voluptatem veniam nam veritatis
              debitis, ad pariatur ducimus eos. Suscipit voluptatibus enim
              similique, vel molestias optio!Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Totam consequatur ipsum illum iusto
              illo voluptatem veniam nam veritatis debitis, ad pariatur ducimus
              eos. Suscipit voluptatibus enim similique, vel molestias optio!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              consequatur ipsum illum iusto illo voluptatem veniam nam veritatis
              debitis, ad pariatur ducimus eos. Suscipit voluptatibus enim
              similique, vel molestias optio!Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Totam consequatur ipsum illum iusto
              illo voluptatem veniam nam veritatis debitis, ad pariatur ducimus
              eos. Suscipit voluptatibus enim similique, vel molestias optio!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              consequatur ipsum illum iusto illo voluptatem veniam nam veritatis
              debitis, ad pariatur ducimus eos. Suscipit voluptatibus enim
              similique, vel molestias optio!Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Totam consequatur ipsum illum iusto
              illo voluptatem veniam nam veritatis debitis, ad pariatur ducimus
              eos. Suscipit voluptatibus enim similique, vel molestias optio!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              consequatur ipsum illum iusto illo voluptatem veniam nam veritatis
              debitis, ad pariatur ducimus eos. Suscipit voluptatibus enim
              similique, vel molestias optio!Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Totam consequatur ipsum illum iusto
              illo voluptatem veniam nam veritatis debitis, ad pariatur ducimus
              eos. Suscipit voluptatibus enim similique, vel molestias optio!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              consequatur ipsum illum iusto illo voluptatem veniam nam veritatis
              debitis, ad pariatur ducimus eos. Suscipit voluptatibus enim
              similique, vel molestias optio!Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Totam consequatur ipsum illum iusto
              illo voluptatem veniam nam veritatis debitis, ad pariatur ducimus
              eos. Suscipit voluptatibus enim similique, vel molestias optio!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              consequatur ipsum illum iusto illo voluptatem veniam nam veritatis
              debitis, ad pariatur ducimus eos. Suscipit voluptatibus enim
              similique, vel molestias optio!Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Totam consequatur ipsum illum iusto
              illo voluptatem veniam nam veritatis debitis, ad pariatur ducimus
              eos. Suscipit voluptatibus enim similique, vel molestias optio!
            </p>
          </div>
        </motion.div>
        <h1 className="background-text">{text}</h1>
      </div>
    </div>
  );
};

export default ScrollZoomOut;
