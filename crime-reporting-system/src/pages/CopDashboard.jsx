import React from 'react';
import Navbar from '../pages/Navbar'; // Make sure the path is correct
import Home from '../pages/Home'; // Import the Home component

const CopDashboard = () => {
    return (
        <div>
            <Navbar dashboardType="CopDashboard" />
            
            {/* Render Home content */}
            <Home /> 

            {/* Additional content for Cop dashboard */}
            <h2>Welcome to the Cop Dashboard</h2>
        </div>
    );
};

export default CopDashboard; // Ensure you export the component
