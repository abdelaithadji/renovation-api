import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  // État pour stocker la liste des projets
  const [projects, setProjects] = useState([]);

  // État pour le nouveau projet
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    estimated_budget: '',
    client_id: '',
    entrepreneur_id: ''
  });

  // Fonction pour récupérer les projets depuis l'API
  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3000/projects');
      setProjects(response.data); // Mettre à jour l'état avec les projets récupérés
    } catch (error) {
      console.error('Erreur lors de la récupération des projets :', error);
    }
  };

  // Utiliser useEffect pour récupérer les projets au chargement du composant
  useEffect(() => {
    fetchProjects();
  }, []);

  // Fonction pour créer un nouveau projet
  const createProject = async () => {
    try {
      await axios.post('http://localhost:3000/projects', newProject);
      fetchProjects(); // Recharger la liste des projets après la création
      setNewProject({
        name: '',
        description: '',
        start_date: '',
        end_date: '',
        estimated_budget: '',
        client_id: '',
        entrepreneur_id: ''
      }); // Réinitialiser le formulaire
    } catch (error) {
      console.error('Erreur lors de la création du projet :', error);
    }
  };

  return (
    <div className="container">
      <h1>Liste des Projets</h1>
      {/* Afficher la liste des projets */}
      <ul>
        {projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>Description : {project.description}</p>
              <p>Budget estimé : {project.estimated_budget}</p>
              <p>Date de début : {project.start_date}</p>
              <p>Date de fin : {project.end_date}</p>
            </li>
          ))
        ) : (
          <p>Aucun projet trouvé.</p>
        )}
      </ul>

      {/* Formulaire de création de projet */}
      <h2>Créer un nouveau projet</h2>
      <div>
        <input
          type="text"
          placeholder="Nom du projet"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date de début"
          value={newProject.start_date}
          onChange={(e) => setNewProject({ ...newProject, start_date: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date de fin"
          value={newProject.end_date}
          onChange={(e) => setNewProject({ ...newProject, end_date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Budget estimé"
          value={newProject.estimated_budget}
          onChange={(e) => setNewProject({ ...newProject, estimated_budget: parseFloat(e.target.value) })}
        />
        <input
          type="number"
          placeholder="ID du client"
          value={newProject.client_id}
          onChange={(e) => setNewProject({ ...newProject, client_id: parseInt(e.target.value) })}
        />
        <input
          type="number"
          placeholder="ID de l'entrepreneur"
          value={newProject.entrepreneur_id}
          onChange={(e) => setNewProject({ ...newProject, entrepreneur_id: parseInt(e.target.value) })}
        />
        <button onClick={createProject}>Créer le projet</button>
      </div>
    </div>
  );
};

export default Projects;
