import React from 'react';
import img from '../../assets/images/serv.png';
import img2 from '../../assets/images/serv2.png';
import img3 from '../../assets/images/serv3.png';

const Serivices = () => {
  return (
    <div className="lg:px-20 mt-24 sm:grid-cols-2">
      <div className="space-y-12">
        <h1 className=" text-[#002D69] text-[36px] leading-[43px] font-bold max-w-[100%]">
          OUR SERVICES
        </h1>
        <div className="lg:grid grid-cols-3 gap-14">
          <div className="space-y-5">
            <img src={img} alt="" />
            <h2 className="text-[#002D69] text-[20px] lg:text-center">
              JEWELRY REPAIR
            </h2>
          </div>
          <div className="space-y-5">
            <img src={img2} alt="" />
            <h2 className="text-[#002D69] text-[20px] lg:text-center">
              RING SIZING
            </h2>
          </div>
          <div className="space-y-5">
            <img src={img3} alt="" />
            <h2 className="text-[#002D69] text-[20px] lg:text-center">
              JEWELRY POLISHING
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-[#fff] bg-[#002D69] lg:p-3 lg:w-[16%] hover:bg-black font-semibold p-3 whitespace-nowrap ">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Serivices;
