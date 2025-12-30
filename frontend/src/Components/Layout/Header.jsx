import { Search, User, MessageSquare, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary rounded p-1 text-white">
            <ShoppingCart size={24} />
          </div>
          <span className="text-xl font-bold text-primary">Brand</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl flex">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 border-2 border-primary rounded-l-md px-4 py-2 focus:outline-none"
          />
          <select className="border-y-2 border-r-2 border-primary border-l-0 px-4 py-2 bg-white focus:outline-none hidden sm:block">
            <option>All category</option>
            <option>Electronics</option>
            <option>Clothes</option>
            <option>Home</option>
          </select>
          <button className="bg-primary text-white px-6 py-2 rounded-r-md font-medium hover:bg-primary-dark transition-colors">
            Search
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6 text-gray-500">
          <Link to="/profile" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
            <User size={20} />
            <span className="text-xs">Profile</span>
          </Link>
          <Link to="/messages" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
            <MessageSquare size={20} />
            <span className="text-xs">Message</span>
          </Link>
          <Link to="/orders" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
            <Heart size={20} />
            <span className="text-xs">Orders</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
            <ShoppingCart size={20} />
            <span className="text-xs">My cart</span>
          </Link>
        </div>
      </div>

      {/* Secondary Nav (Optional based on image 2/3) */}
      <div className="border-t border-gray-200 py-3 hidden md:block">
        <div className="container flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm font-medium">
                <button className="flex items-center gap-2">
                    <span className="text-lg">≡</span> All category
                </button>
                <Link to="#" className="hover:text-primary">Hot offers</Link>
                <Link to="#" className="hover:text-primary">Gift boxes</Link>
                <Link to="#" className="hover:text-primary">Projects</Link>
                <Link to="#" className="hover:text-primary">Menu item</Link>
                <button className="flex items-center gap-1">Help ▾</button>
            </div>
            <div className="flex items-center gap-6 text-sm">
                <button className="flex items-center gap-1">English, USD ▾</button>
                <button className="flex items-center gap-1">Ship to 🇩🇪 ▾</button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
