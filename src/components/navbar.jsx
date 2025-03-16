import React from "react";
import {Link, link} from "react-scroll";

const navbar = () => {
  return (
    <div className="w-screen h-18 bg-Soft-Black backdrop-blur-lg inset-shadow-navbar fixed z-50">
      <nav
        id="navbar"
        className="  w-[100%] h-[100%] px-10 py-3 flex justify-between items-center text-white"
      >
        <span>
          <Link
            to="home"
            smooth={true}
            duration={1000}>
            <img
              className="w-auto h-15 cursor-pointer"
              src="../src/assets/theGost-logo.png"
              alt="the ghost logo"
            />
          </Link>
        </span>
        <ul
          id="list-items"
          className="flex font-leagueSpartan sm:text-lg font-light justify-between items-center gap-20"
        >
          <li className="cursor-pointer navbar-hover">
            <Link to="home" smooth={true} duration={1000}>Home</Link>
          </li>
          <li className="cursor-pointer navbar-hover">
            <Link to="spec" smooth={true} duration={1000}>Performance</Link>
          </li>
          <li className="cursor-pointer navbar-hover">
            <Link to="carComponents" smooth={true} duration={1000}>Features</Link>
          </li>
        </ul>
        <button
          id="contact-button"
          className=" px-5 py-1 rounded-md bg-secondary-lime-green text-[#1b1b1b] cursor-pointer"
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

export default navbar;
