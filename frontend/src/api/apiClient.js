import axios from 'axios';
import { mockProducts, mockUser, mockCategories } from './mockData';

// Mocking logic
const mockDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const apiClient = {
    get: async (url, config = {}) => { // Added config parameter to handle params
        await mockDelay(600); // Simulate network delay
        console.log(`[Mock API] GET ${url}`, config.params || {});

        // Mock GET requests
        if (url === '/products') {
            const { page = 1, limit = 9, search = '' } = config.params || {};
            let filteredProducts = mockProducts;

            if (search) {
                const lowerSearch = search.toLowerCase();
                filteredProducts = mockProducts.filter(p => 
                    p.title.toLowerCase().includes(lowerSearch) || 
                    p.category.toLowerCase().includes(lowerSearch)
                );
            }

            const total = filteredProducts.length;
            const start = (page - 1) * limit;
            const end = start + limit;
            const paginatedProducts = filteredProducts.slice(start, end);

            return {
                data: paginatedProducts,
                total: total,
                page: parseInt(page),
                totalPages: Math.ceil(total / limit)
            };
        }
        if (url.startsWith('/products/')) {
            const id = parseInt(url.split('/').pop());
            const product = mockProducts.find(p => p.id === id);
            return { data: product || null };
        }
        if (url === '/categories') return { data: mockCategories };
        if (url === '/user/profile') return { data: mockUser };
        
        return { data: {} };
    },
    post: async (url, payload) => {
        await mockDelay(800);
        console.log(`[Mock API] POST ${url}`, payload);

        if (url === '/auth/login') {
            if (payload.email === 'user@example.com' && payload.password === 'password') {
                 return { data: mockUser };
            }
            // For demo purposes, let any login work if not specifically failing
            return { data: mockUser };
        }
        if (url === '/auth/register') {
            return { data: mockUser };
        }
        if (url === '/cart/add') {
             return { data: { success: true, message: "Added to cart" } };
        }

        return { data: payload };
    },
    put: async (url, payload) => {
        await mockDelay(600);
         console.log(`[Mock API] PUT ${url}`, payload);
        return { data: payload };
    },
    delete: async (url) => {
        await mockDelay(600);
         console.log(`[Mock API] DELETE ${url}`);
        return { data: { success: true } };
    }
};

export default apiClient;
