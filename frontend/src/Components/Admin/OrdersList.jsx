import { useState, useEffect } from "react";
// import { useGetAllOrders } from "../../api/hooks/order.api.js";
import { MoreVertical, Eye, Package } from "lucide-react";
import { Link } from "react-router-dom";

const OrdersList = () => {
    const [orders, setOrders] = useState([]);
    // const { getAllOrders, loading } = useGetAllOrders();
    const [activeMenuId, setActiveMenuId] = useState(null);

    // useEffect(() => {
    //     getAllOrders().then((res) => {
    //         if (res?.success) setOrders(res.orders);
    //     });
    // }, []);

    const getStatusStyles = (status) => {
        switch (status.toLowerCase()) {
            case 'delivered': return 'bg-green-100 text-green-700';
            case 'processing': return 'bg-blue-100 text-blue-700';
            case 'cancelled': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="bg-white rounded-sm shadow-sm border border-gray-200 m max-w-3xl max-h-[calc(100vh-200px)] h-[calc(100vh-200px)] mx-auto overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
                <p className="text-sm text-gray-500">Track and manage customer transactions.</p>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Order ID</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Total</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-xs font-mono text-gray-400">
                                        #{order._id.slice(-8).toUpperCase()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {order.customerName || "Guest User"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">
                                        ${order.totalAmount?.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full ${getStatusStyles(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right relative">
                                        <button
                                            onClick={() => setActiveMenuId(activeMenuId === order._id ? null : order._id)}
                                            className="p-2 hover:bg-gray-100 rounded-full text-gray-400"
                                        >
                                            <MoreVertical size={18} />
                                        </button>

                                        {activeMenuId === order._id && (
                                            <>
                                                <div className="fixed inset-0 z-20" onClick={() => setActiveMenuId(null)}></div>
                                                <div className="absolute right-6 top-12 w-36 bg-white rounded-md shadow-xl border border-gray-100 py-1 z-30">
                                                    <Link
                                                        to={`/admin-dashboard?tab=order-details&id=${order._id}`}
                                                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                                                    >
                                                        <Eye size={14} className="text-blue-500" /> View Details
                                                    </Link>
                                                </div>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                                    <Package size={40} className="mx-auto mb-2 opacity-20" />
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersList;