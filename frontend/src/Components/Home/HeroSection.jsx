import { useState } from "react";
import Button from "../../UI/Button";
import avatarImg from "../../assets/images/phone.png";
import laptop from "../../assets/images/laptop.png";
import tshirt from "../../assets/images/t-shirt.png";
import sofas from "../../assets/images/sofas.png";
import mixer from "../../assets/images/kitchen-mixer.png";
import shoes from "../../assets/images/shoes.png";
import plant from "../../assets/images/plant-gumla.png";
import blender from "../../assets/images/blender.png";
import bag from "../../assets/images/bag.png";

const HeroSection = () => {
    const categories = [
        {
            key: "Automobiles",
            title: "Cars & Vehicles",
            subtitle: "Find reliable vehicle parts",
            img: laptop,
        },
        {
            key: "Clothes and wear",
            title: "Clothing & Fashion",
            subtitle: "Trending apparel and styles",
            img: tshirt,
        },
        {
            key: "Home interiors",
            title: "Home Interiors",
            subtitle: "Comfortable and modern living",
            img: sofas,
        },
        {
            key: "Computer and tech",
            title: "Computer & Tech",
            subtitle: "Latest gadgets and laptops",
            img: laptop,
        },
        {
            key: "Tools, equipments",
            title: "Tools & Equipment",
            subtitle: "Durable tools for professionals",
            img: mixer,
        },
        {
            key: "Sports and outdoor",
            title: "Sports & Outdoor",
            subtitle: "Gear for all activities",
            img: shoes,
        },
        {
            key: "Animal and pets",
            title: "Pets & Supplies",
            subtitle: "Everything for your pets",
            img: plant,
        },
        {
            key: "Machinery tools",
            title: "Machinery & Tools",
            subtitle: "Industrial-grade machines",
            img: blender,
        },
        {
            key: "More category",
            title: "More Categories",
            subtitle: "Explore more products",
            img: bag,
        },
    ];

    const [selected, setSelected] = useState(0);

    return (
        <div className="w-full">
            {/* --- Mobile View: Only Middle Banner --- */}
            <div className="lg:hidden w-full bg-[#afd8d3] relative">
                <div className="relative w-full min-h-[250px] flex items-center justify-start px-4">
                    <div className="relative z-10 flex flex-col gap-2 max-w-[250px]">
                        <h2 className="text-lg font-medium text-gray-700">
                            Latest Trending
                        </h2>
                        <h1 className="text-2xl font-bold text-gray-900">
                            {categories[selected].title}
                        </h1>
                        <p className="text-sm text-gray-700">
                            {categories[selected].subtitle}
                        </p>
                        <Button
                            variant="outline"
                            className="w-max text-sm py-2 px-5 bg-white border-none shadow-sm hover:bg-gray-100"
                        >
                            Source now
                        </Button>
                    </div>
                    <img
                        src={categories[selected].img}
                        alt={categories[selected].title}
                        className="absolute right-0 bottom-0 h-full w-auto object-contain"
                    />
                </div>
            </div>

            {/* --- Desktop View: Full Layout with Sidebar and Right Panels --- */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-4 bg-white border border-gray-200 rounded-md p-4">
                {/* Sidebar */}
                <div className="col-span-3">
                    <ul className="space-y-2">
                        {categories.map((cat, index) => (
                            <li
                                key={cat.key}
                                onClick={() => setSelected(index)}
                                className={`px-3 py-2 font-semibold cursor-pointer rounded-md select-none transition-colors ${
                                    index === selected
                                        ? "bg-[#e5f1ff] text-gray-900"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                            >
                                {cat.key}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Middle Banner */}
                <div className="col-span-6 relative overflow-hidden rounded-md h-[350px] flex items-center bg-[#afd8d3]">
                    <div className="relative flex flex-col pl-12 pt-12 z-10">
                        <h2 className="text-xl text-gray-700 font-medium mb-2">
                            Latest Trending
                        </h2>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {categories[selected].title}
                        </h1>
                        <p className="text-sm text-gray-700 mb-4 max-w-lg">
                            {categories[selected].subtitle}
                        </p>
                        <Button variant="outline" className="w-max">
                            Source now
                        </Button>
                    </div>
                    <img
                        src={categories[selected].img}
                        alt={categories[selected].title}
                        className="absolute right-0 top-0 h-full w-full object-cover opacity-90 rounded-md"
                    />
                </div>

                {/* Right Panels */}
                <div className="col-span-3 flex flex-col gap-4">
                    <div className="bg-[#e3f0ff] p-4 rounded-md flex flex-col gap-3 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src={avatarImg}
                                    alt="avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm font-semibold text-gray-800 leading-tight">
                                Hi, user <br /> let's get started
                            </p>
                        </div>
                        <Button className="w-full text-sm">Join Now</Button>
                        <Button
                            variant="outline"
                            className="w-full text-sm bg-white"
                        >
                            Log In
                        </Button>
                    </div>

                    <div className="bg-[#f38332] p-4 rounded-md text-white h-[95px] flex items-center shadow-sm">
                        <p className="text-sm leading-snug font-medium">
                            Get US $10 off <br /> with a new <br /> supplier
                        </p>
                    </div>

                    <div className="bg-[#55bdc3] p-4 rounded-md text-white h-[95px] flex items-center shadow-sm">
                        <p className="text-sm leading-snug font-medium">
                            Send quotes with <br /> supplier <br /> preferences
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
