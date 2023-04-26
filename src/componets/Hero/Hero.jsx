import React from 'react';
import img from '../../assets/images/Image.png';
import Shop from '../Shop/Shop';

const Hero = () => {
  return (
    <div>
      <div className="">
        <img src={img} alt="" className="w-[100%]" />
      </div>
      <Shop />
    </div>
  );
};

export default Hero;
