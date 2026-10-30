
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Automatically attach the saved JWT token
api.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const userData = localStorage.getItem("user");

            if (userData) {
                try {
                    const user = JSON.parse(userData);

                    if (user.token) {
                        config.headers.Authorization = `Bearer ${user.token}`;
                    }
                } catch (error) {
                    console.error("Invalid saved user data");
                }
            }
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
