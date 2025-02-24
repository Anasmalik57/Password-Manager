import React from "react";
import github from "../icons/github.svg";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-800 flex justify-between items-center mycontainer shadow-md   shadow-[#bebebe]">
        <div className="logo font-bold text-2xl text-white tracking-wider">
          <a href="/">
            <span className="text-green-500">&lt; </span>
            <span>Vault</span>
            <span className="text-green-500 ml-[3px]">X /&gt;</span>
          </a>
        </div>
        <ul className="flex gap-x-6">
          <li className="*:mx-4 *:font-semibold *:tracking-wider *:text-white ">
            <a
              className="transition-all duration-300 border-b-2 border-transparent hover:border-b-current hover:scale-105"
              href="#"
            >
              Home
            </a>
            <a
              className="transition-all duration-300 border-b-2 border-transparent hover:border-b-current hover:scale-105"
              href="#"
            >
              About
            </a>
            <a
              className="transition-all duration-300 border-b-2 border-transparent hover:border-b-current hover:scale-105"
              href="#"
            >
              Career
            </a>
            <a
              className="transition-all duration-300 border-b-2 border-transparent hover:border-b-current hover:scale-105"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="cursor-pointer">
          <a href="">
            <img src={github} className="w-7 invert" alt="" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
