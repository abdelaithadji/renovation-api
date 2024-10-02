import React, { useEffect, useState } from 'react';
import { getProjects, deleteProject } from '../../services/projectService';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  // Récupérer la liste des projets à l'initialisation du composant
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets :', error);
      }
    };

    fetchProjects();
  }, []);

  // Fonction pour supprimer un projet
  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      // Mettre à jour la liste des projets après suppression
      setProjects(projects.filter(project => project.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du projet :', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Liste des Projets</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Date de Début</th>
            <th>Date de Fin</th>
            <th>Budget Estimé</th>
            <th>Client</th>
            <th>Entrepreneur</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center">Aucun projet trouvé</td>
            </tr>
          ) : (
            projects.map(project => (
              <tr key={project.id} className="align-middle">
                <td className="text-center">{project.id}</td>
                <td className="text-center">{project.name}</td>
                <td className="text-center">{project.description}</td>
                <td className="text-center">{project.start_date}</td>
                <td className="text-center">{project.end_date}</td>
                <td className="text-center">{project.estimated_budget}</td>
                <td className="text-center">{project.client_id}</td>
                <td className="text-center">{project.entrepreneur_id}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(project.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
