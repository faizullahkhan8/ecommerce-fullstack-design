import { useState } from 'react';
import { useDispatch } from 'react-redux';
import apiClient from '../api/apiClient';
import { addOrder } from '../store/slices/orderSlice';
import { clearCart } from '../store/slices/cartSlice';
import { toast } from 'react-toastify';

export const useOrder = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const placeOrder = async (orderData) => {
        setLoading(true);
        try {
            const response = await apiClient.post("/orders", orderData);
            if (response.data) {
                // Simulate order object returned from backend
                const newOrder = {
                    ...orderData,
                    id: Math.floor(Math.random() * 10000),
                    date: new Date().toISOString(),
                    status: 'Pending'
                };
                dispatch(addOrder(newOrder));
                dispatch(clearCart());
                toast.success("Order placed successfully!");
                return newOrder;
            }
        } catch (error) {
            toast.error("Failed to place order.");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { loading, placeOrder };
};
