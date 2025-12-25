import React, { useState } from "react";
import {
    User,
    MessageSquare,
    Heart,
    ShoppingCart,
    ShoppingBag,
    Menu,
    Flag,
} from "lucide-react";
import SearchInput from "../../UI/SearchInput";
import Select from "../../UI/Select";
import Button from "../../UI/Button";

const EcommerceHeader = () => {
    const [category, setCategory] = useState("");

    return (
        <header className="w-full border-b border-gray-300">
            {/* Top Header */}
            <div className="w-full bg-white py-4 px-6 border-b border-gray-300">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 h-full">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer shrink-0">
                        <div className="bg-[#4d94ff] p-2 rounded-lg">
                            <ShoppingBag className="text-white" size={24} />
                        </div>
                        <span className="text-[#8cb3ff] text-2xl font-bold tracking-tight">
                            Brand
                        </span>
                    </div>

                    {/* Search Bar */}
                    <div className="flex grow max-w-175 h-11 items-center border border-[#1447e6] rounded-md bg-white">
                        <SearchInput
                            className="grow h-full border-none outline-none px-4"
                            placeholder="Search"
                        />
                        <Select
                            className="h-full border-l border-gray-300"
                            options={[
                                { label: "All category", value: "" },
                                { label: "Electronics", value: "elec" },
                                { label: "Clothing", value: "cloth" },
                            ]}
                            value={category}
                            onChange={setCategory}
                        />
                        <Button className="h-full px-6 bg-[#1447e6] hover:bg-blue-700 text-white font-semibold rounded-none">
                            Search
                        </Button>
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center gap-5 shrink-0">
                        <NavIcon icon={<User size={20} />} label="Profile" />
                        <NavIcon
                            icon={<MessageSquare size={20} />}
                            label="Message"
                        />
                        <NavIcon icon={<Heart size={20} />} label="Orders" />
                        <NavIcon
                            icon={<ShoppingCart size={20} />}
                            label="My cart"
                        />
                    </div>
                </div>
            </div>

            {/* Secondary Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4 max-w-7xl mx-auto py-2">
                {/* Left Nav */}
                <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2 text-md font-semibold text-gray-800 cursor-pointer hover:text-[#1447e6]">
                        <Menu size={20} /> All Categories
                    </div>
                    <ul className="flex flex-wrap items-center gap-6 text-md font-semibold text-gray-800">
                        <li className="cursor-pointer hover:text-[#1447e6]">
                            Hot offers
                        </li>
                        <li className="cursor-pointer hover:text-[#1447e6]">
                            Gift Boxes
                        </li>
                        <li className="cursor-pointer hover:text-[#1447e6]">
                            Projects
                        </li>
                        <li className="cursor-pointer hover:text-[#1447e6]">
                            Menu Items
                        </li>
                        <li className="cursor-pointer hover:text-[#1447e6]">
                            Help
                        </li>
                    </ul>
                </div>

                {/* Right Nav */}
                <div className="flex items-center gap-4">
                    <Select
                        value={"some"}
                        options={[{ label: "English - USD", value: "some" }]}
                    />
                    <Select
                        value={"some"}
                        options={[
                            {
                                label: (
                                    <p className="flex items-center gap-2">
                                        Ship to <Flag size={18} />
                                    </p>
                                ),
                                value: "some",
                            },
                        ]}
                    />
                </div>
            </div>
        </header>
    );
};

const NavIcon = ({ icon, label }) => (
    <div className="flex flex-col items-center justify-center cursor-pointer group">
        <div className="text-gray-500 group-hover:text-[#1447e6] transition-colors">
            {icon}
        </div>
        <span className="text-xs text-gray-500 mt-1 group-hover:text-[#1447e6] transition-colors whitespace-nowrap">
            {label}
        </span>
    </div>
);

export default EcommerceHeader;
