// src/services/entrepreneurService.js
import axios from 'axios';

// URL de base de l'API pour les entrepreneurs
const BASE_URL = 'http://localhost:3000/entrepreneurs';

/**
 * Crée un nouveau entrepreneur.
 * @param {Object} entrepreneurData - Les données du nouvel entrepreneur.
 * @returns {Promise} - Promise qui résout l'entrepreneur créé.
 */
export const createEntrepreneur = async (entrepreneurData) => {
  try {
    const response = await axios.post(BASE_URL, entrepreneurData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'entrepreneur :', error);
    throw error;
  }
};

/**
 * Récupère tous les entrepreneurs depuis l'API.
 * @returns {Promise} - Promise qui résout la liste des entrepreneurs.
 */
export const getEntrepreneurs = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des entrepreneurs :', error);
    throw error;
  }
};

/**
 * Supprime un entrepreneur par son ID.
 * @param {number} id - L'ID de l'entrepreneur à supprimer.
 * @returns {Promise} - Promise de la suppression de l'entrepreneur.
 */
export const deleteEntrepreneur = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'entrepreneur :', error);
    throw error;
  }
};
