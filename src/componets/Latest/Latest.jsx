import React from 'react';
import img from '../../assets/images/latest.png';
import img2 from '../../assets/images/latest2.png';
import img3 from '../../assets/images/latest3.png';
import img4 from '../../assets/images/“.png';

const Latest = () => {
  return (
    <div className="md:px-20 mt-14">
      <div className=" space-y-12 mb-7">
        <h1 className=" text-[#002D69] text-[30px] leading-[43px] font-bold max-w-[100%]">
          OUR LATEST JEWELRY
        </h1>{' '}
        <div className="lg:flex gap-10 space-y-2">
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

      <div className="space-y-9 mt-24">
        <h1 className=" text-[#002D69] text-[36px] leading-[43px] font-bold max-w-[100%]">
          CUSTOMER REVIEWS
        </h1>
        <div className="lg:grid grid-cols-3">
          <div className="space-y-10 border-4 border-sky-500">
            <img src={img4} alt="" className="lg:px-14" />
            <p className="lg:text-center italic font-sans font-normal">
              {' '}
              Great variety of cuts and amazing customer <br /> service.Helped
              to find the perfect ring and <br />
              helped me to personalize it a little more.
            </p>
            <h3 className="lg:text-center italic ">- Nico Jones</h3>
          </div>
          <div className="space-y-10">
            <img src={img4} alt="" className="lg:px-14" />
            <p className="lg:text-center italic font-sans font-normal">
              What an amazing shopping experience! I <br /> tried other jewelers
              and didnt find anything <br /> i liked. Thank You so much.{' '}
            </p>
            <h3 className="lg:text-center italic">- Tracy Wills</h3>
          </div>
          <div className="space-y-9">
            <img src={img4} alt="" className="lg:px-14" />
            <p className="lg:text-center italic font-sans font-normal">
              Great quality, and showed they can work <br /> through a problem
              and maintain execllent <br /> customer service!!
            </p>
            <h3 className="lg:text-center italic">- Susana Santos</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
