const AddProduct = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 m-6 max-w-2xl">
            <h2 className="text-xl font-bold mb-6">Add New Product</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter product name" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="0.00" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary" rows="4" placeholder="Product description..."></textarea>
                </div>
                <button type="button" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
