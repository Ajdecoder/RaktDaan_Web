import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretUp } from "react-icons/fa"; // Importing FontAwesome icon for the down arrow
import { headerData } from "./data/data";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null); // Ref to detect clicks outside of the menu

  // Handle the click outside to close the active menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null); // Close any open menu if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index); // Toggle menu
  };

  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">
            <img className="w-12 rounded-lg" src="/web_logo.jpg" alt="Logo" />
          </Link>
        </div>

        <ul className="flex space-x-6 text-white" ref={menuRef}>
          {headerData.map((menu, index) => (
            <li key={index} className="relative group">
              {/* Menu Item */}
              <div
                onClick={() => handleMenuToggle(index)} // Toggle based on index
                className="flex items-center cursor-pointer p-2 bg-red-700 hover:bg-red-800 rounded transition-colors"
              >
                {menu.title}
                {activeMenu ? <FaCaretDown className="ml-2" /> : <FaCaretUp />}
              </div>

              {/* Submenu */}
              <div
                className={`z-20 absolute left-0 bg-white text-black p-4 mt-2 rounded shadow-lg ${
                  menu.title == "Blood Bank" ? "w-[8rem]" : "w-max"
                } transition-all duration-300 ${
                  activeMenu === index ? "block" : "hidden"
                }`}
              >
                <ul>
                  {menu.subHeaders.map((item, idx) => (
                    <li key={idx} className="py-2">
                      <Link to={item.link} className="hover:underline">
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
