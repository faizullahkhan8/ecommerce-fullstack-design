import { useState } from 'react';
import { useDispatch } from 'react-redux';
import apiClient from '../api/apiClient';
import { loginSuccess, logout } from '../store/slices/authSlice';
import { toast } from 'react-toastify';

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const login = async (credentials) => {
        setLoading(true);
        try {
            const response = await apiClient.post("/auth/login", credentials);
            if (response.data) {
                dispatch(loginSuccess(response.data));
                toast.success("Login successful!");
                return response.data;
            }
        } catch (error) {
            toast.error("Login failed. Please check credentials.");
            return null;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        setLoading(true);
        try {
            const response = await apiClient.post("/auth/register", userData);
            if (response.data) {
                toast.success("Registration successful! Please login.");
                return response.data;
            }
        } catch (error) {
             toast.error("Registration failed.");
             return null;
        } finally {
            setLoading(false);
        }
    };

    const signOut = () => {
        dispatch(logout());
        toast.info("Logged out.");
    };

    return { loading, login, register, signOut };
};
