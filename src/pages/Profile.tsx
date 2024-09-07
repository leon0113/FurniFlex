import React, { useContext } from 'react';
import { useAuth } from '../context/userContext'; // Assuming you have an auth context

export default function Profile() {
    const { currentUser, logout } = useAuth(); // Fetch the user details and logout function
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                <div className="mb-6">
                    <p className="text-gray-700 text-lg">Email:</p>
                    <p className="font-medium text-lg text-gray-900">{currentUser?.email}</p>
                </div>
                <a href="/">
                    <button
                        onClick={logout}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Logout
                    </button>
                </a>
            </div>
        </div>
    );
}
