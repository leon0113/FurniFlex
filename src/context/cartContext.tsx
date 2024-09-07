import { createContext, useState } from 'react';


export const CartContext = createContext<any>({
    id: "",
    title: "",
    originalPrice: "€",
    discountedPrice: "€",
    description: "",
    imageUrl: ""
});

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product: any) => {
        setCart((prevCart: any) => {

            console.log("Previous cart:", prevCart);


            const existingItemIndex = prevCart.findIndex((item: any) => item.id === product.id);


            if (existingItemIndex !== -1) {

                const updatedCart = prevCart.map((item: any, index: number) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );


                console.log("Updated cart with increased quantity:", updatedCart);


                return updatedCart;
            }


            const newCart = [...prevCart, { ...product, quantity: 1 }];
            console.log("New cart after adding new item:", newCart);


            return newCart;
        });
    };


    const updateQuantity = (id: any, quantity: number) => {
        setCart((prevCart: any) =>
            prevCart.map((item: any) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item: any) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
