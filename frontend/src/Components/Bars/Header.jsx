import { Search, User, ShoppingCart, Heart, Menu, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { useDebounce } from "../../hooks/useDebounce";

const NavIcon = ({ to, icon, label, badge }) => (
    <Link to={to} className="flex flex-col items-center gap-1 text-gray-500 hover:text-primary transition-colors relative">
        <div className="relative">
            {icon}
            {badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                    {badge}
                </span>
            )}
        </div>
        <span className="text-xs hidden md:block">{label}</span>
    </Link>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSearch = useDebounce(searchQuery, 800); // 800ms debounce
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

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            {/* Desktop Header */}
            <div className="container py-4 flex items-center justify-between gap-8 h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 flex-shrink-0">
                    <div className="bg-primary text-white p-2 rounded-lg">
                        <ShoppingCart size={24} />
                    </div>
                    <span className="text-2xl font-bold text-primary-dark">Brand</span>
                </Link>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-2xl">
                    <div className="flex w-full border border-primary rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                         <input 
                            type="text" 
                            placeholder="Search" 
                            className="flex-1 px-4 py-2.5 outline-none text-gray-700"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                         <div className="border-l border-gray-200 relative">
                             <select className="appearance-none bg-gray-50 px-4 py-2.5 pr-8 outline-none text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors h-full">
                                 <option>All category</option>
                                 <option>Electronics</option>
                                 <option>Clothes</option>
                             </select>
                         </div>
                         <button className="bg-primary text-white px-6 py-2.5 font-medium hover:bg-primary-dark transition-colors">Search</button>
                    </div>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-6">
                    {isAuthenticated ? (
                        <div className="flex flex-col items-center gap-1 text-gray-500 cursor-pointer hover:text-primary transition-colors" onClick={signOut}>
                            <User size={20} />
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
                <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu size={24}/>
                </button>
            </div>
            
            {/* Mobile Header Search (Visible on small screens) */}
            <div className="md:hidden container pb-4">
                 <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden">
                     <input type="text" placeholder="Search" className="flex-1 px-4 py-2 outline-none"/>
                     <button className="bg-gray-100 px-4 py-2"><Search size={20} className="text-gray-500"/></button>
                 </div>
            </div>

            {/* Navigation Bar */}
             <div className="border-t border-gray-200 hidden md:block">
                 <div className="container py-3 flex items-center justify-between">
                     <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
                         <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                             <Menu size={20} />
                             <span>All category</span>
                         </div>
                         <Link to="/products" className="hover:text-primary transition-colors">Hot offers</Link>
                         <Link to="/products" className="hover:text-primary transition-colors">Gift boxes</Link>
                         <Link to="/products" className="hover:text-primary transition-colors">Projects</Link>
                         <Link to="/products" className="hover:text-primary transition-colors">Menu item</Link>
                         <div className="relative group">
                            <span className="cursor-pointer hover:text-primary transition-colors">Help</span>
                         </div>
                     </div>
                     
                     <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
                         <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                             <span>English, USD</span>
                             <div className="border border-gray-300 rounded px-1 text-xs">▼</div>
                         </div>
                         <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                             <span>Ship to</span>
                             <span className="text-lg">🇩🇪</span>
                             <div className="border border-gray-300 rounded px-1 text-xs">▼</div>
                         </div>
                     </div>
                 </div>
             </div>
        </header>
    );
};

export default Header;
