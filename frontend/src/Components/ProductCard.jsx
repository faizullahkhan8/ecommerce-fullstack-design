/**
 * ProductCard Component
 * Displays a product with image, price, rating, and action buttons
 * 
 * Used in: Homepage (Recommended Items), Product List Page
 * 
 * Performance notes:
 * - Wrapped in React.memo to prevent unnecessary re-renders
 * - Images use lazy loading to improve page load speed
 */

import { memo, useCallback } from "react";
import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";

const ProductCard = ({ product }) => {
    // Get cart and wishlist functions from custom hooks
    const { addItem } = useCart();
    const { toggle: toggleWishlist } = useWishlist();

    /**
     * Add product to cart without navigating away
     * We stop the link click event so user stays on current page
     */
    const handleAddToCart = useCallback((event) => {
        event.preventDefault(); // Don't follow the link
        event.stopPropagation(); // Don't trigger parent click handlers
        addItem(product);
    }, [product, addItem]);

    /**
     * Toggle product in wishlist (add if not there, remove if already added)
     * Also prevents navigation
     */
    const handleWishlist = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleWishlist(product);
    }, [product, toggleWishlist]);

    // Calculate original price if there's a discount
    // This is just for display purposes
    const originalPrice = product?.discount > 0 
        ? (product.price * 1.1).toFixed(2) 
        : null;

    // Generate array for star rating (1-5 stars)
    const ratingStars = Array.from({ length: 5 }, (_, index) => index);
    const roundedRating = Math.floor(product?.rating || 0);

    return (
        <Link 
            to={`/product/${product?.id}`} 
            className="block bg-white border border-gray-200 rounded-lg overflow-hidden 
                       hover:shadow-md transition-shadow group h-full flex flex-col"
        >
            {/* Product Image Container */}
            <div className="relative pt-[100%] bg-white border-b border-gray-100">
                <img 
                    src={product?.image} 
                    alt={product?.title || 'Product image'}
                    loading="lazy" // Lazy load images for better performance
                    className="absolute top-0 left-0 w-full h-full object-contain p-4 
                               group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            
            {/* Product Information */}
            <div className="p-4 flex flex-col flex-1">
                {/* Price and Wishlist Button Row */}
                <div className="flex justify-between items-start mb-2">
                    <div>
                        {/* Current Price (bold and prominent) */}
                        <span className="font-bold text-lg text-gray-900">
                            ${product?.price}
                        </span>
                        
                        {/* Original Price (crossed out if discounted) */}
                        {originalPrice && (
                            <span className="ml-2 text-sm text-gray-400 line-through">
                                ${originalPrice}
                            </span>
                        )}
                    </div>
                    
                    {/* Add to Wishlist Button */}
                    <button 
                        onClick={handleWishlist}
                        className="p-1.5 border border-gray-200 rounded 
                                   hover:border-red-200 hover:text-red-500 transition-colors"
                        aria-label="Add to wishlist"
                    >
                        <Heart size={18} />
                    </button>
                </div>
                
                {/* Star Rating */}
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-amber-500">
                        {ratingStars.map((starIndex) => (
                            <Star 
                                key={starIndex} 
                                size={14} 
                                fill={starIndex < roundedRating ? "currentColor" : "none"} 
                                className={starIndex < roundedRating ? "text-amber-500" : "text-gray-300"}
                            />
                        ))}
                    </div>
                    {/* Rating Number */}
                    <span className="text-amber-500 text-sm">
                        {product?.rating || '0'}
                    </span>
                </div>
                
                {/* Product Title (limited to 2 lines) */}
                <h3 className="text-gray-600 font-medium mb-4 line-clamp-2 flex-grow 
                               group-hover:text-primary transition-colors">
                    {product?.title || 'Product'}
                </h3>
                
                {/* Add to Cart Button */}
                <button 
                    onClick={handleAddToCart}
                    className="w-full flex items-center justify-center gap-2 
                               border border-gray-200 text-primary font-medium py-2 rounded 
                               hover:bg-primary hover:text-white transition-all active:scale-95"
                >
                    Add to Cart
                </button>
            </div>
        </Link>
    );
};

// Prevent unnecessary re-renders when parent component updates
// This makes the app faster, especially with many product cards
ProductCard.displayName = 'ProductCard';

export default memo(ProductCard);
