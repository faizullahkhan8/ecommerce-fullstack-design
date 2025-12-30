import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const WishlistPage = () => {
    const items = useSelector(state => state.wishlist.items);

    return (
        <div className="container py-6">
            <h1 className="text-xl font-bold mb-6">My Wishlist ({items.length})</h1>
             {items.length === 0 ? (
                <div className="text-center py-20 bg-white border border-gray-200 rounded-lg">
                    <p className="text-gray-500 mb-4">Your wishlist is empty</p>
                    <Link to="/products" className="text-primary hover:underline">Browse Products</Link>
                </div>
             ) : (
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                     {items.map(product => (
                         <ProductCard key={product.id} product={product} />
                     ))}
                 </div>
             )}
        </div>
    );
};

export default WishlistPage;
