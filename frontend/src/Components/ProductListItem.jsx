import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductListItem = ({ product }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow">
            {/* Image */}
            <div className="w-full md:w-48 h-48 flex-shrink-0 flex items-center justify-center">
                <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${
                        product?.image
                    }`}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                            {product.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl font-bold text-gray-900">
                                Rs: {product.price}
                            </span>
                            <span className="text-gray-400 line-through text-sm">
                                Rs:{product.price + 500}
                            </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                            <div className="flex text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        fill={i < 4 ? "currentColor" : "none"}
                                        className={
                                            i < 4
                                                ? "text-amber-500"
                                                : "text-gray-300"
                                        }
                                    />
                                ))}
                            </div>
                            <span>7.5</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>154 orders</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="text-green-600">
                                Free Shipping
                            </span>
                        </div>
                    </div>
                    <button className="p-2 border border-gray-200 rounded-md hover:border-primary hover:text-primary transition-colors">
                        <Heart size={20} />
                    </button>
                </div>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {product.description ||
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                </p>

                <Link
                    to={`/product/${product?._id}`}
                    className="text-primary font-medium text-sm hover:underline"
                >
                    View details
                </Link>
            </div>
        </div>
    );
};

export default ProductListItem;
