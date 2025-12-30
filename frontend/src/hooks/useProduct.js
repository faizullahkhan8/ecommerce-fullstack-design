import { useState } from 'react';
import { useDispatch } from 'react-redux';
import apiClient from '../api/apiClient';
import { setProducts, setCategories, setSelectedProduct } from '../store/slices/productSlice';
import { toast } from 'react-toastify';

export const useProduct = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const fetchProducts = async (params = {}) => {
        setLoading(true);
        try {
            const response = await apiClient.get("/products", { params });
            dispatch(setProducts(response.data));
        } catch (error) {
            console.error("Failed to fetch products", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchProductById = async (id) => {
        setLoading(true);
        try {
            const response = await apiClient.get(`/products/${id}`);
            if (response.data) {
                dispatch(setSelectedProduct(response.data));
                return response.data;
            }
        } catch (error) {
            toast.error("Failed to load product details.");
            return null;
        } finally {
            setLoading(false);
        }
    };
    
    const fetchCategories = async () => {
         setLoading(true);
        try {
            const response = await apiClient.get("/categories");
            if (response.data) {
                dispatch(setCategories(response.data));
                return response.data;
            }
        } catch (error) {
            console.error("Failed to load categories");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { loading, fetchProducts, fetchProductById, fetchCategories };
};
