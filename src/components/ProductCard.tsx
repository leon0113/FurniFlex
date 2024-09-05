import React from 'react';

interface ProductCardProps {
    title: string;
    originalPrice: string;
    discountedPrice: string;
    discount: string;
    description: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    originalPrice,
    discountedPrice,
    discount,
    description,
    imageUrl
}) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-xs">
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden mb-4">
                <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
            </div>

            {/* Product Title */}
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

            {/* Pricing */}
            <div className="flex items-center space-x-2 mt-2">
                <span className="text-gray-500 line-through">{originalPrice}</span>
                <span className="text-black font-bold">{discountedPrice}</span>
                <span className="text-red-500 text-sm font-semibold">{discount} OFF</span>
            </div>

            {/* Product Description */}
            <p className="text-sm text-gray-600 mt-2">{description}</p>

            {/* Add to Cart Button */}
            <button className="flex items-center justify-center w-full mt-4 py-2 bg-black text-white rounded-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M17 13l1.6 8M10 21h4"></path>
                </svg>
                Add to cart
            </button>
        </div>
    );
};

export default ProductCard;
