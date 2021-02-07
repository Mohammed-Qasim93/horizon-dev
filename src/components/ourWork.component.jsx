import React from "react";
import Card from "./card.component";
import { workArr } from "../data/work";
import { motion, useAnimation } from "framer-motion";
import { titleAnim } from "../Animation";
import { useInView } from "react-intersection-observer";

const OurWork = () => {
  const controlls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25 });
  if (view) {
    controlls.start("show");
  } else {
    controlls.start("hidden");
  }
  return (
    <motion.div ref={element} className='ourWork'>
      <motion.div className='hide'>
        <motion.h2 variants={titleAnim} initial='hidden' animate={controlls}>
          Our Work
        </motion.h2>
      </motion.div>
      <motion.div className='cards'>
        {workArr.map((work) => {
          return (
            <Card
              key={work.name}
              title={work.name}
              url={work.url}
              img={work.img}
              desc={work.desc}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default OurWork;
