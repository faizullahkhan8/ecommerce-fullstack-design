import { useState, useEffect } from "react";
import { LayoutGrid, List, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import SidebarFilter from "../Components/SidebarFilter";
import ProductCard from "../Components/ProductCard";
import ProductListItem from "../Components/ProductListItem";
import Pagination from "../Components/Pagination";
import { useProduct } from "../hooks/useProduct";
import { useSelector } from "react-redux";

const ProductListPage = () => {
    const [viewMode, setViewMode] = useState("grid");
    const { fetchProducts, loading } = useProduct();
    const { products, pagination } = useSelector(state => state.product);
    const [searchParams, setSearchParams] = useSearchParams();
    
    // Get query params or default
    const page = parseInt(searchParams.get("page") || "1");
    const search = searchParams.get("search") || "";
    
    useEffect(() => {
        fetchProducts({ page, search, limit: 9 });
    }, [page, search]);

    const handlePageChange = (newPage) => {
        setSearchParams(prev => {
            prev.set("page", newPage);
            return prev;
        });
        window.scrollTo(0, 0); // Scroll to top
    };

    return (
        <div className="container py-6">
            {/* Breadcrumbs */}
            <div className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                <span>Home</span> {'>'} <span>Clothings</span> {'>'} <span>Men’s wear</span> {'>'} <span className="text-gray-900">Summer clothing</span>
            </div>

            <div className="flex gap-6 items-start">
                <SidebarFilter />
                
                <div className="flex-1">
                    {/* Top Bar */}
                    <div className="bg-white border border-gray-200 rounded-lg p-3 px-4 mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="text-sm">
                             {products?.length || 0} items <span className="font-bold">found</span>
                        </div>
                        <div className="flex items-center gap-3">
                             <div className="flex border border-gray-300 rounded overflow-hidden">
                                 <button 
                                    className={`p-1.5 ${viewMode === 'list' ? 'bg-gray-200 text-black' : 'bg-white text-gray-500'}`}
                                    onClick={() => setViewMode('grid')}
                                 >
                                     <LayoutGrid size={20} />
                                 </button>
                                 <button 
                                    className={`p-1.5 ${viewMode === 'list' ? 'bg-white text-gray-500' : 'bg-gray-200 text-black'}`}
                                    onClick={() => setViewMode('list')}
                                 >
                                     <List size={20} />
                                 </button>
                             </div>
                        </div>
                    </div>

                    {/* Active Filters (Chips) */}
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                         <button className="text-primary text-sm font-medium hover:underline">Clear all filter</button>
                    </div>

                    {/* Product Grid/List */}
                    {loading ? (
                        <div className="text-center py-20">Loading products...</div>
                    ) : (
                        <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
                            {products?.map(product => (
                                viewMode === 'grid' 
                                    ? <ProductCard key={product.id} product={product} />
                                    : <ProductListItem key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                    
                    <Pagination 
                        currentPage={pagination?.currentPage || 1} 
                        totalPages={pagination?.totalPages || 1} 
                        onPageChange={handlePageChange} 
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;
