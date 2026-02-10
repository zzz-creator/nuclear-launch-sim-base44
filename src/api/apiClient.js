import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const client = axios.create({
    baseURL: API_BASE_URL
});

// Add token to requests
client.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const base44 = {
    auth: {
        login: async (email, password) => {
            const { data } = await client.post('/auth/login', { email, password });
            localStorage.setItem('token', data.token);
            return data.user;
        },
        me: async () => {
            const { data } = await client.get('/auth/me');
            return data;
        },
        logout: () => {
            localStorage.removeItem('token');
        }
    },
    entities: {
        AdminAuditLog: {
            create: async (data) => {
                const { data: result } = await client.post('/entities/AdminAuditLog', data);
                return result;
            },
            filter: async (filter, sort, limit) => {
                const { data: results } = await client.post('/entities/AdminAuditLog/filter', { filter, sort, limit });
                return results;
            }
        },
        AdminAccessControl: {
            create: async (data) => {
                const { data: result } = await client.post('/entities/AdminAccessControl', data);
                return result;
            },
            update: async (id, data) => {
                const { data: result } = await client.put(`/entities/AdminAccessControl/${id}`, data);
                return result;
            },
            filter: async (filter, sort, limit) => {
                const { data: results } = await client.post('/entities/AdminAccessControl/filter', { filter, sort, limit });
                return results;
            }
        }
    },
    integrations: {
        Core: {
            InvokeLLM: async (payload) => {
                const { data } = await client.post('/ai/invoke', payload);
                return data;
            }
        }
    }
};
