import React from "react";
import Button from "./button.component";
import Input from "./input.component";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const Form = () => {
  const controlls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25 });
  if (view) {
    controlls.start("show");
  } else {
    controlls.start("hidden");
  }

  return (
    <motion.div ref={element} className='form'>
      <Input type='text' placeholder='Enter Your Name' />
      <Input type='email' placeholder='Enter Your Email' />
      <Input type='text' placeholder='Enter Message Title' />
      <Input type='text' placeholder='Enter Your Message' />
      <Button type='submit' placeholder='Submit' />
    </motion.div>
  );
};

export default Form;
