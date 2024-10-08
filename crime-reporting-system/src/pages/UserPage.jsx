import React from 'react';
import { Link } from 'react-router-dom';
import './RolePage.css'; // Import custom CSS file for styling

const UserPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <nav>
            <Link to="/" className="mr-4 hover:underline">Home</Link>
            <Link to="/about" className="mr-4 hover:underline">About Us</Link>
            <Link to="/news" className="mr-4 hover:underline">News</Link>
            <Link to="/complain" className="mr-4 hover:underline">Complain</Link>
            <Link to="/login" className="mr-4 hover:underline">Logout</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Welcome, User!</h2>
        <p className="mb-4">This is the user dashboard. Here you can view your personal information and manage your account.</p>
        <Link to="/profile" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Profile</Link>
      </main>
    </div>
  );
};

export default UserPage;
