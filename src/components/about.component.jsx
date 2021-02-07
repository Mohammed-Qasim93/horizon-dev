import React from "react";
import Card from "./card.component";
import { about } from "../data/work";
import { motion, useAnimation } from "framer-motion";
import { titleAnim } from "../Animation";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controlls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25 });
  if (view) {
    controlls.start("show");
  } else {
    controlls.start("hidden");
  }
  return (
    <motion.div ref={element} className='about' id='about'>
      <motion.div className='upper'>
        <motion.h2 variants={titleAnim} animate={controlls} initial='hidden'>
          who we are
        </motion.h2>
        <motion.p variants={titleAnim} animate={controlls} initial='hidden'>
          Full stack developers gatherd to make your ideas and dreams live and
          be with you along the process so if you had and creative idea contact
          us
        </motion.p>
      </motion.div>
      <div className='lower'>
        {about.map(({ name, type, img }) => {
          return <Card key={name} title={name} type={type} img={img} />;
        })}
      </div>
    </motion.div>
  );
};

export default About;
