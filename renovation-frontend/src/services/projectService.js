// src/services/projectService.js
import axios from 'axios';

// URL de base de l'API
const BASE_URL = 'http://localhost:3000/projects';

/**
 * Crée un nouveau projet.
 * @param {Object} projectData - Les données du projet à créer.
 * @returns {Promise} - Promise qui résout le projet créé.
 */
export const createProject = async (projectData) => {
  try {
    const response = await axios.post(BASE_URL, projectData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du projet :', error);
    throw error;
  }
};

/**
 * Récupère tous les projets depuis l'API.
 * @returns {Promise} - Promise qui résout la liste des projets.
 */
export const getProjects = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des projets :', error);
    throw error;
  }
};

/**
 * Supprime un projet par son ID.
 * @param {number} id - L'ID du projet à supprimer.
 * @returns {Promise} - Promise de la suppression du projet.
 */
export const deleteProject = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error('Erreur lors de la suppression du projet :', error);
    throw error;
  }
};
