import React from "react";
import Card from "./card.component";
import { about } from "../data/work";

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='upper'>
        <h2>who we are</h2>
        <p>Hand picked Develepers</p>
      </div>
      <div className='lower'>
        {about.map(({ name, type }) => {
          return <Card key={name} title={name} type={type} />;
        })}
      </div>
    </div>
  );
};

export default About;
