import React from 'react';
import { BsBell } from 'react-icons/bs';
import Hero from '../Hero/Hero';

const Header = () => {
  return (
    <header>
      <div className="bg-[#ffffff]">
        <div className="flex items-center justify-between">
          <div className=" lg:px-[4rem] p-[1.3rem]  text-[36px] text-[#0d5eba] leading-[43px] ">
            <h1 className="font-bold w-[100%]">BAYSIDE FINE JEWELRY</h1>
          </div>
          <nav className="">
            <ul className="flex space-x-12 font-bold leading-[19px] p-5 items-center hidden md:flex">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <BsBell />
            </ul>
          </nav>
        </div>
      </div>
      <Hero />
    </header>
  );
};

export default Header;
