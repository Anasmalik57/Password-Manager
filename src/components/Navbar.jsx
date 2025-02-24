import React from "react";
import github from "../icons/github.svg";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-800 flex justify-between items-center minicontainer md:mycontainer shadow-md shadow-[#bebebe]">
        <div className="logo font-bold text-xl md:text-2xl text-white tracking-wider">
          <a href="/">
            <span className="text-green-500">&lt;</span>
            <span>Vault</span>
            <span className="text-green-500 ml-[1px] md:ml-[3px]">X</span>
            <span>/&gt;</span>
          </a>
        </div>

        <div className="cursor-pointer">
          <a
            href="https://github.com/Anasmalik57/Password-Manager"
            target="_blank"
          >
            <button className="flex justify-center items-center tracking-wide gap-2 w-fit mx-auto px-4 py-2 text-[14px] md:text-[16px] font-semibold text-white rounded-full bg-gradient-to-tl from-green-500 via-green-500 to-green-400 hover:from-green-600 hover:via-green-500 hover:to-green-500 transition-all duration-300 ease-in shadow-lg hover:shadow-xl active:scale-110 focus:outline-4 focus:outline-offset-[3px] outline-green-500">
              <img src={github} className="w-5  text-xs" alt="github" />
              <span>Github</span>
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
