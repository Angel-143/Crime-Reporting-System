// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = async (username, password, role) => {
        try {
            const response = await axios.post('http://localhost:5000/users', { username, password, role });
            setUser(response.data); // Assuming the response has user data
            return true; // Registration successful
        } catch (error) {
            console.error("Registration error:", error);
            return false; // Registration failed
        }
    };

    const login = async (username, password) => {
        try {
            const response = await axios.get('http://localhost:5000/users', {
                params: { username, password },
            });
            if (response.data.length > 0) {
                setUser(response.data[0]); // Set the user state, which should include role
                return response.data[0]; // Return user data for redirection
            }
            return null; // Login failed
        } catch (error) {
            console.error("Login error:", error);
            return null; // Login failed
        }
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        register,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
