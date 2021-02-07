import React from "react";
import { motion } from "framer-motion";
import { HomeSectionAnimation, titleAnim, buttonAnim } from "../Animation";
import { Link } from "react-scroll";

const ShowCase = () => {
  return (
    <motion.div className='showCase'>
      <motion.div
        variants={HomeSectionAnimation}
        initial='hidden'
        animate='show'
        className='showCaseItems'>
        <motion.div
          variants={HomeSectionAnimation}
          initial='hidden'
          animate='show'
          className='text'>
          <motion.h1 variants={titleAnim} className='heading'>
            welcome to <span>horizon dev</span>
          </motion.h1>
          <motion.p variants={titleAnim} className='showCaseText'>
            where every thing you imagine became true so dont wait contact us
          </motion.p>
        </motion.div>
        <motion.div variants={buttonAnim} className='a'>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            delay={100}
            offset={-70}
            isDynamic={true}>
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ShowCase;
