import { RxCross1 } from "react-icons/rx";

export const CartItem = ({ item }) => {
    return (
        <div className="pt-4 px-4 h-28 bg-gray-50  rounded-lg mb-1">
            <div className="flex justify-between items-start ">
                <div className="flex items-center gap-2">
                    <div className="flex rounded-md border h-10 items-center text-lg">
                        <button className="px-2">-</button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button className="px-2">+</button>
                    </div>
                    <div className="flex items-start space-x-4 ">
                        <img src={item.imageUrl} alt={item.name} className="h-16 w-16 rounded-lg border" />
                        <div>
                            <p className="font-medium text-gray-700">{item.name}</p>
                        </div>
                    </div>
                </div>
                <button className="text-gray-500 font-bold"><RxCross1 /></button>
            </div>
            <p className="text-gray-900 flex justify-end font-medium text-lg">{`€ ${item.price}`}</p>
        </div>
    );
};

