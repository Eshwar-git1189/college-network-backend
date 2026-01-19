import axios from "axios";

const api = axios.create({
  baseURL: "https://college-network-backend.onrender.com/api",
});

export default api;
