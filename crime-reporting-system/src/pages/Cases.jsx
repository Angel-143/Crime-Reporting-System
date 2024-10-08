import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const Cases = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    setComplaints(storedComplaints);
  }, []);

  // Function to handle deletion of a case
  const handleDelete = (id) => {
    const updatedComplaints = complaints.filter(complaint => complaint.id !== id);
    setComplaints(updatedComplaints);
    localStorage.setItem('complaints', JSON.stringify(updatedComplaints));
  };

  // Navigation to FIR File page
  const goToFIRFile = () => {
    navigate('/fir-file');
  };

  // Navigation to Charge Sheet page
  const goToChargeSheet = () => {
    navigate('/charge-sheet');
  };

  return (
    
    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 min-h-screen p-6">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-center text-purple-800">Crime Cases</h1>
          {/* Buttons for FIR and Charge Sheet */}
          <div className="flex space-x-4">
            <button
              onClick={goToFIRFile}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              File FIR
            </button>
            <button
              onClick={goToChargeSheet}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              File Charge Sheet
            </button>
          </div>
        </div>

        {complaints.length === 0 ? (
          <p className="text-center text-lg text-gray-700">No cases available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complaints.map((complaint, index) => (
              <div
                key={complaint.id}
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white p-4 rounded-lg shadow-md relative"
              >
                <h2 className="text-xl font-bold mb-2">Case {index + 1}: {complaint.crimeType}</h2>
                <p><strong>Victim:</strong> {complaint.name} ({complaint.age}, {complaint.gender})</p>
                <p><strong>State:</strong> {complaint.state}</p>
                <p><strong>Incident Description:</strong> {complaint.description}</p>
                <p className="mt-4"><strong>Submitted on:</strong> {complaint.date}</p>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(complaint.id)}
                  className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                >
                  Delete Case
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cases;
