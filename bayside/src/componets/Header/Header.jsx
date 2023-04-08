import React from 'react';
import { BsBell } from 'react-icons/bs';
import Hero from '../Hero/Hero';

const Header = () => {
  return (
    <header>
      <div className="bg-[#ffffff]">
        <div className="flex px-[4rem] p-[1.3rem] items-center justify-between">
          <div className="text-[36px] text-[#0d5eba] leading-[43px]">
            <h1 className="font-bold">BAYSIDE FINE JEWELRY</h1>
          </div>
          <nav className="">
            <ul className="flex space-x-12 font-bold leading-[19px] items-center">
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
