import React from 'react';
import img from '../../assets/images/Item 1.png';
import img2 from '../../assets/images/item 2.png';
import img3 from '../../assets/images/Item 3.png';
import img4 from '../../assets/images/Item 4.png';
import img5 from '../../assets/images/Item 5.png';
import Craft from '../Craft/Craft';
import Latest from '../Latest/Latest';

const Shop = () => {
  return (
    <div>
      <div className=" lg:px-[4rem] mt-[5rem]">
        <div className="text-[#002D69] text-[30px] leading-[43px]">
          <h1 className="font-bold max-w-[100%]">SHOP BY JEWELRY TYPE</h1>
        </div>
        <div className="lg:flex space-x-8 mt-12 grid-cols-1 ">
          <div className="flex flex-col items-center">
            <img src={img} alt="" />
            <p className="text-[#002D69] font-medium">EARRINGS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img2} alt="" />
            <p className="text-[#002D69] font-medium">NECKLESS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img3} alt="" />
            <p className="text-[#002D69] font-medium">BRACELETS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img4} alt="" />
            <p className="text-[#002D69] font-medium">ALL RINGS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img5} alt="" />
            <p className="text-[#002D69] font-medium">ENGAGEMENT RINGS</p>
          </div>
        </div>
      </div>
      <Craft />
      <Latest />
    </div>
  );
};

export default Shop;
