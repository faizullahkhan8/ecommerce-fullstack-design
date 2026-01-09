const DashboardHome = () => (
    <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm">Total Sales</h3>
                <p className="text-2xl font-bold">Rs:12,450</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm">Total Orders</h3>
                <p className="text-2xl font-bold">450</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm">Total Products</h3>
                <p className="text-2xl font-bold">120</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm">Total Users</h3>
                <p className="text-2xl font-bold">890</p>
            </div>
        </div>
    </div>
);

export default DashboardHome;
