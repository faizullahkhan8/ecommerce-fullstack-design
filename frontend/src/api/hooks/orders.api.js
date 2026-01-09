import { useState } from "react";
import { ORDER_ROUTES } from "../routes";
import apiClient from "../apiClient.js";
import { toast } from "react-toastify";

export const usePlaceOrder = () => {
    const [loading, setLoading] = useState();

    const placeOrder = async (orderData) => {
        try {
            setLoading(true);
            const response = await apiClient.post(
                ORDER_ROUTES.PLACE,
                orderData
            );

            if (response.data) {
                toast.success("Order placed successfully.");
                return response.data;
            }
        } catch (error) {
            let errorMessage =
                error.response.data.message ||
                "Something went wronge. try again!";
            toast.error(errorMessage);
            console.log("Error in place order: ", error.message);
        } finally {
            setLoading(false);
        }
    };

    return { placeOrder, loading };
};

export const useGetAllOrder = () => {
    const [loading, setLoading] = useState();
    const getAllOrder = async () => {
        try {
            setLoading(true);
            const response = await apiClient.get(ORDER_ROUTES.GET_ALL);

            if (response.data) {
                return response.data;
            }
        } catch (error) {
            let errorMessage =
                error.response.data.message ||
                "Something went wronge. try again!";
            toast.error(errorMessage);
            console.log("Error in place order: ", error.message);
        } finally {
            setLoading(false);
        }
    };

    return { getAllOrder, loading };
};
