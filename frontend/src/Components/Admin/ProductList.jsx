import { useGetAllProducts } from "../../api/hooks/product.api.js";
import { useState, useEffect } from "react";
import { Edit3, PackageOpen } from "lucide-react"; // Optional: for better icons

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { getAllProducts, loading: getAllProductsLoading } = useGetAllProducts();

    useEffect(() => {
        (async () => {
            const response = await getAllProducts();
            if (response?.success) {
                setProducts(response.products);
            }
        })();
    }, []);

    return (
        <div className="bg-white rounded-sm shadow-sm border border-gray-200 mx-auto max-w-3xl flex flex-col overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800">Product List</h2>
                <p className="text-sm text-gray-500">Manage your store inventory and stock levels.</p>
            </div>

            {/* Scrollable Container */}
            <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
                <table className="min-w-full divide-y divide-gray-200 border-separate border-spacing-0">
                    <thead className="bg-gray-50 sticky top-0 z-10 shadow-sm">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Image</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">ID</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Name</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Price</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Stock</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {getAllProductsLoading ? (
                            // Skeleton Loader rows
                            [...Array(5)].map((_, i) => (
                                <tr key={i} className="animate-pulse">
                                    <td className="px-6 py-4"><div className="w-16 h-16 bg-gray-200 rounded-lg"></div></td>
                                    <td className="px-6 py-4"><div className="h-4 w-12 bg-gray-200 rounded"></div></td>
                                    <td className="px-6 py-4"><div className="h-4 w-32 bg-gray-200 rounded"></div></td>
                                    <td className="px-6 py-4"><div className="h-4 w-16 bg-gray-200 rounded"></div></td>
                                    <td className="px-6 py-4"><div className="h-4 w-12 bg-gray-200 rounded"></div></td>
                                    <td className="px-6 py-4"><div className="h-4 w-8 bg-gray-200 rounded ml-auto"></div></td>
                                </tr>
                            ))
                        ) : products.length > 0 ? (
                            products.map((product) => (
                                <tr className="hover:bg-blue-50/30 transition-colors group" key={product._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img
                                            src={`${import.meta.env.VITE_BACKEND_URL}/${product.image}`}
                                            className="w-16 h-16 object-cover rounded-lg border border-gray-100 shadow-sm"
                                            alt={product.name}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs font-mono text-gray-400">
                                        #{product._id.slice(-6).toUpperCase()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                                        {product.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">
                                        ${Number(product.price).toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${product.stock > 10 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                            {product.stock} in stock
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-blue-600 hover:text-blue-900 flex items-center justify-end w-full gap-1">
                                            <Edit3 size={16} />
                                            <span>Edit</span>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                                    <div className="flex flex-col items-center gap-2">
                                        <PackageOpen size={48} className="text-gray-300" />
                                        <p>No products found. Add your first product to get started!</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;