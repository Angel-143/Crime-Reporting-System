import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs'; 
import News from './pages/News'; 
import ComplainFile from './pages/ComplainFile'; 
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import Cases from './pages/Cases';  
import FIRFile from './pages/FIRFile';
import ChargeSheet from './pages/ChargeSheet';
import { AuthProvider } from './context/AuthContext'; // Ensure the path is correct
import Navbar from './pages/Navbar';
import UserDashboard from './pages/UserDashboard';
import CopDashboard from './pages/CopDashboard';
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/complain-file" element={<ComplainFile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/fir-file" element={<FIRFile />} />
          <Route path="/charge-sheet" element={<ChargeSheet />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/CopDashboard" element={<CopDashboard/>}/>

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
