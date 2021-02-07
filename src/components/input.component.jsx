import React from "react";
import { motion } from "framer-motion";
import { titleAnim } from "../Animation";

const Input = ({ type, placeholder }) => {
  return (
    <motion.input
      variants={titleAnim}
      initial='hidden'
      animate='show'
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
