import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

interface ProductCardProps {
    id: number,
    title: string;
    originalPrice: string;
    discountedPrice: string;
    discount: string;
    description: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    title,
    originalPrice,
    discountedPrice,
    discount,
    description,
    imageUrl
}) => {

    const { addToCart }: any = useContext(CartContext);

    return (
        <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-xs">
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden mb-4">
                <img src={imageUrl} alt={title} className="w-full h-72 object-cover object-center" />
            </div>

            {/* Product Title */}
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

            {/* Pricing */}
            <div className="flex items-center space-x-2 mt-2">
                <span className="text-black font-bold">{discountedPrice}</span>
                <span className="text-gray-500 line-through">{originalPrice}</span>
                <span className="text-red-500 text-sm font-semibold">{discount} OFF</span>
            </div>

            {/* Product Description */}
            <p className="text-sm text-gray-600 mt-2">{description}</p>

            {/* Add to Cart Button */}
            <button onClick={() => addToCart({
                id,
                title,
                originalPrice,
                discountedPrice,
                discount,
                description,
                imageUrl
            })} className="flex items-center justify-center w-full mt-4 py-2 bg-black text-white rounded-lg">

                Add to cart
            </button>
        </div>
    );
};

export default ProductCard;
