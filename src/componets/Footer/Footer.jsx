import React from 'react';
import img from '../../assets/images/Rectangle 31.png';
const Footer = () => {
  return (
    <div className="bg-[#B8E0EF] mt-20 w-[100%]">
      <div className="flex p-24 justify-center">
        <img src={img} alt="" />

        <div className="p-14 shadow-lg bg-[#fff] hidden md:flex">
          <div className="mt-14 text-center space-y-5">
            <h1 className=" text-[#002D69] text-[36px] leading-[43px] font-bold">
              STAY IN TOUCH
            </h1>
            <p className="text-[#343434]">
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
      <div className="lg:flex lg:space-x-24 mb-6 px-14 ">
        <div className="space-y-2">
          <h1 className="text-[21px] font-bold text-[#343434]">Product</h1>
          <li className="text-[16px]">Privacy Policy</li>
          <li className="text-[16px]">Terms of Service</li>
          <li className="text-[16px]">FAQ</li>
        </div>

        <div className="space-y-2">
          <h1 className="text-[21px] font-bold text-[#343434]">Resouces</h1>
          <li>Documatation</li>
          <li>Case Studies</li>
        </div>

        <div className="space-y-2">
          <h1 className="text-[21px] font-bold text-[#343434]">Company</h1>
          <li>About Us</li>
          <li>Contact Us</li>
        </div>
      </div>

      <hr className="h-px my-8 border-0 dark:bg-gray-700"></hr>
      <div className="bg-[B8E0EF] p-8">
        <small className="text-[#53585F] text-[15px] lg:px-12">
          &copy; Blue Diamond Jewelry 2021
        </small>
      </div>
    </div>
  );
};

export default Footer;
