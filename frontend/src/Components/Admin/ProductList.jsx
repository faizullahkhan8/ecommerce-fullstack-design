const ProductList = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 m-6">
            <h2 className="text-xl font-bold mb-4">Product List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Placeholder rows */}
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sample Product</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$99.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 cursor-pointer hover:underline">Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
