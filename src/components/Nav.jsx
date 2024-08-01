import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logos/myLogo.webp";

const Nav = () => {
  const NavLink = ({ to, children }) => {
    const location = useLocation();

    return (
      <Link
        to={to}
        className={`px-4 py-2 mt-2 text-md font-semibold md:mt-0 md:ml-4 hover:text-slate-600 ${
          location.pathname === to ? "text-sky-200" : ""
        }`}>
        {children}
      </Link>
    );
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed flex items-center justify-between z-30 w-full bg-[#dbd8c9]/70 text-center backdrop-blur-lg text-gray-900 shadow-xl font-bold">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <Link to="/" className="flex items-center gap-0">
              <img
                src={Logo}
                className="mx-5 p-1 h-16 w-16 object-contain"
                alt="CSM"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink to="/certificates">Certificates</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contacts</NavLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="mobile-menu md:hidden">
            <ul className="mt-4 space-y-4">
              <li>
                <NavLink
                  to="/certificates"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Certificates
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;