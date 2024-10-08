import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-10">
      
      {/* Section 1: ॐ श्री गणेशाय नमः Running with Ganpati Images */}
      <div className="relative overflow-hidden w-full max-w-[1200px] mx-auto px-4 py-5"> {/* Adjusted for max width and padding */}
        <div className="flex items-center sliding-container">
          <img src={`${process.env.PUBLIC_URL}/images/Ganpati.png`} alt="Ganpati" className="h-[60px] w-[60px] max-h-[80px] max-w-[80px]" /> {/* Picture before text */}
          <div className="sliding-text text-xl font-bold text-yellow-300 whitespace-nowrap mx-4"> {/* Reduced font size */}
            ॐ श्री गणेशाय नमः ॐ श्री गणेशाय नमः ॐ श्री गणेशाय नमः ॐ श्री गणेशाय नमः ॐ श्री गणेशाय नमः
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/Ganpati.png`} alt="Ganpati" className="h-[60px] w-[60px] max-h-[80px] max-w-[80px]" /> {/* Picture after text */}
        </div>
      </div>

      {/* Section 2: Header */}
      <header className="flex justify-between items-center bg-gray-800 p-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="h-12 w-12" />
          <h1 className="text-xl font-bold ml-4 text-yellow-300">Crime Reporting System</h1>
        </div>

        {/* Navigation buttons on the right */}
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
          <Link to="/complain-file" className="text-white hover:text-yellow-300">Complain File</Link>
          <Link to="/news" className="text-white hover:text-yellow-300">News</Link>
          <Link to="/cases" className="text-white hover:text-yellow-300">Cases</Link>
          <Link to="/about-us" className="text-white hover:text-yellow-300">About Us</Link>

          {/* Account Dropdown */}
          <div className="relative group">
            <button className="text-white hover:text-yellow-300 focus:outline-none">Account</button>
            <div className="absolute right-0 hidden mt-2 bg-gray-800 rounded-lg shadow-lg group-hover:block">
              <Link to="/login" className="block px-4 py-2 text-white hover:bg-gray-700">Login</Link>
              <Link to="/register" className="block px-4 py-2 text-white hover:bg-gray-700">Register</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-yellow-300 mb-6">About Crime Reporting System</h1>

        {/* Intro Section */}
        <p className="text-xl text-center mb-10">
          Welcome to the <span className="text-yellow-300">Crime Reporting System</span>, your trusted platform for reporting and tracking crimes. We strive to ensure safety, transparency, and timely action for all cases filed through our system.
        </p>

        {/* Section with Email and Contact */}
        <div className="flex justify-center items-center flex-col space-y-4 mb-10">
          <div className="bg-gray-900 bg-opacity-70 rounded-lg shadow-lg p-4 w-80">
            <h2 className="text-2xl font-semibold text-yellow-300 text-center mb-2">Contact Information</h2>
            <p className="text-lg text-center">
              <span className="font-semibold">Email: </span>
              <a href="mailto:info@crimereporting.in" className="text-blue-200 hover:text-yellow-300">info@crimereporting.in</a>
            </p>
            <p className="text-lg text-center mt-2">
              <span className="font-semibold">Phone: </span>
              <a href="tel:+919801959953" className="text-blue-200 hover:text-yellow-300">9801959953</a>
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="flex flex-wrap justify-around space-y-6 lg:space-y-0 mb-10">
          {/* Value 1 */}
          <div className="bg-purple-800 bg-opacity-80 rounded-xl p-6 shadow-md w-80">
            <h3 className="text-xl font-bold text-center text-yellow-200">Transparency</h3>
            <p className="text-center mt-2">
              Our system is designed to ensure that every case can be tracked with full transparency, from the time it's filed to the final resolution.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-pink-800 bg-opacity-80 rounded-xl p-6 shadow-md w-80">
            <h3 className="text-xl font-bold text-center text-yellow-200">Safety</h3>
            <p className="text-center mt-2">
              We prioritize safety by ensuring that all reports are securely stored and accessible only by authorized personnel.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-blue-800 bg-opacity-80 rounded-xl p-6 shadow-md w-80">
            <h3 className="text-xl font-bold text-center text-yellow-200">Timely Action</h3>
            <p className="text-center mt-2">
              We work hand-in-hand with law enforcement agencies to guarantee that every report leads to prompt investigation and action.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="text-center">
          <p className="text-lg">Thank you for trusting the <span className="text-yellow-300">Crime Reporting System</span> to make our community a safer place.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
