import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const crimeTypes = [
  'Theft', 'Assault', 'Fraud', 'Vandalism', 'Cybercrime', 'Kidnapping', 'Other'
];

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
  'Uttarakhand', 'West Bengal'
];

const generateIncidentId = () => {
  return `INC-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

const ComplainFile = () => {
  const [crimeType, setCrimeType] = useState('');
  const [victimDetails, setVictimDetails] = useState({
    name: '',
    age: '',
    gender: '',
    state: '',
    description: ''
  });

  const handleCrimeTypeChange = (e) => setCrimeType(e.target.value);
  const handleVictimDetailsChange = (e) => {
    const { name, value } = e.target;
    setVictimDetails({ ...victimDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComplaint = {
      id: generateIncidentId(),
      ...victimDetails,
      crimeType,
      date: new Date().toLocaleString()
    };

    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    storedComplaints.push(newComplaint);
    localStorage.setItem('complaints', JSON.stringify(storedComplaints));

    alert(`Complaint submitted successfully! Your incident ID is: ${newComplaint.id}`);
    
    setCrimeType('');
    setVictimDetails({
      name: '',
      age: '',
      gender: '',
      state: '',
      description: ''
    });
  };

  return (
    <div className="bg-gradient-to-br from-teal-300 to-blue-500 min-h-screen">
      {/* Section 1: ॐ श्री गणेशाय नमः Running with Ganpati Images */}
      <div className="relative overflow-hidden w-full max-w-[1200px] mx-auto px-4 py-5">
        <div className="flex items-center sliding-container">
          <img src={`${process.env.PUBLIC_URL}/images/Ganpati.png`} alt="Ganpati" className="h-[60px] w-[60px] max-h-[80px] max-w-[80px]" />
          <div className="sliding-text text-xl font-bold text-yellow-300 whitespace-nowrap mx-4">
            ॐ श्री गणेशाय नमः ॐ श्री गणेशाय नमः ॐ श्री गणेशाय नमः ॐ श्री गणेशाय नमः ॐ श्री गणेशाय नमः
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/Ganpati.png`} alt="Ganpati" className="h-[60px] w-[60px] max-h-[80px] max-w-[80px]" />
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

      {/* Main Form Section */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 md:p-12 mt-6 mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-6">Report a Crime</h1>
        <form onSubmit={handleSubmit}>
          {/* Crime Type Dropdown */}
          <div className="mb-6">
            <label htmlFor="crimeType" className="block text-gray-800 text-lg font-semibold mb-2">Crime Type</label>
            <select
              id="crimeType"
              value={crimeType}
              onChange={handleCrimeTypeChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select a crime type</option>
              {crimeTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* Victim Details */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 text-lg font-semibold mb-2">Victim Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={victimDetails.name}
              onChange={handleVictimDetailsChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="age" className="block text-gray-800 text-lg font-semibold mb-2">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={victimDetails.age}
              onChange={handleVictimDetailsChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="gender" className="block text-gray-800 text-lg font-semibold mb-2">Gender</label>
            <select
              id="gender"
              name="gender"
              value={victimDetails.gender}
              onChange={handleVictimDetailsChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="state" className="block text-gray-800 text-lg font-semibold mb-2">State</label>
            <select
              id="state"
              name="state"
              value={victimDetails.state}
              onChange={handleVictimDetailsChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-800 text-lg font-semibold mb-2">Incident Description</label>
            <textarea
              id="description"
              name="description"
              value={victimDetails.description}
              onChange={handleVictimDetailsChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplainFile;
