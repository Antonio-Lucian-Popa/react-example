import api from './api'; // Instanța Axios

// Funcție pentru a obține lista utilizatorilor
export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data; // Datele utilizatorilor
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error; // Re-aruncă eroarea pentru a o gestiona în componentă
  }
};

// Funcție pentru a obține un utilizator după ID
export const fetchUserById = async (userId: string) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data; // Datele utilizatorului specific
  } catch (error) {
    console.error(`Failed to fetch user with ID ${userId}:`, error);
    throw error;
  }
};
