import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for products
const ProductContext = createContext<any>({
    "title": "Blank Bamboo Wicker",
    "originalPrice": "€350.00",
    "category": "rocking",
    "discountedPrice": "€299.00",
    "discount": "30%",
    "description": "Lightweight, easy to clean, sturdy, safe and stable. Non-slip legs.",
    "imageUrl": "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},);

export function useProducts() {
    return useContext(ProductContext);
}

// Product Provider component to wrap the app
export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch product data from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/');
                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const value = {
        products,
        loading,
        error,
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}
