import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white text-black shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-2 px-4 max-w-[1200px]">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="h-[80px] w-[80px]" />
            <span className="ml-2 text-xl font-bold text-blue-700">Crime Reporting System</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm items-center">
            <Link to="/" className="hover:text-purple-700">Home</Link>
            <Link to="/about-us" className="hover:text-purple-700">About Us</Link>
            <Link to="/complain-file" className="hover:text-purple-700">Complain File</Link>
            <Link to="/news" className="hover:text-purple-700">News</Link>
          </nav>

          {/* Account Button with Dropdown */}
          <div className="relative">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
              Account
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-md shadow-lg hidden group-hover:block">
              <Link to="/login" className="block px-3 py-1 hover:bg-blue-600 hover:text-white text-sm">Login</Link>
              <Link to="/register" className="block px-3 py-1 hover:bg-blue-600 hover:text-white text-sm">Register</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
