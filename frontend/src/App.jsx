import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BaseLayout from "./Layout/BaseLayout";
import HomePage from "./Pages/HomePage";
import ProductListPage from "./Pages/ProductListPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import WishlistPage from "./Pages/WishlistPage";
import CheckoutPage from "./Pages/CheckoutPage";
import OrdersPage from "./Pages/OrdersPage";
import ProfilePage from "./Pages/ProfilePage";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="products" element={<ProductListPage />} />
                    <Route path="product/:id" element={<ProductDetailPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={
                        <ProtectedRoute>
                            <CheckoutPage />
                        </ProtectedRoute>
                    } />
                    <Route path="wishlist" element={
                        <ProtectedRoute>
                            <WishlistPage />
                        </ProtectedRoute>
                    } />
                    <Route path="profile" element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    } />
                    <Route path="orders" element={
                        <ProtectedRoute>
                            <OrdersPage />
                        </ProtectedRoute>
                    } />
                    <Route path="messages" element={
                        <ProtectedRoute>
                            <div className="p-8 text-center text-gray-500">Messages Page Placeholder</div>
                        </ProtectedRoute>
                    } />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </>
    );
};

export default App;
