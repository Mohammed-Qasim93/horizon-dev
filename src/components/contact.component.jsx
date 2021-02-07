import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import Form from "./form.component";
import { motion, useAnimation } from "framer-motion";
import { titleAnim } from "../Animation";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const controlls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25 });
  if (view) {
    controlls.start("show");
  } else {
    controlls.start("hidden");
  }

  return (
    <motion.div ref={element} className='contact'>
      <motion.div className='left'>
        <div className='contactHeading'>
          <motion.h2 variants={titleAnim} initial='hidden' animate={controlls}>
            Have an idea
          </motion.h2>
        </div>

        <motion.p variants={titleAnim} initial='hidden' animate={controlls}>
          lets put it in action you'll find us worth the try you will be
          satisfied of our work so dont wait contact us on our social media
          accounts
        </motion.p>
        <motion.div className='social'>
          <motion.a
            variants={titleAnim}
            initial='hidden'
            animate={controlls}
            href=''>
            <FontAwesomeIcon icon={faFacebook} />
          </motion.a>
          <motion.a
            variants={titleAnim}
            initial='hidden'
            animate={controlls}
            href=''>
            <FontAwesomeIcon icon={faInstagram} />
          </motion.a>
          <motion.a
            variants={titleAnim}
            initial='hidden'
            animate={controlls}
            href=''>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div className='right'>
        <div className='contactHeading'>
          <motion.h2 variants={titleAnim} initial='hidden' animate={controlls}>
            Or Send us an email with the details
          </motion.h2>
        </div>
        <Form />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
