import React from 'react';
import ProductCard from './ProductCard';


const ProductListing: React.FC = () => {
    const products = [
        {
            title: 'Recliner Chair Wood',
            price: '€350.00',
            discountPrice: '€299.00',
            description: 'It has a backrest that can be tilted back, and often a footrest extended.',
            imageUrl: 'https://via.placeholder.com/150',  // Use a placeholder image here
        },
        {
            title: 'Timber Ride Padded',
            price: '€76.00',
            discountPrice: '€59.00',
            description: 'High Back Rocking Slide Pocket Folding Outdoor Camping Chairs',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Colored Wooden Chair',
            price: '€350.00',
            discountPrice: '€299.00',
            description: 'It has a backrest that can be tilted back, and often a footrest extended.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Blank Bamboo Wicker',
            price: '€350.00',
            discountPrice: '€299.00',
            description: 'Lightweight, easy to clean, sturdy, safe and stable. Non-slip legs.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Isolated Wooden Rock',
            price: '€400.00',
            discountPrice: '€165.00',
            description: 'It has a backrest that can be tilted back, and often a footrest extended.',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            title: 'Minimal Empty Rocking',
            price: '€350.00',
            discountPrice: '€299.00',
            description: 'A seat, especially for one person, usually having four legs for support.',
            imageUrl: 'https://via.placeholder.com/150',
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 bg-red-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <ProductCard
                    title="Blank Bamboo Wicker"
                    originalPrice="€350.00"
                    discountedPrice="€299.00"
                    discount="30%"
                    description="Lightweight, easy to clean, sturdy, safe and stable. Non-slip legs."
                    imageUrl="https://via.placeholder.com/150"  // Replace this with the actual image URL
                />

            </div>
            <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm dark:bg-gray-100 dark:text-gray-800">
                <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-300">
                    <span className="sr-only">Previous</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </button>
                <button type="button" aria-current="page" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-600 dark:text-gray-50 dark:border-gray-300">1</button>
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">2</button>
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">3</button>
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">...</button>
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">7</button>
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">8</button>
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border dark:border-gray-300">9</button>
                <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-300">
                    <span className="sr-only">Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </nav>
        </div>
    );
};

export default ProductListing;
