import { useState } from "react";
import apiClient from "../apiClient";
import { PRODUCT_ROUTES } from "../routes";
import { toast } from "react-toastify";

export const useCreateProuduct = () => {
    const [loading, setLoading] = useState(false)

    const createProduct = async (product) => {
        setLoading(true)
        try {
            const response = await apiClient.post(PRODUCT_ROUTES.CREATE, product, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            if (response.data) {
                toast.success("Product created successfully")
                return response.data
            }
        } catch (error) {
            const ErrorMessage = error.response?.data?.message || "Something went wrong"
            toast.error(ErrorMessage)
            console.log("Error in Create Product", error)
            return;
        } finally {
            setLoading(false)
        }
    }
    return {
        createProduct,
        loading
    }
}

export const useGetAllProducts = () => {
    const [loading, setLoading] = useState(false)

    const getAllProducts = async () => {
        setLoading(true)
        try {
            const response = await apiClient.get(PRODUCT_ROUTES.GET_ALL)
            if (response.data) {
                return response.data
            }
        } catch (error) {
            const ErrorMessage = error.response?.data?.message || "Something went wrong"
            toast.error(ErrorMessage)
            console.log("Error in Get All Products", error)
            return;
        } finally {
            setLoading(false)
        }
    }
    return {
        getAllProducts,
        loading,
    }
}
