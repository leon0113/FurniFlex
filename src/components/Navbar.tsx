import { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Icons for hamburger menu

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for controlling the mobile menu

    return (
        <header className="p-4 w-full border-b dark:text-gray-800">
            <div className="container flex justify-between items-center mx-auto">
                {/* Logo Section */}
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 gap-1">
                    <img src='/icon.png' className='w-10 h-10' alt="FurniFlex Logo" />
                    <h1 className="text-lg font-bold tracking-wide leading-10">
                        Furni<span className='text-blue-500'>Flex</span>
                    </h1>
                </a>

                {/* Main Navigation */}
                <ul className={`items-center flex-shrink-0 hidden lg:flex`}>
                    <li><a href="#" className="self-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">Home</a></li>
                    <li><a href="#" className="self-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">Products</a></li>
                    <li><a href="#" className="self-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">Categories</a></li>
                    <li><a href="#" className="self-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">Custom</a></li>
                    <li><a href="#" className="self-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">Blog</a></li>
                </ul>

                {/* Cart and Profile Section */}
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <div className="relative">
                        <button className="px-4 py-0 rounded">
                            <IoBagOutline className="w-8 h-8" />
                        </button>
                        {/* Badge for the number of items */}
                        <span className="absolute -bottom-0 left-3/4 transform -translate-x-3/4 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                            3
                        </span>
                    </div>
                    <a href="#" className="px-4 py-0 font-semibold rounded">
                        <RxAvatar className="w-6 h-6" />
                    </a>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <HiX className="w-6 h-6" />
                    ) : (
                        <HiMenuAlt3 className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="flex flex-col items-center mt-4 space-y-2 lg:hidden">
                    <li><a href="#" className="self-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 w-full text-center">Home</a></li>
                    <li><a href="#" className="self-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 w-full text-center">Products</a></li>
                    <li><a href="#" className="self-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 w-full text-center">Categories</a></li>
                    <li><a href="#" className="self-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 w-full text-center">Custom</a></li>
                    <li><a href="#" className="self-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 w-full text-center">Blog</a></li>

                    {/* Cart and Profile in Mobile Menu */}
                    <div className="flex gap-6 items-center py-2">
                        <div className="relative">
                            <button className="px-4 py-0 rounded">
                                <IoBagOutline className="w-8 h-8" />
                            </button>
                            <span className="absolute -bottom-0 left-3/4 transform -translate-x-3/4 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                                3
                            </span>
                        </div>
                        <a href="#" className="px-4 py-0 font-semibold rounded">
                            <RxAvatar className="w-6 h-6" />
                        </a>
                    </div>
                </ul>
            )}
        </header>
    );
}
