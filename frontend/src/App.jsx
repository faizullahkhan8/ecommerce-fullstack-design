/**
 * Main App Component
 * Handles all routing for the application
 * 
 * Performance Optimization:
 * - Uses lazy loading for all pages to reduce initial bundle size
 * - Only loads pages when user navigates to them
 * - Shows loading spinner while pages are being loaded
 */

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingSpinner from "./Components/LoadingSpinner";
import { LOADING_MESSAGES } from "./constants";

// Lazy load all pages for better performance
// This splits the code into smaller chunks that load on demand
const BaseLayout = lazy(() => import("./Layout/BaseLayout"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const ProductListPage = lazy(() => import("./Pages/ProductListPage"));
const ProductDetailPage = lazy(() => import("./Pages/ProductDetailPage"));
const CartPage = lazy(() => import("./Pages/CartPage"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const RegisterPage = lazy(() => import("./Pages/RegisterPage"));
const WishlistPage = lazy(() => import("./Pages/WishlistPage"));
const CheckoutPage = lazy(() => import("./Pages/CheckoutPage"));
const OrdersPage = lazy(() => import("./Pages/OrdersPage"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage"));
const ProtectedRoute = lazy(() => import("./Components/ProtectedRoute"));

const App = () => {
    return (
        <>
            {/* Toast notifications for user feedback */}
            <ToastContainer position="top-right" autoClose={3000} />
            
            {/* 
                Suspense handles loading states for lazy-loaded components
                Shows a spinner while the code is being downloaded
            */}
            <Suspense fallback={<LoadingSpinner message={LOADING_MESSAGES.PAGE} />}>
                <Routes>
                    {/* Main layout with header and footer */}
                    <Route path="/" element={<BaseLayout />}>
                        {/* Public routes - anyone can access */}
                        <Route index element={<HomePage />} />
                        <Route path="products" element={<ProductListPage />} />
                        <Route path="product/:id" element={<ProductDetailPage />} />
                        <Route path="cart" element={<CartPage />} />
                        
                        {/* Protected routes - require login */}
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
                                <div className="p-8 text-center text-gray-500">
                                    Messages Page Placeholder
                                </div>
                            </ProtectedRoute>
                        } />
                    </Route>
                    
                    {/* Auth routes - outside main layout (no header/footer) */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
