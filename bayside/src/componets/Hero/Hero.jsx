import React from 'react';
import img from '../../assets/images/Image.png';
import Shop from '../Shop/Shop';

const Hero = () => {
  return (
    <div>
      <div className="max-w-[100%] md:w-[100%]">
        <img src={img} alt="" />
      </div>
      <Shop />
    </div>
  );
};

export default Hero;
