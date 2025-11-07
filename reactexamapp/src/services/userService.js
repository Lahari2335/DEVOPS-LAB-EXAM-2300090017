// userservice.js
import axios from "axios";

// Base URL from Vite env (must start with VITE_)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:30022/api";

// Create axios instance for /users routes
const api = axios.create({
  baseURL: `${API_BASE_URL}/users`,
});

// Register a new user
export const register = (user) => api.post("/register", user);

// Login a user
export const login = (username, password) => api.post("/login", { username, password });

// Get user details by ID
export const getUser = (id) => api.get(`/${id}`);
