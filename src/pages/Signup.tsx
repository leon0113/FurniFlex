import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/userContext';
import Banner from '../components/Banner';
import BrandName from '../components/BrandName';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agree: false,
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState("");
    const { signup, loginWithGoogle } = useAuth(); // Use signup and loginWithGoogle from AuthContext
    const navigate = useNavigate();

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError(""); // Clear any previous errors

        try {
            await signup(formData.email, formData.password);
            navigate("/");
        } catch (err: any) {
            setError(err.message); // Set error message from Firebase
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Handle Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
            await loginWithGoogle();
            navigate("/home"); // Redirect after successful Google login
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className='flex flex-col md:flex-row justify-center items-center h-screen'>
            <div className="flex w-full md:w-1/2 justify-center items-center h-full bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mx-4 sm:mx-auto md:mx-0">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
                        Welcome To
                    </h2>
                    <BrandName className='text-gray-900 text-center' />
                    <p className="text-center text-gray-500 mb-6">Signup to purchase your desired products</p>

                    {error && <div className="text-red-500 mb-4">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <div className='flex flex-col sm:flex-row gap-2'>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name (optional)"
                                    className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name (optional)"
                                    className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                />
                            </div>
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
                                {passwordVisible ? '🙈' : '👁'}
                            </button>
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
                                <p> I agree to the <a href='#' className="underline underline-offset-2"> Terms & Policy</a></p>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black font-semibold text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Signup
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-3 text-gray-900">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 mb-6">
                        <button
                            className="flex text-sm font-semibold items-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                            onClick={handleGoogleSignIn}
                        >
                            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="mr-1" />
                            Sign in with Google
                        </button>
                        <button className="flex text-sm font-semibold items-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                            <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="Apple" className="mr-1" />
                            Sign in with Apple
                        </button>
                    </div>

                    <div className="text-center font-semibold">
                        <p>Have an account? <a href="/signin" className="text-blue-500">Sign In</a></p>
                    </div>
                </div>
            </div>
            <Banner className="hidden md:block w-full md:w-1/2 h-full" />
        </div>
    );
};

export default SignUp;
