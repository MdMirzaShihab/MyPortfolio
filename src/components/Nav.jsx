import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logos/myLogo.webp";

const Nav = () => {
  const NavLink = ({ to, children }) => {
    const location = useLocation();

    return (
      <Link
        to={to}
        className={`px-4 py-2 mt-2 text-md font-semibold md:mt-0 md:ml-4 hover:text-sky-600 ${
          location.pathname === to ? "text-[#4e72c3]" : ""
        }`}>
        {children}
      </Link>
    );
  };
  return (
    <div className="fixed flex items-center justify-between z-30 w-full bg-[#dbd8c9]/70 text-center backdrop-blur-lg text-gray-900 shadow-xl font-bold">
      <Link to="/" className="flex items-center gap-0">
        <img
          src={Logo}
          className="mx-5 p-1 h-16 w-16 object-contain"
          alt="CSM"
        />
      </Link>
      <div className="mx-5">
        <NavLink to="/certificates">Certificates</NavLink>
        <NavLink to="/experience">Experiences</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
      </div>
    </div>
  );
};

export default Nav;
