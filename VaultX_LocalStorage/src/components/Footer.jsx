import React from "react";
import hearticon from "../icons/heart.png";

const Footer = () => {
  return (
    <div className="flex justify-center flex-col gap-1 items-center text-white bg-slate-800 py-2">
      <h1 className="text-lg font-bold text-center ">
        <a href="/">
          <span className="text-green-500">&lt; </span>
          <span>Vault</span>
          <span className="text-green-500 ml-[3px]">X /&gt;</span>
        </a>
      </h1>
      <div className="flex justify-center items-center w-full text-sm tracking-wider font-semibold ">
        <span className=""> Created with </span>
        <span className="w-10 block place-items-center ">
          <img
            src={hearticon}
            className="w-5 animate-heartbeat"
            alt="hearticon"
          />
        </span>
        <span className="">
          by
          <a
            href="https://www.instagram.com/anas.malik5022/"
            className="border-b border-b-transparent hover:border-b-slate-400 ml-[5px]"
          >
            Anas Malik
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
