import axios from 'axios';

const API_URL = 'https://puntos-venta-api-production.up.railway.app/api/puntos';

export const getPuntos = () => axios.get(API_URL);

export const createPunto = (data) => axios.post(API_URL, data);

export const updatePunto = (id, data) => axios.put(`${API_URL}/${id}`, data);

export const deletePunto = (id) => axios.delete(`${API_URL}/${id}`);
