import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";

const ProductCard = ({ product }) => {
    const { addItem } = useCart();
    const { toggle } = useWishlist();

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevent navigation
        addItem(product);
    };

    const handleWishlist = (e) => {
        e.preventDefault();
        toggle(product);
    };

    return (
        <Link to={`/product/${product?.id}`} className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group h-full flex flex-col">
            <div className="relative pt-[100%] bg-white border-b border-gray-100">
                <img 
                    src={product?.image} 
                    alt={product?.title} 
                    className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className="font-bold text-lg text-gray-900">${product?.price}</span>
                        {product?.discount > 0 && (
                            <span className="ml-2 text-sm text-gray-400 line-through">${(product.price * 1.1).toFixed(2)}</span>
                        )}
                    </div>
                    <button 
                        onClick={handleWishlist}
                        className="p-1.5 border border-gray-200 rounded hover:border-red-200 hover:text-red-500 transition-colors"
                    >
                        <Heart size={18} />
                    </button>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-amber-500">
                         {[...Array(5)]?.map((_, i) => (
                             <Star 
                                 key={i} 
                                 size={14} 
                                 fill={i < Math.floor(product?.rating || 0) ? "currentColor" : "none"} 
                                 className={i < Math.floor(product?.rating || 0) ? "text-amber-500" : "text-gray-300"}
                             />
                         ))}
                    </div>
                    <span className="text-amber-500 text-sm">{product?.rating}</span>
                </div>
                
                <h3 className="text-gray-600 font-medium mb-4 line-clamp-2 flex-grow group-hover:text-primary transition-colors">
                    {product?.title}
                </h3>
                
                <button 
                    onClick={handleAddToCart}
                    className="w-full flex items-center justify-center gap-2 border border-gray-200 text-primary font-medium py-2 rounded hover:bg-primary hover:text-white transition-all active:scale-95"
                >
                    Add to Cart
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;
