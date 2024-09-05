import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white py-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold text-blue-500">Furni<span className="text-black">Flex</span></div>
                <ul className="flex space-x-8 text-gray-700">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Categories</li>
                    {/* <li>Custom</li> */}
                    <li>Blog</li>
                </ul>
                <div className="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/30" alt="User Avatar" className="rounded-full" />
                    <img src="https://via.placeholder.com/30" alt="Cart Icon" className="w-6 h-6" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;