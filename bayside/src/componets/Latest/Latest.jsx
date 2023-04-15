import React from 'react';
import img from '../../assets/images/latest.png';
import img2 from '../../assets/images/latest2.png';
import img3 from '../../assets/images/latest3.png';

const Latest = () => {
  return (
    <div className="lg:px-20 mt-14">
      <div className="text-[#002D69] text-[30px] leading-[43px]">
        <h1 className="font-bold max-w-[100%]">OUR LATEST JEWELRY</h1> <br />
        <div className="lg:grid grid-cols-3  ">
          <img src={img} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Latest;
