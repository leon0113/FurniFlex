import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const OrderSummary = ({ summary }) => {
    const { clearCart } = useContext(CartContext)
    return (
        <div>
            <div className="p-4 bg-gray-100 border text-gray-500 font-medium  rounded-lg">
                <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>{`€${summary.subtotal}`}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>{summary.shipping}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Estimated Tax</span>
                    <span>€ {summary.tax}</span>
                </div>
                <div className="flex justify-between mb-2 text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-gray-900">{`€ ${summary.total}`}</span>
                </div>
            </div>
            <button onClick={() => clearCart()} className="w-full bg-black text-white p-3 rounded-lg mt-4">
                GO TO CHECKOUT
            </button>
        </div>
    );
};
