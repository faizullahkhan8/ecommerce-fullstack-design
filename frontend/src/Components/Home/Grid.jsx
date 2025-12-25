import React from "react";

const Grid = ({ title, bannerImg, items }) => {
    return (
        <div className="max-w-7xl mx-auto px">
            <div className="flex bg-white border border-gray-200 rounded-md overflow-hidden min-h-[250px]">
                {/* Left Banner */}
                <div
                    className="w-[280px] p-6 bg-cover bg-center flex flex-col justify-start relative"
                    style={{ backgroundImage: `url(${bannerImg})` }}
                >
                    <h3 className="text-xl font-bold text-gray-900 w-32 leading-tight mb-4">
                        {title}
                    </h3>
                    <button className="w-fit px-4 py-2 bg-white text-gray-900 font-medium rounded-md shadow-sm hover:bg-gray-50 text-sm">
                        Source now
                    </button>
                </div>

                {/* Right Grid of Products */}
                <div className="flex-grow grid grid-cols-4 border-l border-gray-200">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-4 border-r border-b border-gray-200 last:border-r-0 flex flex-col justify-between hover:shadow-inner transition-shadow cursor-pointer"
                        >
                            <div>
                                <p className="text-sm text-gray-800">
                                    {item.name}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    From <br /> USD {item.price}
                                </p>
                            </div>
                            <div className="flex justify-end mt-2">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-20 w-20 object-contain"
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
