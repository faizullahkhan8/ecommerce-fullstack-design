import clsx from "clsx";
import Button from "../../UI/Button";

const HeroSection = () => {
    const categories = [
        "Automobiles",
        "Clothes and wear",
        "Home interiors",
        "Computer and tech",
        "Tools, equipments",
        "Sports and outdoor",
        "Animal and pets",
        "Machinery tools",
        "More category",
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-4 bg-white border border-gray-200 rounded-md p-4">
                {/* 1. Sidebar Categories */}
                <div className="col-span-3">
                    <ul className="space-y-2">
                        {categories.map((cat, index) => (
                            <li
                                key={cat}
                                className={clsx(
                                    "px-3 py-2 text-md font-semibold cursor-pointer rounded-md transition-colors",
                                    index === 0
                                        ? "bg-[#e5f1ff] font-semibold text-gray-900"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                )}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 2. Main Banner */}
                <div className="col-span-6 relative overflow-hidden rounded-md h-full bg-[#afd8d3] flex items-center">
                    <div className="absolute inset-0 flex flex-col pl-12 pt-12 z-10">
                        <h2 className="text-xl text-gray-700 font-medium mb-2">
                            Latest Trending
                        </h2>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Electronic Items
                        </h1>
                        <Button variant="outline" className={"w-max"}>
                            Learn More
                        </Button>
                    </div>
                    {/* Background Image */}
                    <img
                        src="/path-to-your-headphones-image.png"
                        alt="Promotion"
                        className="absolute right-0 bottom-0 h-full w-full object-cover opacity-80 rounded-md"
                    />
                </div>

                {/* 3. Right Panels */}
                <div className="col-span-3 flex flex-col gap-4">
                    {/* User Auth Card */}
                    <div className="bg-[#e3f0ff] p-4 rounded-md flex flex-col gap-3 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 bg-[#c2dbff] rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src="/api/placeholder/44/44"
                                    alt="avatar"
                                    className="rounded-full opacity-70"
                                />
                            </div>
                            <p className="text-sm font-semibold text-gray-800 leading-tight">
                                Hi, user <br /> let's get started
                            </p>
                        </div>
                        <Button>Join Now</Button>
                        <Button variant="outline">Log In</Button>
                    </div>

                    {/* Promo Card 1 */}
                    <div className="bg-[#f38332] p-4 rounded-md text-white h-[95px] flex items-center shadow-sm">
                        <p className="text-sm leading-snug font-medium">
                            Get US $10 off <br /> with a new <br /> supplier
                        </p>
                    </div>

                    {/* Promo Card 2 */}
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
