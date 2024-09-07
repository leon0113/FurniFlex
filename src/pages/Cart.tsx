import React, { useContext, useState } from 'react';
import { CartItem } from '../components/CartItem';
import { OrderSummary } from '../components/OrderSummary';
import { CartContext } from '../context/cartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
    const { itemTotal, setItemTotal } = useState(0);

    const handleItemTotal = () => {

    }

    const subtotal = cart.reduce((acc, item) => {
        // Remove the '€' symbol and convert the price string to a number
        const priceNumber = parseFloat(item.discountedPrice.replace('€', ''));
        return acc + priceNumber * item.quantity;
    }, 0);
    const shipping = subtotal > 100 ? 'Free' : '€10.00';
    const tax = (subtotal * 0.05).toFixed(2);
    const total = shipping === 'Free' ? subtotal + parseFloat(tax) : subtotal + parseFloat(tax) + 10;

    const summary = {
        subtotal: subtotal.toFixed(2),
        shipping: shipping,
        tax: tax,
        total: total.toFixed(2)
    };

    return (
        <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-20">
            <div className="flex-1">
                <h1 className='font-bold text-2xl mb-8'>An overview of your order</h1>
                {cart.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                        subtotal={subtotal}
                    />
                ))}
            </div>
            <div className="w-full md:w-1/4">
                <h1 className='font-bold text-2xl mb-8'>Order details</h1>
                <OrderSummary summary={summary} />
            </div>
        </div>
    );
};

export default Cart;
