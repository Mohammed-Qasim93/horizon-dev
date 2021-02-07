import React from "react";
import { motion } from "framer-motion";
import { titleAnim } from "../Animation";

const Button = ({ type, placeholder }) => {
  return (
    <motion.button
      variants={titleAnim}
      initial='hidden'
      animate='show'
      type={type}>
      {placeholder}
    </motion.button>
  );
};

export default Button;
