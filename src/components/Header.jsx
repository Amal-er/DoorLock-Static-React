import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#be9662] text-white text-xs py-2 px-4 md:px-28 flex justify-center items-center md:h-10 ">
        <div className="w-full md:flex justify-between items-center h-5">
          <div className="text-center md:text-left w-full md:w-auto">
            3 Free Samples With Any Purchase
          </div>
          <div className="hidden md:flex space-x-4 gap-5">
            <div>Order Bohimia</div>
            <div>Gift Certificates</div>
            <div
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="cursor-pointer"
            >
              Sign In
            </div>
            <div>US Dollar</div>
          </div>
        </div>
      </div>
      <header className="bg-white text-black shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <Link to="/">
            <div className="text-2xl font-bold">Bohimia</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/services"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Service
            </a>
            <a
              href="/products"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Products
            </a>
            <a
              href="/contact"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ease-in-out ${isOpen ? "block" : "hidden"}`}>
          <a
            href="/"
            className="block py-2 px-4 hover:bg-blue-500 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/about"
            className="block py-2 px-4 hover:bg-blue-500 transition-colors duration-300"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="/services"
            className="block py-2 px-4 hover:bg-blue-500 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Service
          </a>
          <a
            href="/products"
            className="block py-2 px-4 hover:bg-blue-500 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Products
          </a>
          <a
            href="/contact"
            className="block py-2 px-4 hover:bg-blue-500 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
