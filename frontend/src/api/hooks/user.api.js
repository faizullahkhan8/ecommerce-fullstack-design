import { USER_ROUTES } from "../routes";
import apiClient from "../apiClient";
import { toast } from "react-toastify";
import { useState } from "react";

export const useRegisterUser = () => {
    const [loading, setLoading] = useState(false)

    const registerUser = async (user) => {
        setLoading(true)
        try {
            const response = await apiClient.post(USER_ROUTES.REGISTER, user)

            if (response.data) {
                toast.success("User registered successfully")
                return response.data
            }
        } catch (error) {
            const ErrorMessage = error.response?.data?.message || "Something went wrong"
            toast.error(ErrorMessage)
            console.log("Error in Register User", error)
            return;
        } finally {
            setLoading(false)
        }
    }
    return {
        registerUser,
        loading
    }
}

export const useLoginUser = () => {
    const [loading, setLoading] = useState(false)

    const loginUser = async (user) => {
        setLoading(true)
        try {
            const response = await apiClient.post(USER_ROUTES.LOGIN, user)

            if (response.data) {
                toast.success("User logged in successfully")
                return response.data
            }
        } catch (error) {
            const ErrorMessage = error.response?.data?.message || "Something went wrong"
            toast.error(ErrorMessage)
            console.log("Error in Login User", error)
            return;
        } finally {
            setLoading(false)
        }
    }
    return {
        loginUser,
        loading
    }
}

export const useLogoutUser = () => {
    const [loading, setLoading] = useState(false)

    const logoutUser = async () => {
        setLoading(true)
        try {
            const response = await apiClient.post(USER_ROUTES.LOGOUT)

            if (response.data) {
                toast.success("User logged out successfully")
                return response.data
            }
        } catch (error) {
            const ErrorMessage = error.response?.data?.message || "Something went wrong"
            toast.error(ErrorMessage)
            console.log("Error in Logout User", error)
            return;
        } finally {
            setLoading(false)
        }
    }
    return {
        logoutUser,
        loading
    }
}

export const useGetUser = () => {
    const [loading, setLoading] = useState(false)

    const getUser = async ({ userId }) => {
        setLoading(true)
        try {
            const response = await apiClient.get(`${USER_ROUTES.GET_USER}/${userId}`)

            if (response.data) {
                return response.data
            }
        } catch (error) {
            const ErrorMessage = error.response?.data?.message || "Something went wrong"
            toast.error(ErrorMessage)
            console.log("Error in Get User", error)
            return;
        } finally {
            setLoading(false)
        }
    }
    return {
        getUser,
        loading
    }
}

export const useUpdateUser = () => {
    const [loading, setLoading] = useState(false)

    const updateUser = async ({ userId, user }) => {
        setLoading(true)
        try {
            const response = await apiClient.put(`${USER_ROUTES.UPDATE_USER}/${userId}`, user)

            if (response.data) {
                toast.success("User updated successfully")
                return response.data
            }
        } catch (error) {
            const ErrorMessage = error.response?.data?.message || "Something went wrong"
            toast.error(ErrorMessage)
            console.log("Error in Update User", error)
            return;
        } finally {
            setLoading(false)
        }
    }
    return {
        updateUser,
        loading
    }
}
