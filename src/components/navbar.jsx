import React from "react";
import "../index.css";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="w-screen h-18 backdrop-blur-3xl absolute">
      <nav
        id="navbar"
        className="  w-[100%] h-[100%] px-10 py-3 flex justify-between items-center text-white"
      >
        <span>
          <img
            className="w-auto h-15 cursor-pointer"
            src="../src/assets/theGost-logo.png"
            alt="the ghost logo"
          />
        </span>
        <ul
          id="list-items"
          className="flex font-navbar sm:text-lg font-light justify-between items-center gap-20"
        >
          <li className="cursor-pointer navbar-hover">Home</li>
          <li className="cursor-pointer navbar-hover">Performance</li>
          <li className="cursor-pointer navbar-hover">Features</li>
        </ul>
        <button
          id="contact-button"
          className=" px-5 py-1 rounded-md bg-[#CAE945] text-[#1b1b1b] cursor-pointer"
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

export default navbar;
