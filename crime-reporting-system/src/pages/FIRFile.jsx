import React, { useState, useEffect } from 'react';

const FIRFile = () => {
  const [firDetails, setFIRDetails] = useState({
    caseId: '',
    complainantName: '',
    accusedName: '',
    crimeType: '',
    firDate: '',
    details: ''
  });

  const [firs, setFIRs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const savedFIRs = JSON.parse(localStorage.getItem('firs')) || [];
    setFIRs(savedFIRs);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFIRDetails({
      ...firDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingFIRs = JSON.parse(localStorage.getItem('firs')) || [];
    let updatedFIRs;

    if (editId) {
      // Update existing FIR
      updatedFIRs = existingFIRs.map(fir =>
        fir.id === editId ? { ...firDetails, id: editId } : fir
      );
      setEditId(null); // Exit edit mode
    } else {
      // Add new FIR
      updatedFIRs = [...existingFIRs, { ...firDetails, id: Date.now() }];
    }

    localStorage.setItem('firs', JSON.stringify(updatedFIRs));
    setFIRs(updatedFIRs);
    setFIRDetails({
      caseId: '',
      complainantName: '',
      accusedName: '',
      crimeType: '',
      firDate: '',
      details: ''
    });
    alert(editId ? 'FIR updated successfully!' : 'FIR filed successfully!');
  };

  const handleDelete = (id) => {
    const updatedFIRs = firs.filter(fir => fir.id !== id);
    localStorage.setItem('firs', JSON.stringify(updatedFIRs));
    setFIRs(updatedFIRs);
  };

  const handleEdit = (id) => {
    const firToEdit = firs.find(fir => fir.id === id);
    setFIRDetails(firToEdit);
    setEditId(id); // Set the ID of the FIR being edited
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFIRs = firs.filter(fir =>
    fir.caseId.includes(searchTerm) || fir.complainantName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          {editId ? 'Edit FIR' : 'File FIR'}
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Case ID</label>
            <input
              type="text"
              name="caseId"
              value={firDetails.caseId}
              onChange={handleInputChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Complainant Name</label>
            <input
              type="text"
              name="complainantName"
              value={firDetails.complainantName}
              onChange={handleInputChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Accused Name</label>
            <input
              type="text"
              name="accusedName"
              value={firDetails.accusedName}
              onChange={handleInputChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Crime Type</label>
            <input
              type="text"
              name="crimeType"
              value={firDetails.crimeType}
              onChange={handleInputChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">FIR Date</label>
            <input
              type="date"
              name="firDate"
              value={firDetails.firDate}
              onChange={handleInputChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Incident Details</label>
            <textarea
              name="details"
              value={firDetails.details}
              onChange={handleInputChange}
              rows="4"
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            {editId ? 'Update FIR' : 'File FIR'}
          </button>
        </form>

        {/* Search and Display FIRs */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search by Case ID or Complainant Name"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">S.No</th>
                <th className="border border-gray-300 p-2">Case ID</th>
                <th className="border border-gray-300 p-2">Complainant Name</th>
                <th className="border border-gray-300 p-2">Accused Name</th>
                <th className="border border-gray-300 p-2">Crime Type</th>
                <th className="border border-gray-300 p-2">FIR Date</th>
                <th className="border border-gray-300 p-2">Incident Details</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFIRs.map((fir, index) => (
                <tr key={fir.id}>
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{fir.caseId}</td>
                  <td className="border border-gray-300 p-2">{fir.complainantName}</td>
                  <td className="border border-gray-300 p-2">{fir.accusedName}</td>
                  <td className="border border-gray-300 p-2">{fir.crimeType}</td>
                  <td className="border border-gray-300 p-2">{fir.firDate}</td>
                  <td className="border border-gray-300 p-2">{fir.details}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(fir.id)}
                      className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(fir.id)}
                      className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FIRFile;
