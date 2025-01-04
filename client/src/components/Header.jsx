import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretUp, FaBars, FaTimes } from "react-icons/fa";
import { headerData } from "./data/data";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav ref={headerRef} className="bg-black p-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          <img
            className="web_logo w-12 rounded-lg "
            src="/web_logo.jpg"
            alt="Logo"
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white text-3xl w-auto"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {headerData.map((menu, index) => (
            <li
              key={index}
              className="relative group md:inline-block text-white p-1"
            >
              {/* Menu Item */}
              <div
                onClick={() => handleMenuToggle(index)}
                className="flex items-center justify-between cursor-pointer p-2 md:rounded hover:bg-red-700"
              >
                {menu.title}
                <span className="ml-2">
                  {activeMenu === index ? <FaCaretUp /> : <FaCaretDown />}
                </span>
              </div>

              {/* Dropdown Menu */}
              <ul
                className={`absolute left-0 mt-2 bg-white text-black rounded-md shadow-md transition-transform transform w-full ${
                  activeMenu === index
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                } ${
                  menu.title === "Blood Bank"
                    ? "min-w-[8.3rem]"
                    : "min-w-[11rem]"
                }`}
              >
                {menu.subHeaders.map((item, idx) => (
                  <li key={idx} className="p-2 hover:bg-gray-200 hover:text-red-600">
                    <Link
                      to={item.link}
                      onClick={() => setActiveMenu(null)}
                      className="block"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
