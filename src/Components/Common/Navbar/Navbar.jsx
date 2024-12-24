'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
const logo = '/images/logo-black.png'
import { IoSearch } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full z-50 ${isScrolled && 'border-gray-200 border-b-[1px]'}`}>
      <nav className="bg-[#FFFFFF]">
        <div className="md:mx-[50px] mx-[20px] py-[28px] flex justify-between items-center">
          <div>
            <a href="#" className=" font-bold text-2xl">
              <Image alt="logo" src={logo} width={140} height={50}></Image>
            </a>
          </div>

          <div className="hidden lg:block">
            <ul className="flex space-x-[80px] text-black">
              <li>
                <a href="#" className="">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="">
                  PAGES
                </a>
              </li>
              <li>
                <a href="#" className="">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#" className="">
                  TEAM
                </a>
              </li>
              <li>
                <a href="#" className="">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          <div className="flex space-x-[25px] items-center">
            <button
             className="text-2xl"   
            >
                <IoSearch />
            </button>

            <div className="bg-gray-300 rounded-full w-[1.5px] h-[20px]"></div>

            <button
             className="text-2xl "   
            >
                <CgMenuRight />
            </button>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
