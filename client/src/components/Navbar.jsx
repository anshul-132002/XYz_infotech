import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/createContext";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu

function Navbar() {
  const { theme, handleToggle, isLoggedIn } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`flex items-center justify-between p-5 shadow-lg 
       ${theme === "dark" ? "bg-black  border-b-1 border-white " : "bg-white"}
    `}
    >
      {/* Logo */}
      <div
        className={`text-2xl font-bold ml-5 md:ml-10 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <Link to="/">XYZ Infotech</Link>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FiX size={28} className="text-red-500" />
          ) : (
            <FiMenu size={28} className="text-gray-500" />
          )}
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex flex-col md:flex-row md:items-center gap-5 text-center transition-all duration-300 ease-in ${
          menuOpen ? "block " : "hidden md:flex"
        }`}
      >
        <ul
          className={`flex flex-col md:flex-row gap-5 justify-center items-center font-medium ${
            theme === "dark" ? "text-white  inset-0 backdrop-blur-3xl backdrop-brightness-70 bg-opacity-30 " : "text-black  inset-0 backdrop-blur-3xl"
          }`}
        >
          <li>
            <Link to="/" className="hover:underline focus:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline focus:text-red-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline focus:text-red-600">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:underline focus:text-red-600">
              Services
            </Link>
          </li>

          {/* Authentication Links */}
          {isLoggedIn ? (
            <li>
              <Link to="/logout" className="btn-primary">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" className="btn-primary">
                  Login
                </Link>
              </li>
              <li
                className={`btn-outline ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                <Link to="/register">Register</Link>
              </li>
            </>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={handleToggle}
            className="size-6 animate-pulse mt-2 md:mt-0"
          >
            {theme === "light" ? "🔆" : "🌙"}
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
