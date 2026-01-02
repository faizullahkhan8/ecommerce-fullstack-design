import { ChevronDown, Menu } from "lucide-react"
import { Link } from "react-router-dom"

const NavigationBar = () => {
    return <div className="border-t border-gray-200 hidden md:block bg-gradient-to-r from-gray-50 to-white">
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
}

export default NavigationBar