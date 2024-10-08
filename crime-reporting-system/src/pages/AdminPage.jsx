import React from 'react';
import { Link } from 'react-router-dom';
import './RolePage.css'; // Import custom CSS file for styling

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
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
        <h2 className="text-3xl font-bold mb-4">Welcome, Admin!</h2>
        <p className="mb-4">This is the admin dashboard. Here you can manage users and oversee the crime reporting system.</p>
        <Link to="/manage-users" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Manage Users</Link>
      </main>
    </div>
  );
};

export default AdminPage;
