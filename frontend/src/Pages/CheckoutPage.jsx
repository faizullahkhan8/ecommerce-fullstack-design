import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";


const CheckoutPage = () => {
    const { items, totalAmount } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: user?.name?.split(' ')[0] || "",
        lastName: user?.name?.split(' ')[1] || "",
        email: user?.email || "",
        address: "",
        city: "",
        country: "Uzbekistan",
        zip: "",
    });

    if (items.length === 0) {
        return (
            <div className="container py-20 text-center">
                <h2 className="text-xl font-bold mb-4">Your cart is empty</h2>
                <Link to="/products" className="text-primary hover:underline">Go shopping</Link>
            </div>
        );
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderData = {
            user: user || { name: 'Guest' },
            items,
            totalAmount,
            shippingAddress: formData,
        };
        const result = await placeOrder(orderData);
        if (result) {
            navigate("/orders");
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Shipping Form */}
                <div className="lg:col-span-2">
                    <form id="checkout-form" onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">First name</label>
                                <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Last name</label>
                                <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Email</label>
                            <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Address</label>
                            <input required name="address" value={formData.address} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary" placeholder="123 Street Name" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">City</label>
                                <input required name="city" value={formData.city} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Zip Code</label>
                                <input required name="zip" value={formData.zip} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Country</label>
                            <select name="country" value={formData.country} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary">
                                <option>Uzbekistan</option>
                                <option>Germany</option>
                                <option>USA</option>
                            </select>
                        </div>
                    </form>
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
                        <div className="space-y-3 text-sm text-gray-600 border-b border-gray-200 pb-4 mb-4">
                            {items.map(item => (
                                <div key={item.id} className="flex justify-between">
                                    <span className="line-clamp-1 w-2/3">{item.title} (x{item.quantity})</span>
                                    <span>${(item.totalPrice).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between font-bold text-lg text-gray-900 mb-6">
                            <span>Total</span>
                            <span>${totalAmount?.toFixed(2)}</span>
                        </div>
                        <button
                            type="submit"
                            form="checkout-form"
                            disabled={loading}
                            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50"
                        >
                            {loading ? "Processing..." : "Place Order"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
