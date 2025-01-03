import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretUp, FaBars, FaTimes } from "react-icons/fa";
import { headerData } from "./data/data";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null); // Ref for the entire header to detect outside clicks

  // Handle click outside of the header to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMenu(null); // Close dropdowns
        setIsMobileMenuOpen(false); // Close mobile menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false); // Close the menu on large screens
      }
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4" ref={headerRef}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">
            <img className="w-12 rounded-lg" src="/web_logo.jpg" alt="Logo" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="z-20 relative text-white text-3xl" />
            ) : (
              <FaBars className="z-20 relative text-white text-3xl" />
            )}
          </button>
        </div>

        {/* Mobile and Desktop Menu */}
        <ul
          className={`lg:flex lg:space-x-6 text-white absolute lg:relative lg:top-0 lg:left-0 bg-transparent p-4 lg:p-0 transition-all duration-300 ${
            isMobileMenuOpen
              ? "top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black" // Add background only for mobile
              : "top-[-100%] left-[-100%]"
          }`}
        >
          {headerData.map((menu, index) => (
            <li key={index} className="relative group">
              {/* Menu Item */}
              <div
                onClick={() => handleMenuToggle(index)}
                className="flex items-center cursor-pointer p-2 bg-red-700 hover:bg-red-800 rounded transition-colors"
              >
                {menu.title}
                {activeMenu === index ? (
                  <FaCaretUp className="ml-2" />
                ) : (
                  <FaCaretDown className="ml-2" />
                )}
              </div>

              {/* Submenu */}
              <div
                className={`z-20 ${
                  activeMenu === index ? "block" : "hidden"
                } ${
                  isMobileMenuOpen
                    ? "relative w-full" // Make submenu relative on mobile screens to stack vertically
                    : "absolute left-0"
                } bg-white text-black p-4 mt-2 rounded shadow-lg transition-all duration-300`}
                style={{
                  width: menu.title === "Blood Bank" ? "8rem" : "12rem", // Adjust width based on menu title
                }}
              >
                <ul>
                  {menu.subHeaders.map((item, idx) => (
                    <li key={idx} className="py-2">
                      <Link
                        to={item.link}
                        className="hover:text-red-600 hover:relative hover:translate-x-3 ease-in-out duration-150"
                        onClick={() => setActiveMenu(null)} // Close dropdown after clicking a link
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
