import { ArrowLeft, Lock, MessageSquare, Truck } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const CartPage = () => {
    const { items, totalAmount } = useSelector(state => state.cart);
    const { removeItem, updateItemQuantity } = useCart();

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="text-xl font-bold my-6">My cart ({items.length})</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                    {/* Cart Items */}
                    <div className="space-y-4 mb-6">
                        {items.length === 0 ? (
                            <div className="text-center py-8 bg-white border border-gray-200 rounded-lg">Your cart is empty</div>
                        ) : (
                             items.map(item => (
                                <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4 items-start sm:items-center">
                                    <div className="bg-gray-100 rounded border border-gray-200 w-20 h-20 flex-shrink-0 flex items-center justify-center p-1">
                                        <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-medium text-gray-900 line-clamp-2 pr-4">{item.title}</h4>
                                            <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-500 border border-gray-200 bg-white px-3 py-1 rounded text-sm font-medium hover:bg-red-50 hover:border-red-200 transition-colors"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block">
                                            <select 
                                                className="border border-gray-300 rounded px-2 py-1 text-sm bg-white"
                                                value={`Qty: ${item.quantity}`} 
                                                onChange={(e) => {
                                                    const qty = parseInt(e.target.value.split(' ')[1]);
                                                    updateItemQuantity(item.id, qty);
                                                }}
                                            >
                                                <option>Qty: 1</option>
                                                <option>Qty: 2</option>
                                                <option>Qty: 3</option>
                                                <option>Qty: 4</option>
                                                <option>Qty: 5</option>
                                            </select>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="flex justify-between items-center mb-8">
                        <Link to="/" className="flex items-center gap-2 bg-primary text-white py-2 px-6 rounded font-medium hover:bg-primary-dark transition-colors shadow-sm">
                            <ArrowLeft size={20} /> Back to shop
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-1">
                     <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                         <div className="space-y-3 border-b border-gray-200 pb-4 mb-4 text-gray-600">
                             <div className="flex justify-between font-bold text-xl text-gray-900 mb-6">
                                 <span>Total:</span>
                                 <span>${totalAmount.toFixed(2)}</span>
                             </div>
                         </div>
                         <Link to="/checkout" className="block w-full bg-green-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-green-600 transition-colors shadow-sm mb-4 text-center">
                             Checkout
                         </Link>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
