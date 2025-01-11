import axios from 'axios';

// Configure Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

export const getOrders = async () => {
  const response = await api.get('/orders');
  return response.data;
};

export const createOrder = async (orderData: any) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export const updateOrder = async (id: string, orderData: any) => {
  const response = await api.put(`/orders/${id}`, orderData);
  return response.data;
};

export const deleteOrder = async (id: string) => {
  const response = await api.delete(`/orders/${id}`);
  return response.data;
};

export default api;
