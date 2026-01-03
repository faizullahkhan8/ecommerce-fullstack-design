import { useState } from "react";
import Input from "../../UI/Input.jsx";
import Button from "../../UI/Button.jsx";
import Select from "../../UI/Select.jsx";
import { ImageIcon, Loader } from "lucide-react";
import { useCreateProuduct } from "../../api/hooks/product.api.js";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        stock: '',
        image: null // Stores the File object
    });

    const { createProduct, loading: createProductLoading } = useCreateProuduct();

    const handleChange = (e) => {
        const { id, value, files, type } = e.target;

        if (type === 'file') {
            setProductData(prev => ({ ...prev, image: files[0] }));
        } else {
            setProductData(prev => ({ ...prev, [id]: value }));
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        if (!productData.image) return alert("Please select an image");

        const formData = new FormData();
        // 1. Append the file directly
        formData.append("image", productData.image);

        // 2. Append the rest of the data (excluding the image file from the JSON string)
        const { image, ...textData } = productData;
        formData.append("data", JSON.stringify(textData));

        const response = await createProduct(formData);
        if (response.success) {
            navigate("/admin-dashboard?tab=products-list", { replace: true });
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto max-md:my-6">
            <header className="mb-6">
                <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>
            </header>

            <form onSubmit={handleAddProduct} className="space-y-5">
                {/* Product Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                    <Input type="text" id="name" value={productData.name} placeholder="e.g. Wireless Headphones" className="w-full" onChange={handleChange} />
                </div>

                {/* Price & Stock - Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                        <Input type="number" id="price" value={productData.price} className={"w-full"} placeholder="0.00" step="0.01" onChange={handleChange} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
                        <Input type="number" id="stock" value={productData.stock} className={"w-full"} placeholder="e.g. 50" onChange={handleChange} />
                    </div>
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <Select
                        placeholder="Select category"
                        id="category"
                        value={productData.category}
                        onChange={(value) => handleChange({ target: { id: "category", value } })}
                        options={[
                            { value: "electronics", label: "Electronics" },
                            { value: "clothing", label: "Clothing" },
                            { value: "home", label: "Home & Garden" }
                        ]}
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <Input type="textarea" id="description" value={productData.description} className={"w-full"} placeholder="Provide a detailed description of the product..." rows={4} onChange={handleChange} />
                </div>

                {/* Image Upload Area */}
                <div>
                    <p className="block text-sm font-medium text-gray-700 mb-1">Product Image</p>
                    <label
                        htmlFor="image"
                        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-400 transition-all cursor-pointer overflow-hidden min-h-[200px] items-center"
                    >
                        {productData.image ? (
                            <div className="text-center">
                                <img
                                    src={URL.createObjectURL(productData.image)}
                                    alt="Preview"
                                    className="max-h-48 rounded-md mb-2 object-contain"
                                />
                                <p className="text-xs text-blue-600 font-medium">Click to change image</p>
                            </div>
                        ) : (
                            <div className="space-y-1 flex items-center justify-center flex-col">
                                <ImageIcon size={32} className="text-gray-400" />
                                <div className="flex text-sm text-gray-600">
                                    <span className="font-medium text-blue-600">Upload a file</span>
                                    <p className="pl-1 text-gray-500">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                            </div>
                        )}

                        <input
                            type="file"
                            id="image"
                            hidden
                            accept="image/*"
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="pt-4 flex items-center justify-end space-x-3 border-t">
                    <Button type="button" variant="outline" className="text-gray-600">Cancel</Button>
                    <Button type="submit" disabled={createProductLoading} className="px-8">
                        {createProductLoading ? <Loader className="animate-spin" /> : "Add Product"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct