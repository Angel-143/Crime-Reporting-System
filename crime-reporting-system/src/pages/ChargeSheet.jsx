import React, { useState, useEffect } from 'react';

const ChargeSheet = () => {
  const [chargeSheetDetails, setChargeSheetDetails] = useState({
    caseId: '',
    accusedName: '',
    chargeDetails: '',
    evidenceSummary: '',
    submissionDate: '',
  });

  const [chargeSheets, setChargeSheets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editId, setEditId] = useState(null); // Track the ID of the charge sheet being edited

  useEffect(() => {
    const savedChargeSheets = JSON.parse(localStorage.getItem('chargeSheets')) || [];
    setChargeSheets(savedChargeSheets);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChargeSheetDetails({
      ...chargeSheetDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      // Update existing charge sheet
      const updatedChargeSheets = chargeSheets.map(sheet =>
        sheet.id === editId ? { ...chargeSheetDetails, id: editId } : sheet
      );
      localStorage.setItem('chargeSheets', JSON.stringify(updatedChargeSheets));
      setChargeSheets(updatedChargeSheets);
      setEditId(null); // Exit edit mode
      alert('Charge sheet updated successfully!');
    } else {
      // Add new charge sheet
      const updatedChargeSheets = [...chargeSheets, { ...chargeSheetDetails, id: Date.now() }];
      localStorage.setItem('chargeSheets', JSON.stringify(updatedChargeSheets));
      setChargeSheets(updatedChargeSheets);
      alert('Charge sheet filed successfully!');
    }
    setChargeSheetDetails({
      caseId: '',
      accusedName: '',
      chargeDetails: '',
      evidenceSummary: '',
      submissionDate: ''
    });
  };

  const handleDelete = (id) => {
    const updatedChargeSheets = chargeSheets.filter(sheet => sheet.id !== id);
    localStorage.setItem('chargeSheets', JSON.stringify(updatedChargeSheets));
    setChargeSheets(updatedChargeSheets);
  };

  const handleEdit = (id) => {
    const sheetToEdit = chargeSheets.find(sheet => sheet.id === id);
    setChargeSheetDetails(sheetToEdit);
    setEditId(id); // Set the ID of the charge sheet being edited
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredChargeSheets = chargeSheets.filter(sheet =>
    sheet.caseId.includes(searchTerm) || sheet.accusedName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-green-500 to-teal-600 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          {editId ? 'Edit Charge Sheet' : 'File Charge Sheet'}
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Case ID</label>
            <input
              type="text"
              name="caseId"
              value={chargeSheetDetails.caseId}
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
              value={chargeSheetDetails.accusedName}
              onChange={handleInputChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Charge Details</label>
            <textarea
              name="chargeDetails"
              value={chargeSheetDetails.chargeDetails}
              onChange={handleInputChange}
              rows="4"
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Evidence Summary</label>
            <textarea
              name="evidenceSummary"
              value={chargeSheetDetails.evidenceSummary}
              onChange={handleInputChange}
              rows="4"
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Submission Date</label>
            <input
              type="date"
              name="submissionDate"
              value={chargeSheetDetails.submissionDate}
              onChange={handleInputChange}
              className="block w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700"
          >
            {editId ? 'Update Charge Sheet' : 'File Charge Sheet'}
          </button>
        </form>

        {/* Search and Display Charge Sheets */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search by Case ID or Accused Name"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">S.No</th>
                <th className="border border-gray-300 p-2">Case ID</th>
                <th className="border border-gray-300 p-2">Accused Name</th>
                <th className="border border-gray-300 p-2">Charge Details</th>
                <th className="border border-gray-300 p-2">Evidence Summary</th>
                <th className="border border-gray-300 p-2">Submission Date</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredChargeSheets.map((sheet, index) => (
                <tr key={sheet.id}>
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{sheet.caseId}</td>
                  <td className="border border-gray-300 p-2">{sheet.accusedName}</td>
                  <td className="border border-gray-300 p-2">{sheet.chargeDetails}</td>
                  <td className="border border-gray-300 p-2">{sheet.evidenceSummary}</td>
                  <td className="border border-gray-300 p-2">{sheet.submissionDate}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(sheet.id)}
                      className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(sheet.id)}
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

export default ChargeSheet;
