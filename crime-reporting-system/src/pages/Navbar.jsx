import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the path as needed

const Navbar = ({ dashboardType }) => {
    const { user, logout } = useAuth(); // Destructure user and logout function

    return (
        <header className="flex justify-between items-center bg-gray-800 p-4">
            <div className="flex items-center">
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="h-12 w-12" />
                <h1 className="text-xl font-bold ml-4 text-yellow-300">Crime Reporting System</h1>
            </div>

            <nav className="flex items-center space-x-4">
                <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
                <Link to="/complain-file" className="text-white hover:text-yellow-300">Complain File</Link>
                <Link to="/news" className="text-white hover:text-yellow-300">News</Link>
                
                {/* Show Cases button only for Admin and Cop dashboards */}
                {(dashboardType === 'AdminDashboard' || dashboardType === 'CopDashboard') && (
                    <Link to="/cases" className="text-white hover:text-yellow-300">Cases</Link>
                )}

                <Link to="/about-us" className="text-white hover:text-yellow-300">About Us</Link>

                {/* Account management */}
                {user ? (
                    <div className="relative group">
                        <button className="text-white hover:text-yellow-300 focus:outline-none">{user.username}</button>
                        <div className="absolute right-0 hidden mt-2 bg-gray-800 rounded-lg shadow-lg group-hover:block">
                            <button onClick={logout} className="block px-4 py-2 text-white hover:bg-gray-700">Logout</button>
                        </div>
                    </div>
                ) : (
                    <div className="relative group">
                        <button className="text-white hover:text-yellow-300 focus:outline-none">Account</button>
                        <div className="absolute right-0 hidden mt-2 bg-gray-800 rounded-lg shadow-lg group-hover:block">
                            <Link to="/login" className="block px-4 py-2 text-white hover:bg-gray-700">Login</Link>
                            <Link to="/register" className="block px-4 py-2 text-white hover:bg-gray-700">Register</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
