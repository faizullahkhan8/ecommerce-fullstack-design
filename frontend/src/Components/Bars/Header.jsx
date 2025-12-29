import React, { useState } from "react";
import {
    User,
    ShoppingCart,
    ShoppingBag,
    Menu,
    Flag,
    Search,
    MessageSquare,
    Heart,
} from "lucide-react";
import SearchInput from "../../UI/SearchInput";
import Select from "../../UI/Select";
import Button from "../../UI/Button";

const EcommerceHeader = () => {
    const [category, setCategory] = useState("");
    const mobileCategories = [
        "All category",
        "Gadgets",
        "Clocthes",
        "Accessories",
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white">
            {/* --- MOBILE HEADER (Visible on small screens) --- */}
            {/* Exact match for provided mobile screenshot */}
            <div className="lg:hidden p-4 space-y-4">
                {/* Top Row: Menu, Logo, Icons */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Menu
                            size={24}
                            className="text-[#1C1C1C] cursor-pointer"
                        />
                        <div className="flex items-center gap-2">
                            <div className="bg-[#4d94ff] p-1.5 rounded-lg shadow-sm">
                                <ShoppingBag className="text-white" size={20} />
                            </div>
                            <span className="text-[#8cb3ff] text-xl font-bold tracking-tight">
                                Brand
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-[#1C1C1C]">
                        <ShoppingCart size={24} className="cursor-pointer" />
                        <User size={24} className="cursor-pointer" />
                    </div>
                </div>

                {/* Search Bar Row */}
                <div className="relative">
                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B96A5]"
                        size={20}
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-[#F7FAFC] border border-[#DEE2E7] rounded-md py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#127FFF]"
                    />
                </div>

                {/* Horizontal Scrollable Categories */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {mobileCategories.map((cat, index) => (
                        <button
                            key={index}
                            className="whitespace-nowrap bg-[#EFF2F4] text-[#127FFF] px-4 py-1.5 rounded-md text-sm font-medium border border-transparent hover:bg-[#127FFF] hover:text-white transition-colors"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- DESKTOP HEADER (Visible on large screens) --- */}
            <div className="hidden lg:block">
                {/* Top Desktop Bar */}
                <div className="w-full py-4 px-6 border-b border-gray-300">
                    <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 h-full">
                        {/* Desktop Logo */}
                        <div className="flex items-center gap-2 cursor-pointer shrink-0">
                            <div className="bg-[#4d94ff] p-2 rounded-lg">
                                <ShoppingBag className="text-white" size={24} />
                            </div>
                            <span className="text-[#8cb3ff] text-2xl font-bold tracking-tight">
                                Brand
                            </span>
                        </div>

                        {/* Desktop Search Bar */}
                        <div className="flex grow max-w-175 h-11 items-center border border-[#127FFF] rounded-md bg-white overflow-hidden">
                            <SearchInput
                                className="grow h-full border-none outline-none px-4"
                                placeholder="Search"
                            />
                            <Select
                                className="h-full border-l border-gray-300"
                                options={[
                                    { label: "All category", value: "" },
                                    { label: "Electronics", value: "elec" },
                                ]}
                                value={category}
                                onChange={setCategory}
                            />
                            <Button className="h-full px-6 bg-[#127FFF] hover:bg-blue-700 text-white font-semibold rounded-none">
                                Search
                            </Button>
                        </div>

                        {/* Desktop Action Icons */}
                        <div className="flex items-center gap-5 shrink-0 .group-hover:scale-110 transition-transform">
                            <NavIcon
                                icon={<User size={20} />}
                                label="Profile"
                            />
                            <NavIcon
                                icon={<MessageSquare size={20} />}
                                label="Message"
                            />
                            <NavIcon
                                icon={<Heart size={20} />}
                                label="Orders"
                            />
                            <NavIcon
                                icon={<ShoppingCart size={20} />}
                                label="My cart"
                            />
                        </div>
                    </div>
                </div>

                {/* Secondary Navigation */}
                <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 font-semibold text-gray-800 cursor-pointer">
                            <Menu size={20} /> All Categories
                        </div>
                        <ul className="flex items-center gap-6 font-semibold text-gray-800">
                            <li className="cursor-pointer hover:text-[#127FFF]">
                                Hot offers
                            </li>
                            <li className="cursor-pointer hover:text-[#127FFF]">
                                Gift Boxes
                            </li>
                            <li className="cursor-pointer hover:text-[#127FFF]">
                                Projects
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <Select
                            value="USD"
                            options={[{ label: "English - USD", value: "USD" }]}
                        />
                        <div className="flex items-center gap-2 cursor-pointer">
                            Ship to <Flag size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const NavIcon = ({ icon, label }) => (
    <div className="flex flex-col items-center justify-center cursor-pointer group">
        <div className="text-[#8B96A5] group-hover:text-[#127FFF] transition-colors">
            {icon}
        </div>
        <span className="text-xs text-[#8B96A5] mt-1 group-hover:text-[#127FFF] transition-colors">
            {label}
        </span>
    </div>
);

export default EcommerceHeader;
