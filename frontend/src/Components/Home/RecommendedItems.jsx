import ProductCard from "../ProductCard";
import { useProduct } from "../../hooks/useProduct";
import { useEffect, useState } from "react";

const RecommendedItems = () => {
    const [products, setProducts] = useState([]);
    const { fetchProducts, loading } = useProduct();

    useEffect(() => {
        (async () => {
            const response = await fetchProducts();
            if (response) {
                setProducts(response);
            }
        })();
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                Recommended items
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecommendedItems;
