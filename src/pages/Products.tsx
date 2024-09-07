import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
// import { useAuth } from '../context/userContext';
import { useProducts } from '../context/productContext';
import Pagination from '../components/Pagination';
import { useAuth } from '../context/userContext';

export default function Products() {
    const { products, loading, error } = useProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("Rocking chair");
    const [activeCategory, setActiveCategory] = useState("Rocking chair");

    const pageSize = 6;

    const { currentUser } = useAuth(); // Fetch the user details and logout function
    console.log(currentUser);

    // handle page change
    const handlePagination = (pageNo: number) => {
        setCurrentPage(pageNo);
    }

    const categorisedProduct = products.filter((product: any) => !selectedCategory || product.category === selectedCategory);

    const filteredData = categorisedProduct.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    console.log(filteredData.length);
    const handleCategoryChange = (category: any) => {
        setSelectedCategory(category);
        setActiveCategory(category);
        setCurrentPage(1);
    }

    return (
        <div className='container mx-auto w-full h-full mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20'>
            <Sidebar handleCategoryChange={handleCategoryChange} activeCategory={activeCategory} />
            <div className='flex flex-col gap-6'>
                <div className='flex flex-wrap gap-10 justify-center md:justify-between w-full'>
                    {
                        filteredData.map((product: any) => {
                            return <ProductCard
                                key={product.id}
                                id={product.id}
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
                <Pagination handlePagination={handlePagination} currentPage={currentPage} categorisedProduct={categorisedProduct} pageSize={pageSize} />
            </div>
        </div>
    );
}

