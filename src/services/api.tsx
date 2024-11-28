import axios from 'axios';

// Instanță Axios configurată
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // URL-ul backend-ului tău
  timeout: 5000, // Timeout de 5 secunde
});

// Interceptoare pentru a gestiona răspunsurile și erorile
api.interceptors.response.use(
  (response) => {
    // Răspuns valid
    return response;
  },
  (error) => {
    // Gestionare erori
    if (error.response) {
      console.error('Error Status:', error.response.status);
      console.error('Error Data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
