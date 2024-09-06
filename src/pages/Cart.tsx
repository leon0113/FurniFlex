import React from 'react';
import { CartItem } from '../components/CartItem';
import { OrderSummary } from '../components/OrderSummary';

const Cart = () => {
    const items = [
        // Example items data
        { id: 1, name: "Recliner Chair Steel", price: 299, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: "Recliner Chair Steel", price: 299, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: "Recliner Chair Steel", price: 299, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        // Add other items similarly
    ];

    const summary = {
        subtotal: 1071,
        shipping: "Free",
        tax: "-",
        total: 1071
    };

    return (
        <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-20">
            <div className="flex-1">
                <h1 className='font-bold text-2xl mb-8'>An overview of your order</h1>
                {items.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            <div className="w-full md:w-1/4">
                <h1 className='font-bold text-2xl mb-8'>Order details</h1>
                <OrderSummary summary={summary} />
            </div>
        </div>
    );
};

export default Cart;
