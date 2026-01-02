/**
 * ProductDetailPage Component
 * Shows detailed information about a single product
 * 
 * Features:
 * - Product specifications and pricing tiers
 * - Supplier information with verification badges
 * - Multiple tabs (Description, Reviews, Shipping, About seller)
 * - Model specifications with features list
 */

import { useState, useEffect } from "react";
import { Star, MessageSquare, Heart, ShieldCheck, Globe, Check, Package, ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Breadcrumb from "../Components/Breadcrumb";
import { calculatePriceTiers } from "../utils/pricing";
import {
   PRODUCT_DEFAULTS,
   MODEL_SPECS,
   SUPPLIER_INFO,
   LOADING_MESSAGES
} from "../constants";


const ProductDetailPage = () => {
   const { id } = useParams();
   const [activeTab, setActiveTab] = useState("Description");

   // Breadcrumb navigation trail
   const breadcrumbItems = [
      { label: 'Home', path: '/' },
      { label: 'Clothings', path: '/products?category=clothing' },
      { label: "Men's wear", path: '/products?category=mens' },
      { label: product.title || 'Product' }
   ];

   return (
      <div className="container mx-auto px-4 py-8 md:py-12">
         {/* Breadcrumbs */}
         <Breadcrumb items={breadcrumbItems} />

         <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {/* Images */}
               <div className="lg:col-span-1">
                  <div className="border border-gray-200 rounded flex items-center justify-center p-4 mb-4 h-80">
                     <img src={product.image} alt={product.title} className="max-h-full object-contain" />
                  </div>
                  {/* Thumbnails */}
                  <div className="flex gap-2">
                     {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="border border-gray-200 rounded p-1 w-14 h-14 cursor-pointer hover:border-primary transition-colors">
                           <img src={product.image} alt="Thumb" className="w-full h-full object-cover" />
                        </div>
                     ))}
                  </div>
               </div>

               {/* Product Info */}
               <div className="lg:col-span-1">
                  <span className="text-green-600 flex items-center gap-1 text-sm font-medium mb-2">
                     <Check size={16} /> In stock
                  </span>
                  <h1 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h1>

                  {/* Rating, Reviews, and Sold Count */}
                  <div className="flex items-center gap-4 mb-4">
                     <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                           <Star
                              key={i}
                              size={16}
                              fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                              className={i < Math.floor(product.rating) ? "text-amber-500" : "text-gray-300"}
                           />
                        ))}
                     </div>
                     <span className="text-amber-500 text-sm font-medium">{product.rating}</span>
                     <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MessageSquare size={16} />
                        <span>{product.reviewCount} reviews</span>
                     </div>
                     <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Package size={16} />
                        <span>{product.soldCount} sold</span>
                     </div>
                  </div>

                  {/* Price Tiers */}
                  <div className="bg-blue-50 border border-blue-100 rounded p-4 mb-4">
                     <div className="grid grid-cols-3 gap-4">
                        {product.priceTiers.map((tier, idx) => (
                           <div key={idx} className={idx < product.priceTiers.length - 1 ? "border-r border-gray-300 pr-4" : ""}>
                              <div className="text-primary font-bold text-lg">${tier.price.toFixed(2)}</div>
                              <div className="text-xs text-gray-500">{tier.quantity}</div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Product Specifications */}
                  <div className="space-y-2 text-sm mb-4">
                     <div className="flex">
                        <span className="w-32 text-gray-400">Price:</span>
                        <span className="font-medium text-gray-900">{product.specifications.priceType}</span>
                     </div>
                     <div className="flex">
                        <span className="w-32 text-gray-400">Type:</span>
                        <span className="font-medium text-gray-900">{product.specifications.type}</span>
                     </div>
                     <div className="flex">
                        <span className="w-32 text-gray-400">Material:</span>
                        <span className="font-medium text-gray-900">{product.specifications.material}</span>
                     </div>
                     <div className="flex">
                        <span className="w-32 text-gray-400">Design:</span>
                        <span className="font-medium text-gray-900">{product.specifications.design}</span>
                     </div>
                  </div>

                  {/* Additional Specifications */}
                  <div className="space-y-2 text-sm mb-4">
                     <div className="flex">
                        <span className="w-32 text-gray-400">Customization:</span>
                        <span className="font-medium text-gray-900">{product.specifications.customization}</span>
                     </div>
                     <div className="flex">
                        <span className="w-32 text-gray-400">Protection:</span>
                        <span className="font-medium text-gray-900">{product.specifications.protection}</span>
                     </div>
                     <div className="flex">
                        <span className="w-32 text-gray-400">Warranty:</span>
                        <span className="font-medium text-gray-900">{product.specifications.warranty}</span>
                     </div>
                  </div>
               </div>

               {/* Supplier Info */}
               <div className="lg:col-span-1">
                  <div className="border border-gray-200 rounded p-4">
                     {/* Supplier Header */}
                     <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-200">
                        <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center text-primary font-bold text-xl">
                           {product.supplier?.name?.charAt(0)}
                        </div>
                        <div className="flex-1">
                           <div className="font-medium text-gray-900">{product.supplier.name}</div>
                           <div className="text-sm text-gray-500">Guangxi Trading LLC</div>
                        </div>
                     </div>

                     {/* Supplier Details */}
                     <div className="space-y-2 mb-4">
                        {/* Country */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                           <span className="text-lg">{product.supplier?.country?.flag}</span>
                           <span>{product.supplier?.country?.name}, {product.supplier?.country?.city}</span>
                        </div>

                        {/* Verified Seller */}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                           <ShieldCheck size={16} className="text-blue-600" />
                           <span>Verified Seller</span>
                        </div>

                        {/* Worldwide Shipping */}
                        {product.supplier.worldwideShipping && (
                           <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Globe size={16} className="text-green-600" />
                              <span>Worldwide shipping</span>
                           </div>
                        )}
                     </div>

                     {/* Action Buttons */}
                     {/* Add to Cart Button */}
                     <button
                        onClick={() => addItem(product)}
                        disabled={cartLoading}
                        className="w-full bg-primary text-white py-2.5 rounded font-medium mb-2 
                                     hover:bg-primary-dark transition-colors disabled:opacity-50 
                                     flex items-center justify-center gap-2"
                     >
                        <ShoppingCart size={18} />
                        <span>{cartLoading ? 'Adding...' : 'Add to Cart'}</span>
                     </button>

                     {/* Send Inquiry Button */}
                     <button
                        className="w-full border border-gray-200 text-primary py-2.5 rounded 
                                     font-medium mb-2 hover:bg-gray-50 transition-colors"
                     >
                        Send inquiry
                     </button>

                     {/* Seller's Profile Button */}
                     <button
                        className="w-full border border-gray-200 text-primary py-2.5 rounded 
                                     font-medium mb-2 hover:bg-gray-50 transition-colors"
                     >
                        Seller's profile
                     </button>

                     {/* Save for Later (Add to Wishlist) */}
                     <button
                        onClick={() => toggleWishlist(product)}
                        className="w-full border border-gray-200 text-gray-700 py-2.5 rounded 
                                     font-medium flex items-center justify-center gap-2 
                                     hover:bg-gray-50 hover:border-red-200 hover:text-red-500 
                                     transition-colors"
                     >
                        <Heart size={18} />
                        <span>Save for later</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Tabs Section */}
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
               <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  {/* Tabs */}
                  <div className="flex border-b border-gray-200 overflow-x-auto">
                     {["Description", "Reviews", "Shipping", "About seller"].map((tab) => (
                        <button
                           key={tab}
                           onClick={() => setActiveTab(tab)}
                           className={`px-6 py-3 font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
                              ? "border-primary text-primary"
                              : "border-transparent text-gray-500 hover:text-gray-900"
                              }`}
                        >
                           {tab}
                        </button>
                     ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-6">
                     {activeTab === "Description" && (
                        <div>
                           <p className="text-gray-600 text-sm leading-relaxed mb-6">
                              {product.description}
                           </p>

                           {/* Model Section */}
                           <div className="mt-6">
                              <h3 className="font-bold text-gray-900 mb-4">Model</h3>
                              <div className="grid grid-cols-2 gap-4 mb-6">
                                 <div className="flex">
                                    <span className="w-24 text-gray-400 text-sm">Style</span>
                                    <span className="font-medium text-gray-900 text-sm">{product.model.style}</span>
                                 </div>
                                 <div className="flex">
                                    <span className="w-24 text-gray-400 text-sm">Certificate</span>
                                    <span className="font-medium text-gray-900 text-sm">{product.model.certificate}</span>
                                 </div>
                                 <div className="flex">
                                    <span className="w-24 text-gray-400 text-sm">Size</span>
                                    <span className="font-medium text-gray-900 text-sm">{product.model.size}</span>
                                 </div>
                                 <div className="flex">
                                    <span className="w-24 text-gray-400 text-sm">Memory</span>
                                    <span className="font-medium text-gray-900 text-sm">{product.model.memory}</span>
                                 </div>
                              </div>

                              {/* Features */}
                              <div className="space-y-2">
                                 {product.model?.features?.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                       <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                                       <span>{feature}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     )}

                     {activeTab === "Reviews" && (
                        <div className="text-gray-600 text-sm">
                           <p>No reviews yet.</p>
                        </div>
                     )}

                     {activeTab === "Shipping" && (
                        <div className="text-gray-600 text-sm">
                           <p>Worldwide shipping available. Contact seller for shipping details and rates.</p>
                        </div>
                     )}

                     {activeTab === "About seller" && (
                        <div className="text-gray-600 text-sm">
                           <h3 className="font-bold text-gray-900 mb-2">{product.supplier?.name}</h3>
                           <p className="mb-2">Location: {product.supplier?.country?.name}, {product.supplier?.country?.city}</p>
                           <p>Verified seller with worldwide shipping capabilities.</p>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetailPage;
