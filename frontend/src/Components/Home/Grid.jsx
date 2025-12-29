import React from "react";

const Grid = ({ title, bannerImg, items }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex bg-white border border-gray-200 rounded-md overflow-hidden min-h-[260px]">
                {/* Left Banner */}
                <div
                    className="w-[280px] p-6 bg-cover bg-center flex flex-col justify-between relative"
                    style={{ backgroundImage: `url(${bannerImg})` }}
                >
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 w-36 leading-tight mb-4">
                            {title}
                        </h3>
                        <button className="px-4 py-2 bg-white text-gray-900 font-medium rounded-md shadow-sm hover:bg-gray-50 text-sm transition">
                            Source now
                        </button>
                    </div>
                </div>

                {/* Right Grid */}
                <div className="grow grid grid-cols-4 border-l border-gray-200">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="
                                relative h-36
                                px-3 py-2
                                border-r border-b border-gray-200
                                last:border-r-0
                                bg-white
                                cursor-pointer
                                hover:bg-[#fafbfc]
                                transition-all duration-200
                            "
                        >
                            {/* Text */}
                            <div className="absolute top-2 left-3 right-3 z-10">
                                <p className="text-sm font-medium text-gray-800 truncate">
                                    {item.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    From USD {item.price}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="absolute bottom-2 right-3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-18 w-18 object-contain transition-transform duration-200 hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Grid;
