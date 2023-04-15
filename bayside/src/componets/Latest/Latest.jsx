import React from 'react';
import img from '../../assets/images/latest.png';
import img2 from '../../assets/images/latest2.png';
import img3 from '../../assets/images/latest3.png';

const Latest = () => {
  return (
    <div className="lg:px-20 mt-14">
      <div className=" space-y-12 mb-7">
        <h1 className=" text-[#002D69] text-[30px] leading-[43px] font-bold max-w-[100%]">
          OUR LATEST JEWELRY
        </h1>{' '}
        <div className="lg:grid grid-cols-3 gap-16 ">
          <img src={img} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        <div className="flex justify-center">
          <button className="text-[#fff] bg-[#002D69] lg:p-3 lg:w-[16%] hover:bg-black font-semibold p-3 whitespace-nowrap ">
            VIEW GALLERY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
