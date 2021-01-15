import React from "react";

const Card = ({ title, img, url, name, type }) => {
  return url ? (
    <div className='card'>
      <a rel='noreferrer' target='_blank' className='cardAsLink' href={url}>
        <div className='cardImg'>
          <img src={img} alt='' />
        </div>
        <div className='cardBody'>
          <h4>{title ? title : name}</h4>
          <p>{url ? url : type}</p>
        </div>
      </a>
    </div>
  ) : (
    <div className='card'>
      <div className='cardImg'>
        <p>{img}</p>
      </div>
      <div className='cardBody'>
        <h4>{title ? title : name}</h4>
        <p>{url ? url : type}</p>
      </div>
    </div>
  );
};

export default Card;
