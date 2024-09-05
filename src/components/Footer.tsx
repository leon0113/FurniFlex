import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold">FurniFlex</h3>
                    <p className="mt-2">High quality furniture to bring your home to life.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Explore</h4>
                    <ul>
                        <li>Products</li>
                        <li>Categories</li>
                        <li>Custom Furniture</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Contact Us</h4>
                    <p>Email: support@furniflex.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
