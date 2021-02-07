import React from "react";

import { motion, useAnimation } from "framer-motion";
import { photoAnim, titleAnim, FadeIn } from "../Animation";
import { useInView } from "react-intersection-observer";

const Card = ({ title, img, url, name, type, desc }) => {
  const controlls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25 });
  if (view) {
    controlls.start("show");
  } else {
    controlls.start("hidden");
  }
  return url ? (
    <motion.div
      ref={element}
      variants={FadeIn}
      initial='hidden'
      animate={controlls}
      className='card'>
      <a target='_blank' rel='noreferrer' className='cardAsLink' href={url}>
        <motion.div className='cardImg'>
          <motion.img
            variants={photoAnim}
            initial='hidden'
            animate={controlls}
            src={img}
            alt=''
          />
        </motion.div>
        <motion.div className='cardBody'>
          <motion.div className='heading'>
            <motion.h4
              variants={titleAnim}
              animate={controlls}
              initial='hidden'>
              {title ? title : name}
            </motion.h4>
          </motion.div>
          <motion.div className='text'>
            <motion.p variants={titleAnim} animate={controlls} initial='hidden'>
              {desc ? desc : type}
            </motion.p>
          </motion.div>
        </motion.div>
      </a>
    </motion.div>
  ) : (
    <motion.div
      ref={element}
      variants={FadeIn}
      initial='hidden'
      animate={controlls}
      className='card'>
      <div className='cardAsLink'>
        <motion.div className='cardImg'>
          <motion.img
            variants={photoAnim}
            initial='hidden'
            animate={controlls}
            src={img}
            alt=''
          />
        </motion.div>
        <motion.div className='cardBody'>
          <motion.div className='heading'>
            <motion.h4
              variants={titleAnim}
              animate={controlls}
              initial='hidden'>
              {title ? title : name}
            </motion.h4>
          </motion.div>
          <motion.div className='text'>
            <motion.p variants={titleAnim} animate={controlls} initial='hidden'>
              {desc ? desc : type}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
