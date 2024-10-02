import axios from 'axios';

// URL de base de l'API
const BASE_URL = 'http://localhost:3000/clients';

/**
 * Récupère tous les clients depuis l'API.
 * @returns {Promise} - Promise qui résout la liste des clients.
 */
export const getClients = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des clients :', error);
    throw error;
  }
};

/**
 * Récupère un client spécifique par son ID.
 * @param {number} id - L'ID du client.
 * @returns {Promise} - Promise qui résout le client.
 */
export const getClientById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du client avec ID ${id} :`, error);
    throw error;
  }
};

/**
 * Crée un nouveau client.
 * @param {Object} clientData - Les données du client à créer.
 * @returns {Promise} - Promise qui résout le client créé.
 */
export const createClient = async (clientData) => {
  try {
    const response = await axios.post(BASE_URL, clientData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du client :', error);
    throw error;
  }
};

/**
 * Met à jour un client existant.
 * @param {number} id - L'ID du client à mettre à jour.
 * @param {Object} clientData - Les nouvelles données du client.
 * @returns {Promise} - Promise qui résout le client mis à jour.
 */
export const updateClient = async (id, clientData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, clientData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du client avec ID ${id} :`, error);
    throw error;
  }
};

/**
 * Supprime un client par son ID.
 * @param {number} id - L'ID du client à supprimer.
 * @returns {Promise} - Promise de la suppression du client.
 */
export const deleteClient = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Erreur lors de la suppression du client avec ID ${id} :`, error);
    throw error;
  }
};
