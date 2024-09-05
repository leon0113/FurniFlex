/* eslint-disable @typescript-eslint/no-explicit-any */
// src/SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agree: false,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                    Welcome To <span className="text-blue-500">Furni</span><span className="text-black">Flex</span>
                </h2>
                <p className="text-center text-gray-600 mb-6">Signup for purchase your desired products</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First name (optional)"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last name (optional)"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4 relative">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                        <button type="button" className="absolute inset-y-0 right-0 px-4 py-2 text-gray-500">👁</button>
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center text-gray-600">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                                className="mr-2"
                                required
                            />
                            I agree to the <a href="#" className="text-blue-500">Terms & Policy</a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Signup
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-3 text-gray-500">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="flex justify-center space-x-4 mb-6">
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                        <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="mr-2" />
                        Sign in with Google
                    </button>
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                        <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="Apple" className="mr-2" />
                        Sign in with Apple
                    </button>
                </div>

                <div className="text-center">
                    <p>Have an account? <a href="#" className="text-blue-500">Sign In</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
