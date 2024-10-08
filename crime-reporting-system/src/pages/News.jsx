import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './News.css'; // For additional custom styles

const newsItems = [
  {
    id: 1,
    title: 'Major Crime Wave Hits Downtown',
    description: 'A recent surge in criminal activities has raised concerns among residents. Local authorities are taking immediate actions to curb the spike.',
    date: 'September 10, 2024'
  },
  {
    id: 2,
    title: 'New Crime Reporting App Launched',
    description: 'The new app aims to streamline crime reporting and ensure quicker responses from law enforcement agencies.',
    date: 'September 8, 2024'
  },
  {
    id: 3,
    title: 'Police Crack Down on Illegal Activities',
    description: 'In a recent operation, police have arrested multiple suspects involved in organized crime rings.',
    date: 'September 6, 2024'
  },
  {
    id: 4,
    title: 'Community Meeting on Crime Prevention',
    description: 'A community meeting is scheduled to discuss strategies for improving neighborhood safety and preventing crime.',
    date: 'September 4, 2024'
  }
];

const News = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="flex justify-between items-center bg-gray-800 p-4 text-white">
        <div className="flex items-center">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="h-12 w-12" />
          <h1 className="text-xl font-bold ml-4 text-yellow-300">Crime Reporting System</h1>
        </div>

        <nav className="flex items-center space-x-4">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/complain-file" className="hover:text-yellow-300">Complain File</Link>
          <Link to="/news" className="text-yellow-300">News</Link>
          <Link to="/cases" className="hover:text-yellow-300">Cases</Link>
          <Link to="/about-us" className="hover:text-yellow-300">About Us</Link>

          <div className="relative group">
            <button className="hover:text-yellow-300">Account</button>
            <div className="absolute right-0 hidden mt-2 bg-gray-800 rounded-lg shadow-lg group-hover:block">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-700">Login</Link>
              <Link to="/register" className="block px-4 py-2 hover:bg-gray-700">Register</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* News Section */}
      <section className="bg-blue-100 py-8 px-4">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-8">Latest Crime News</h2>
        <div className="w-full max-w-4xl mx-auto space-y-6">
          {newsItems.map(item => (
            <div
              key={item.id}
              className="news-item bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-700 mb-3">{item.description}</p>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="key-features bg-yellow-300 py-12">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="feature-card bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-[300px] mx-auto">
              <h3 className="text-xl font-semibold mb-2">Real-Time Reporting</h3>
              <p>Instantly report crimes and receive real-time updates on ongoing investigations.</p>
            </div>
            <div className="feature-card bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-[300px] mx-auto">
              <h3 className="text-xl font-semibold mb-2">Secure Data</h3>
              <p>All data is securely stored and protected with state-of-the-art encryption.</p>
            </div>
            <div className="feature-card bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-[300px] mx-auto">
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p>Connect with community support groups and stay informed about local issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p>&copy; 2024 Crime Reporting System. All rights reserved.</p>
          <div className="mt-4">
            <Link to="/about-us" className="text-yellow-300 hover:underline">About Us</Link> | 
            <Link to="/contact-us" className="text-yellow-300 hover:underline"> Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
