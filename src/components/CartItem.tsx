import { RxCross1 } from "react-icons/rx";

export const CartItem = ({ item, updateQuantity, removeFromCart, subtotal }) => {
    const handleIncrease = () => {
        updateQuantity(item.id, item.quantity + 1);
    };

    const handleDecrease = () => {
        if (item.quantity > 1) {
            updateQuantity(item.id, item.quantity - 1);
        } else {
            removeFromCart(item.id); // Remove the item if quantity is 1 and "-" is clicked
        }
    };
    return (
        <div className="pt-4 px-4 h-28 bg-gray-50 rounded-lg mb-1">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                    <div className="flex rounded-md border h-10 items-center text-lg">
                        <button className="px-2" onClick={handleDecrease}>-</button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button className="px-2" onClick={handleIncrease}>+</button>
                    </div>
                    <div className="flex items-start space-x-4">
                        <img src={item.imageUrl} alt={item.title} className="h-16 w-16 rounded-lg border" />
                        <div>
                            <p className="font-medium text-gray-700">{item.title}</p>
                        </div>
                    </div>
                </div>
                <button className="text-gray-500 font-bold" onClick={() => removeFromCart(item.id)}>
                    <RxCross1 />
                </button>
            </div>
            <p className="text-gray-900 flex justify-end font-medium text-lg">{`€ ${item.quantity * Number(item.discountedPrice.replace('€', ''))}`}</p>
        </div>
    );
};
