import axios from 'axios';

const isProd = import.meta.env.MODE === 'production';

const api = axios.create({
  baseURL: isProd
    ? 'https://jarvis-backend-e31w.onrender.com/api'
    : (import.meta.env.VITE_API_URL || 'http://localhost:5001/api'),
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token from localStorage
api.interceptors.request.use((config) => {
  const user = localStorage.getItem('ccUser');
  if (user) {
    const parsed = JSON.parse(user);
    if (parsed?.token) config.headers.Authorization = `Bearer ${parsed.token}`;
  }
  return config;
});

// Handle 401 globally
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('ccUser');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default api;
