import { useState } from 'react';
import Banner from '../components/Banner';
import BrandName from '../components/BrandName';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        agree: false,
    });

    const [passwordVisible, setPasswordVisible] = useState(false);

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

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-screen">
            <div className="flex w-full md:w-1/2 justify-center items-center h-full bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mx-4 sm:mx-auto md:mx-0">
                    <h2 className="text-4xl font-bold text-gray-800 mb-1">
                        Welcome Back!
                    </h2>
                    <p className="text-gray-500 mb-6">Enter your credentials to access your account</p>

                    <form onSubmit={handleSubmit}>
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

                        <div className="mb-0 relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-4 py-2 text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? '🙈' : '👁'} {/* Toggle icon */}
                            </button>
                        </div>
                        <a href="#" className="mb-4 text-blue-500 flex justify-end">
                            Forget Password?
                        </a>

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
                                <p>I agree to the <a href="#" className="underline underline-offset-2">Terms & Policy</a></p>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black font-semibold text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Signin
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-3 text-gray-900">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-6">
                        <button className="flex text-sm font-semibold items-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="mr-1" />
                            Sign in with Google
                        </button>
                        <button className="flex text-sm font-semibold items-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                            <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="Apple" className="mr-1" />
                            Sign in with Apple
                        </button>
                    </div>

                    <div className="text-center font-semibold">
                        <p>Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a></p>
                    </div>
                </div>
            </div>
            <Banner className="hidden md:block w-full md:w-1/2 h-full" />
        </div>
    );
};

export default SignIn;
