import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('admin_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Handle response errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('admin_token');
            window.location.href = '/admin/login';
        }
        return Promise.reject(error);
    }
);

// Rooms API
export const roomsAPI = {
    getAll: (params) => api.get('/rooms', { params }),
    getById: (id) => api.get(`/rooms/${id}`),
    create: (data) => api.post('/rooms', data),
    update: (id, data) => api.put(`/rooms/${id}`, data),
    delete: (id) => api.delete(`/rooms/${id}`),
};

// Reviews API
export const reviewsAPI = {
    getApproved: (params) => api.get('/reviews', { params }),
    submit: (data) => api.post('/reviews', data),
    getAll: (params) => api.get('/reviews/admin/all', { params }),
    approve: (id) => api.put(`/reviews/${id}/approve`),
    delete: (id) => api.delete(`/reviews/${id}`),
};

// Gallery API
export const galleryAPI = {
    getAll: (params) => api.get('/gallery', { params }),
    upload: (data) => api.post('/gallery', data),
    delete: (id) => api.delete(`/gallery/${id}`),
};

// Contact API
export const contactAPI = {
    submit: (data) => api.post('/contact', data),
    getAll: () => api.get('/contact/all'),
};

// Admin API
export const adminAPI = {
    login: (data) => api.post('/admin/login', data),
    getDashboard: () => api.get('/admin/dashboard'),
};

export default api;
