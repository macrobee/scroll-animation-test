import { motion, useScroll } from "framer-motion";

import "./ScrollProgressBar.scss";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scrollprogress"
      style={{ scaleX: scrollYProgress }}
    />
    
  );


};

export default ScrollProgressBar;
