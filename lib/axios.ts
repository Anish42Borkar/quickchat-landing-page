import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // 🔥 important for cookies
});

// ✅ Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify request here (add headers, logs, etc.)
    console.log("Request sent:", config.url);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 🔁 Example: handle 401 (token expired)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call refresh endpoint (cookie-based auth)
        await axiosInstance.get("/auth/refresh");

        // Retry original request
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("Refresh failed");

        // Optional: redirect to login
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;