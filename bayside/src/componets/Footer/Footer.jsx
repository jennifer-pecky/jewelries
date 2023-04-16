import React from 'react';
import img from '../../assets/images/Rectangle 31.png';
const Footer = () => {
  return (
    <div className="bg-[#B8E0EF] mt-20">
      <div className="flex p-24 justify-center">
        <img src={img} alt="" />

        <div className="p-14 shadow-lg bg-[#fff]">
          <div className="mt-14 text-center space-y-5">
            <h1 className="">STAY IN TOUCH</h1>
            <p className="">
              Subscribe to get special offers, free giveaways, <br /> and
              once-in-a-lifetime deals.
            </p>

            <button className="bg-[#002D69] text-[#fff] p-2 w-[39%]  hover:bg-black font-semibold">
              {' '}
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
