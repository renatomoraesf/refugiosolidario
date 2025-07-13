// import axios from 'axios';

// // Configuração base da API
// const apiClient = axios.create({
//   baseURL: 'http://localhost:8080/api', // URL da sua API
//   timeout: 10000, // 10 segundos
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`
//   }
// });

// // Interceptador para adicionar token antes de cada requisição
// apiClient.interceptors.request.use(config => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// // Interceptador para tratamento global de erros
// apiClient.interceptors.response.use(response => response, error => {
//   if (error.response) {
//     // Tratamento de erros comuns
//     switch (error.response.status) {
//       case 401:
//         // Token expirado ou inválido
//         localStorage.removeItem('authToken');
//         window.location.href = '/login';
//         break;
//       case 403:
//         // Acesso negado
//         alert('Você não tem permissão para esta ação');
//         break;
//       case 500:
//         // Erro interno do servidor
//         alert('Erro interno do servidor. Tente novamente mais tarde.');
//         break;
//       default:
//         console.error('Erro na requisição:', error);
//     }
//   }
//   return Promise.reject(error);
// });

// // Serviços para Refugiados
// const RefugeeService = {
//     getAll: async (params = {}) => {
//         try {
//             const response = await apiClient.get('/refugees', { params });
//             return response.data;
//         } catch (error) {
//             throw new Error('Falha ao carregar refugiados');
//         }
//     },

//     getById: async (id) => {
//         try {
//             const response = await apiClient.get(`/refugees/${id}`);
//             return response.data;
//         } catch (error) {
//             throw new Error(`Falha ao carregar refugiado com ID ${id}`);
//         }
//     },

//     create: async (refugeeData) => {
//         try {
//             const response = await apiClient.post('/refugees', refugeeData);
//             return response.data;
//         } catch (error) {
//             throw new Error('Falha ao criar refugiado');
//         }
//     },

//     update: async (id, refugeeData) => {
//         try {
//             const response = await apiClient.put(`/refugees/${id}`, refugeeData);
//             return response.data;
//         } catch (error) {
//             throw new Error(`Falha ao atualizar refugiado com ID ${id}`);
//         }
//     },

//     delete: async (id) => {
//         try {
//             const response = await apiClient.delete(`/refugees/${id}`);
//             return response.data;
//         } catch (error) {
//             throw new Error(`Falha ao excluir refugiado com ID ${id}`);
//         }
//     }
// };

// export default {
//     RefugeeService
// };
