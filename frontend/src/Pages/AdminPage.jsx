import AdminSidebar from "../Components/Admin/AdminSidebar.jsx";
import DashboardHome from "../Components/Admin/DashboardHome";
import ProductList from "../Components/Admin/ProductList";
import AddProduct from "../Components/Admin/AddProduct";
import AddCategory from "../Components/Admin/AddCategory.jsx";
import CategoryList from "../Components/Admin/CategoryList.jsx";
import OrdersList from "../Components/Admin/OrdersList.jsx";
import OrdersDetails from "../Components/Admin/OrdersDetails.jsx";
import AddOrder from "../Components/Admin/AddOrder.jsx";
import { UserList, AddUser } from "../Components/Admin/UserComponents.jsx";

import { useSearchParams } from "react-router-dom";

const AdminPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get("tab") || "dashboard";

    return (
        // Changed flex-col to flex-row for md+ and removed container for full-width control
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-sm">
            {/* Sidebar now manages its own mobile state internally */}
            <AdminSidebar
                searchParams={searchParams}
                setSearchParams={setSearchParams}
            />

            {/* Main Content Area */}
            <main className="flex-1 w-full p-4 md:p-8 lg:p-12 overflow-x-hidden">
                <div className="max-w-7xl mx-auto">
                    {activeTab === "dashboard" && <DashboardHome />}
                    {activeTab === "products-list" && <ProductList />}
                    {activeTab === "products-add" && <AddProduct />}
                    {activeTab === "categories-list" && <CategoryList />}
                    {activeTab === "categories-add" && <AddCategory />}
                    {activeTab === "users-list" && <UserList />}
                    {activeTab === "users-add" && <AddUser />}
                    {activeTab === "orders-list" && <OrdersList />}
                    {activeTab === "orders-details" && <OrdersDetails />}
                    {activeTab === "orders-add" && <AddOrder />}
                </div>
            </main>
        </div>
    );
};

export default AdminPage;
