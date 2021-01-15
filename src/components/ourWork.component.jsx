import React from "react";
import Card from "./card.component";
import { workArr } from "../data/work";

const OurWork = () => {
  return (
    <div className='ourWork' id='ourWork'>
      <div className='cards'>
        {workArr.map((work) => {
          return (
            <Card
              key={work.name}
              title={work.name}
              url={work.url}
              img={work.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurWork;
