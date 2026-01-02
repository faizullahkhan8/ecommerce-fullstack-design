import { useState } from 'react';
import AdminSidebar from '../Components/Admin/AdminSidebar.jsx';
import DashboardHome from '../Components/Admin/DashboardHome';
import ProductList from '../Components/Admin/ProductList';
import AddProduct from '../Components/Admin/AddProduct';
import { CategoryList, AddCategory } from '../Components/Admin/CategoryComponents';
import { UserList, AddUser } from '../Components/Admin/UserComponents';
import { OrderList, AddOrder } from '../Components/Admin/OrderComponents';

const AdminPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeView, setActiveView] = useState('dashboard')

    return (
        <div className="container mx-auto px-4 py-8 md:py-12 flex max-sm:flex-col min-h-[80vh] bg-gray-50 text-sm">
            <AdminSidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                activeView={activeView}
                setActiveView={setActiveView}
            />

            <main className="flex-1 overflow-x-hidden overflow-y-auto">
                {activeView === 'dashboard' && <DashboardHome />}
                {activeView === 'products-list' && <ProductList />}
                {activeView === 'products-add' && <AddProduct />}
                {activeView === 'categories-list' && <CategoryList />}
                {activeView === 'categories-add' && <AddCategory />}
                {activeView === 'users-list' && <UserList />}
                {activeView === 'users-add' && <AddUser />}
                {activeView === 'orders-list' && <OrderList />}
                {activeView === 'orders-add' && <AddOrder />}
            </main>
        </div>
    );
};

export default AdminPage;
