import { X, Home, List, Package, Globe, Headphones, Building, User, Heart, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom";

const MobileSideBar = ({ isMenuOpen, setIsMenuOpen, isAuthenticated, cartCount }) => {
    return (
        <>
            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
    );
};

export default MobileSideBar
