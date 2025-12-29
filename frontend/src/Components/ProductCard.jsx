import React from "react";

const ProductCard = ({ image, price, title }) => {
    return (
        <div
            className="
                bg-white border border-gray-200 rounded-md
                p-4 flex flex-col h-full
                cursor-pointer
                hover:shadow-md hover:-translate-y-[1px]
                transition-all duration-200
            "
        >
            {/* Image */}
            <div className="h-36 flex items-center justify-center mb-4 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="
                        max-h-full max-w-full object-contain
                        mix-blend-multiply
                        transition-transform duration-200
                        hover:scale-105
                    "
                />
            </div>

            {/* Details */}
            <div className="mt-auto">
                <span className="block text-gray-900 font-semibold text-lg leading-tight">
                    ${price}
                </span>
                <p className="text-gray-500 text-sm mt-1 leading-snug line-clamp-2">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
