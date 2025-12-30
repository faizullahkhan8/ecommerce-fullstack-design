/**
 * Header Component
 * Main navigation header with search, cart, and user actions
 * 
 * Features:
 * - Sticky header with shadow on scroll
 * - Search bar with category filter
 * - Cart with badge counter
 * - Authentication state handling
 * - Enhanced navigation bar with modern design
 */

import { 
    Search, User, ShoppingCart, Heart, Menu, MessageSquare, ChevronDown,
    X, Home, List, Package, Globe, Headphones, Building
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { useDebounce } from "../../hooks/useDebounce";

// Reusable icon component for navigation actions
const NavIcon = ({ to, icon, label, badge }) => (
    <Link to={to} className="flex flex-col items-center gap-1 text-gray-500 hover:text-primary transition-colors relative group">
        <div className="relative">
            {icon}
            {/* Badge for cart count */}
            {badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm">
                    {badge}
                </span>
            )}
        </div>
        <span className="text-xs hidden md:block group-hover:text-primary transition-colors">{label}</span>
    </Link>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearch = useDebounce(searchQuery, 800); // 800ms debounce for search
    const cartItems = useSelector(state => state.cart.items);
    const { isAuthenticated } = useSelector(state => state.auth);
    const { signOut } = useAuth();
    const navigate = useNavigate();
    
    // Trigger search when debounced value changes
    useEffect(() => {
        if (debouncedSearch !== undefined) {
             if (debouncedSearch) {
                navigate(`/products?search=${encodeURIComponent(debouncedSearch)}`);
             } else if (searchQuery === "") {
                // If user cleared search manually
                // Optional: navigate('/products') to clear filter
             }
        }
    }, [debouncedSearch]);

    // Calculate total cart items
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            {/* Main Header */}
            <div className="container py-4 flex items-center justify-between gap-8 h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
                    <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-primary-dark transition-colors">
                        <ShoppingCart size={24} />
                    </div>
                    <span className="text-2xl font-bold text-primary-dark group-hover:text-primary transition-colors">Brand</span>
                </Link>

                {/* Search Bar - Desktop */}
                <div className="hidden md:flex flex-1 max-w-2xl">
                    <div className="flex w-full border border-primary rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:shadow-md transition-all">
                         <input 
                            type="text" 
                            placeholder="Search for products, brands, and more..." 
                            className="flex-1 px-4 py-2.5 outline-none text-gray-700 placeholder:text-gray-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                         <div className="border-l border-gray-200 relative">
                             <select className="appearance-none bg-gray-50 px-4 py-2.5 pr-8 outline-none text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors h-full font-medium">
                                 <option>All category</option>
                                 <option>Electronics</option>
                                 <option>Clothes</option>
                                 <option>Home & Garden</option>
                                 <option>Sports</option>
                             </select>
                         </div>
                         <button className="bg-primary text-white px-6 py-2.5 font-medium hover:bg-primary-dark transition-all active:scale-95">
                            Search
                         </button>
                    </div>
                </div>

                {/* User Actions - Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    {isAuthenticated ? (
                        <div className="flex flex-col items-center gap-1 text-gray-500 cursor-pointer hover:text-primary transition-colors group" onClick={signOut}>
                            <User size={20} className="group-hover:scale-110 transition-transform" />
                            <span className="text-xs">Sign Out</span>
                        </div>
                    ) : (
                        <NavIcon to="/login" icon={<User size={20} />} label="Sign In" />
                    )}
                    <NavIcon to="/messages" icon={<MessageSquare size={20} />} label="Message" />
                    <NavIcon to="/orders" icon={<Heart size={20} />} label="Orders" />
                    <NavIcon to="/cart" icon={<ShoppingCart size={20} />} label="My Cart" badge={cartCount} />
                </div>
                
                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu size={24}/>
                </button>
            </div>
            
            {/* Mobile Search Bar */}
            <div className="md:hidden container pb-4">
                 <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden focus-within:border-primary transition-colors">
                     <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="flex-1 px-4 py-2 outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                     />
                     <button className="bg-gray-100 px-4 py-2 hover:bg-gray-200 transition-colors">
                        <Search size={20} className="text-gray-500"/>
                     </button>
                 </div>
            </div>

            {/* Enhanced Navigation Bar */}
             <div className="border-t border-gray-200 hidden md:block bg-gradient-to-r from-gray-50 to-white">
                 <div className="container py-3 flex items-center justify-between">
                     {/* Left Navigation */}
                     <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
                         {/* All Categories Dropdown */}
                         <div className="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:text-primary hover:bg-primary/5 rounded-md transition-all group">
                             <Menu size={18} className="group-hover:scale-110 transition-transform" />
                             <span>All category</span>
                             <ChevronDown size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                         </div>
                         
                         {/* Navigation Links */}
                         <Link 
                            to="/products" 
                            className="px-3 py-1.5 hover:text-primary hover:bg-primary/5 rounded-md transition-all relative group"
                         >
                            Hot offers
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                HOT
                            </span>
                         </Link>
                         
                         <Link 
                            to="/products" 
                            className="px-3 py-1.5 hover:text-primary hover:bg-primary/5 rounded-md transition-all"
                         >
                            Gift boxes
                         </Link>
                         
                         <Link 
                            to="/products" 
                            className="px-3 py-1.5 hover:text-primary hover:bg-primary/5 rounded-md transition-all"
                         >
                            Projects
                         </Link>
                         
                         <Link 
                            to="/products" 
                            className="px-3 py-1.5 hover:text-primary hover:bg-primary/5 rounded-md transition-all"
                         >
                            Menu item
                         </Link>
                         
                         {/* Help Dropdown */}
                         <div className="relative group">
                            <div className="flex items-center gap-1 px-3 py-1.5 cursor-pointer hover:text-primary hover:bg-primary/5 rounded-md transition-all">
                                <span>Help</span>
                                <ChevronDown size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                         </div>
                     </div>
                     
                     {/* Right Settings */}
                     <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
                         {/* Language & Currency */}
                         <div className="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:text-primary hover:bg-primary/5 rounded-md transition-all group">
                             <span>English, USD</span>
                             <ChevronDown size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                         </div>
                         
                         {/* Ship To */}
                         <div className="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:text-primary hover:bg-primary/5 rounded-md transition-all group">
                             <span>Ship to</span>
                             <span className="text-lg">🇩🇪</span>
                             <ChevronDown size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                         </div>
                     </div>
                 </div>
             </div>

            {/* Mobile Sidebar Navigation */}
            <>
                {/* Overlay */}
                {isMenuOpen && (
                    <div 
                        className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
                
                {/* Sidebar */}
                <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                    {/* Sidebar Content */}
                    <div className="flex flex-col h-full">
                        {/* Close Button */}
                        <div className="flex justify-end p-4 border-b border-gray-200">
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto">
                            {/* User Section */}
                            <div className="p-4 border-b border-gray-200 bg-gray-50">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User size={24} className="text-gray-400" />
                                    </div>
                                    <div>
                                        {isAuthenticated ? (
                                            <div>
                                                <p className="font-medium text-gray-900">User</p>
                                                <button 
                                                    onClick={() => {
                                                        signOut();
                                                        setIsMenuOpen(false);
                                                    }}
                                                    className="text-sm text-primary hover:underline"
                                                >
                                                    Sign out
                                                </button>
                                            </div>
                                        ) : (
                                            <Link 
                                                to="/login" 
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-gray-900 font-medium"
                                            >
                                                Sign in | Register
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Main Navigation */}
                            <div className="py-2">
                                <Link 
                                    to="/" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                >
                                    <Home size={20} className="text-gray-400" />
                                    <span className="font-medium">Home</span>
                                </Link>
                                
                                <Link 
                                    to="/products" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                >
                                    <List size={20} className="text-gray-400" />
                                    <span className="font-medium">Categories</span>
                                </Link>
                                
                                <Link 
                                    to="/wishlist" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                >
                                    <Heart size={20} className="text-gray-400" />
                                    <span className="font-medium">Favorites</span>
                                </Link>
                                
                                <Link 
                                    to="/orders" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                >
                                    <Package size={20} className="text-gray-400" />
                                    <span className="font-medium">My orders</span>
                                </Link>
                                
                                <Link 
                                    to="/cart" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                >
                                    <ShoppingCart size={20} className="text-gray-400" />
                                    <span className="font-medium">My cart</span>
                                    {cartCount > 0 && (
                                        <span className="ml-auto bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-2"></div>

                            {/* Settings & Info */}
                            <div className="py-2">
                                <div className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                                    <Globe size={20} className="text-gray-400" />
                                    <span className="font-medium">English | USD</span>
                                </div>
                                
                                <div className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                                    <Headphones size={20} className="text-gray-400" />
                                    <span className="font-medium">Contact us</span>
                                </div>
                                
                                <div className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                                    <Building size={20} className="text-gray-400" />
                                    <span className="font-medium">About</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-2"></div>

                            {/* Footer Links */}
                            <div className="py-2 px-6 space-y-3">
                                <div className="text-gray-600 hover:text-primary cursor-pointer transition-colors py-2">
                                    User agreement
                                </div>
                                <div className="text-gray-600 hover:text-primary cursor-pointer transition-colors py-2">
                                    Partnership
                                </div>
                                <div className="text-gray-600 hover:text-primary cursor-pointer transition-colors py-2">
                                    Privacy policy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </header>
    );
};

export default Header;
