import { useState } from 'react';
import AdminSidebar from '../Components/Admin/AdminSidebar.jsx';
import DashboardHome from '../Components/Admin/DashboardHome';
import ProductList from '../Components/Admin/ProductList';
import AddProduct from '../Components/Admin/AddProduct';
import { CategoryList, AddCategory } from '../Components/Admin/CategoryComponents';
import { UserList, AddUser } from '../Components/Admin/UserComponents';
import { OrderList, AddOrder } from '../Components/Admin/OrderComponents';

import { useSearchParams } from "react-router-dom"

const AdminPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const activeTab = searchParams.get('tab') || 'dashboard'

    return (
        <div className="container mx-auto px-4 py-8 md:py-12 flex max-sm:flex-col min-h-[80vh] bg-gray-50 text-sm">
            <AdminSidebar
                searchParams={searchParams}
                setSearchParams={setSearchParams}
            />

            <main className="flex-1 overflow-x-hidden overflow-y-auto">
                {activeTab === 'dashboard' && <DashboardHome />}
                {activeTab === 'products-list' && <ProductList />}
                {activeTab === 'products-add' && <AddProduct />}
                {activeTab === 'categories-list' && <CategoryList />}
                {activeTab === 'categories-add' && <AddCategory />}
                {activeTab === 'users-list' && <UserList />}
                {activeTab === 'users-add' && <AddUser />}
                {activeTab === 'orders-list' && <OrderList />}
                {activeTab === 'orders-add' && <AddOrder />}
            </main>
        </div>
    );
};

export default AdminPage;
