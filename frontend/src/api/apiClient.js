import axios from "axios"
import { toast } from "react-toastify"

const apiClient = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
})

apiClient.interceptors.response.use(
    response => response,
    async error => {
        if (error.response.data.message === "Unauthorized") {
            const response = await apiClient.get("/users/getAccessToken")
            if (response.data.success) {
                toast.success("Please refresh the page")
            }

        }
    }
)

export default apiClient