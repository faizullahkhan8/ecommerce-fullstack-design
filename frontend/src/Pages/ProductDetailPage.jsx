import { useState, useEffect } from "react";
import { Star, MessageSquare, ShoppingCart, Heart, ShieldCheck, Globe, Check } from "lucide-react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useCart } from "../hooks/useCart";
import { useSelector } from "react-redux";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { fetchProductById, loading } = useProduct();
  const { addItem, loading: cartLoading } = useCart();
  const product = useSelector(state => state.product.selectedProduct);
  const [activeTab, setActiveTab] = useState("Description");

  useEffect(() => {
      if (id) {
          fetchProductById(id);
      }
  }, [id]);

  if (loading || !product) {
      return <div className="p-20 text-center">Loading product details...</div>;
  }

  return (
    <div className="container py-6">
        {/* Breadcrumbs */}
        <div className="text-gray-500 text-sm mb-6 flex items-center gap-2">
            <span>Home</span> {'>'} <span>Products</span> {'>'} <span className="text-gray-900">{product.title}</span>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Images */}
                <div className="lg:col-span-1">
                    <div className="border border-gray-200 rounded flex items-center justify-center p-4 mb-4 h-80">
                         <img src={product.image} alt={product.title} className="max-h-full object-contain" />
                    </div>
                    {/* Thumbnails placeholder */}
                     <div className="flex gap-2">
                        {[1, 2, 3, 4].map(i => (
                             <div key={i} className="border border-gray-200 rounded p-1 w-14 h-14 cursor-pointer hover:border-primary">
                                 <img src={product.image} alt="Thumb" className="w-full h-full object-cover" />
                             </div>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-1">
                     <span className="text-green-600 flex items-center gap-1 text-sm font-medium mb-2"><Check size={16}/> In stock</span>
                     <h1 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h1>
                     
                     <div className="flex items-center gap-4 mb-4">
                        <div className="flex text-amber-500">
                             {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "text-amber-500" : "text-gray-300"}/>)}
                        </div>
                        <span className="text-amber-500 text-sm">{product.rating}</span>
                     </div>

                     <div className="bg-blue-50 flex items-center justify-between p-4 mb-4">
                         <div className="border-r border-gray-300 pr-4">
                             <div className="text-primary font-bold text-lg">${product.price}</div>
                             <div className="text-xs text-gray-500">50-100 pcs</div>
                         </div>
                     </div>

                     <div className="space-y-3 text-sm text-gray-600 mb-6">
                         <div className="flex"><span className="w-32 text-gray-400">Category:</span><span className="font-medium">{product.category}</span></div>
                         <div className="flex"><span className="w-32 text-gray-400">Description:</span><span className="font-medium line-clamp-2">{product.description}</span></div>
                     </div>
                </div>

                 {/* Supplier Info */}
                <div className="lg:col-span-1">
                     <div className="border border-gray-200 rounded p-4 mb-4">
                         <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-4">
                             <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center text-primary font-bold text-xl">S</div>
                             <div>
                                 <div className="font-medium text-gray-900">Supplier</div>
                                 <div className="text-sm text-gray-500">Verified Seller</div>
                             </div>
                         </div>
                         <button 
                            className="w-full bg-primary text-white py-2 rounded font-medium mb-2 hover:bg-primary-dark transition-colors disabled:opacity-50"
                            onClick={() => addItem(product)}
                            disabled={cartLoading}
                         >
                            {cartLoading ? "Adding..." : "Add to Cart"}
                         </button>
                         <button className="w-full border border-gray-200 text-primary py-2 rounded font-medium hover:bg-gray-50 transition-colors">Seller's profile</button>
                     </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
                 <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                      <div className="flex border-b border-gray-200 overflow-x-auto">
                          {["Description", "Reviews"].map((tab) => (
                              <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-gray-500 hover:text-gray-900"}`}
                              >
                                {tab}
                              </button>
                          ))}
                      </div>
                      <div className="p-6 text-gray-600 text-sm leading-relaxed">
                          {activeTab === "Description" && <p>{product.description}</p>}
                          {activeTab === "Reviews" && <p>No reviews yet.</p>}
                      </div>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default ProductDetailPage;
