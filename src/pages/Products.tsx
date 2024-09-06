import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
// import { useAuth } from '../context/userContext';
import { useProducts } from '../context/productContext';

export default function Products() {
    const { products, loading, error } = useProducts();
    // console.log(products[0]);
    return (
        <div className='container mx-auto w-full h-full mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20'>
            <Sidebar />
            <div className='flex flex-wrap gap-10 justify-center md:justify-between w-full'>
                {
                    products.map((product: any) => {
                        return <ProductCard
                            key={product.title}
                            title={product.title}
                            originalPrice={product.originalPrice}
                            discountedPrice={product.discountedPrice}
                            discount={product.discount}
                            description={product.description}
                            imageUrl={product.imageUrl}
                        />
                    })
                }
            </div>
        </div>
    );
}
