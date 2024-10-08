import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HomeStyles.css'; // Import new CSS file

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
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

            {/* Section 3: Middle Content */}
            <main className="my-12">
                {/* Section 1: Welcome Banner */}
                <section className="welcome-banner bg-gradient-to-r from-green-400 to-blue-500 text-white py-12">
                    <div className="max-w-[1200px] mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Welcome to the Crime Reporting System</h2>
                        <p className="text-lg">Your safety is our priority. Report crimes and stay informed with real-time updates.</p>
                        <img src={`${process.env.PUBLIC_URL}/images/welcome-banner.jpg`} alt="Welcome" className="w-full max-w-[800px] mx-auto mt-6" />
                    </div>
                </section>

                {/* Section 2: Key Features */}
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

                {/* Section 3: Sliding Content */}
                <section className="sliding-content bg-gray-800 text-white py-12">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-6">Featured Cases</h2>
                        <div className="overflow-hidden">
                            <div className="flex sliding-container">
                                <div className="slide px-4">
                                    <img src={`${process.env.PUBLIC_URL}/images/featured-case1.jpg`} alt="Case 1" className="w-full max-w-[300px] mx-auto" />
                                    <h3 className="text-xl font-semibold mt-2">Case 1</h3>
                                </div>
                                <div className="slide px-4">
                                    <img src={`${process.env.PUBLIC_URL}/images/featured-case2.jpg`} alt="Case 2" className="w-full max-w-[300px] mx-auto" />
                                    <h3 className="text-xl font-semibold mt-2">Case 2</h3>
                                </div>
                                <div className="slide px-4">
                                    <img src={`${process.env.PUBLIC_URL}/images/featured-case3.jpg`} alt="Case 3" className="w-full max-w-[300px] mx-auto" />
                                    <h3 className="text-xl font-semibold mt-2">Case 3</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="footer bg-gray-900 text-white py-6">
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

export default Home;
