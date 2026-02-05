// API Service for backend communication
const API = {
    // Base configuration
    baseURL: CONFIG.API_URL,

    // Helper method for making fetch requests
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'API request failed');
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },

    // GET request
    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    },

    // POST request
    async post(endpoint, body) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    },

    // PUT request
    async put(endpoint, body) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
    },

    // DELETE request
    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    },

    // Specific API endpoints
    rooms: {
        getAll: () => API.get('/rooms'),
        getById: (id) => API.get(`/rooms/${id}`),
    },

    gallery: {
        getAll: () => API.get('/gallery'),
        getByCategory: (category) => API.get(`/gallery?category=${category}`),
    },

    reviews: {
        getAll: (sort = 'recent') => API.get(`/reviews?sort=${sort}`),
        create: (data) => API.post('/reviews', data),
    },

    contact: {
        submit: (data) => API.post('/contact', data),
    },
};
