import { useState } from 'react';
import { useDispatch } from 'react-redux';
import apiClient from '../api/apiClient'; // We might use this for syncing later
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';
import { toast } from 'react-toastify';

export const useCart = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    // In a real app, this might sync with backend.
    // For now, it updates Redux and simulates an API call delay if strictly needed, 
    // but usually cart actions are optimistic. I'll make them simple dispatchers 
    // but wrapped in the requested pattern if "API interaction" is implied.
    // However, the user said "All API interactions...". Pure redux actions might not need it,
    // but let's simulate a sync call for "addItem" to adhere to the requested pattern strictly.

    const addItem = async (product) => {
        setLoading(true);
        try {
            // Simulate API call
            await apiClient.post("/cart/add", { productId: product.id });
            dispatch(addToCart(product));
            toast.success("Added to cart");
        } catch (error) {
            toast.error("Failed to add to cart");
        } finally {
            setLoading(false);
        }
    };

    const removeItem = (id) => {
        // Simple synchronous action for better UX, or wrap in async if needed.
        // Let's keep it simple for remove.
        dispatch(removeFromCart(id));
        toast.info("Item removed");
    };

    const updateItemQuantity = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    return { loading, addItem, removeItem, updateItemQuantity };
};
