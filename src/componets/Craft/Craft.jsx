import React from 'react';
import img from '../../assets/images/image5.png';

const Craft = () => {
  return (
    <div className=" mt-36 max-h-[100%] w-[100%]">
      <div className="lg:flex text-[#fff]">
        <div className="space-y-7  bg-[#002D69] lg:p-20">
          <h1 className="text-[54px] font-bold">
            HAND CRAFTED <br /> FINE PIECES
          </h1>
          <p className="text-[28px] font-bold lg:whitespace-nowrap leading-[34px]">
            We also firmly believed that our customers <br /> deserved more
            choices, straightforward <br /> information and legendary service.{' '}
          </p>
          <div>
            <button className="bg-[#fff] text-[#002d69] p-2 w-[36%] hover:bg-black font-semibold rounded-[10px]">
              {' '}
              LEARN MORE
            </button>
          </div>
        </div>
        <div>
          <img src={img} alt="" className=" w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Craft;
