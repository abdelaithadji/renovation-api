import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createProject } from '../../services/projectService';
import { getClients } from '../../services/clientService';
import { getEntrepreneurs } from '../../services/entrepreneurService';



const CreateProject = () => {
  const navigate = useNavigate();

  // État pour gérer les messages de statut localement
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);

  // État pour les données du nouveau projet
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    estimated_budget: '',
    client_id: '',
    entrepreneur_id: ''
  });

  const [clients, setClients] = useState([]);
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Récupération des données des clients et entrepreneurs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsData = await getClients();
        setClients(clientsData);

        const entrepreneursData = await getEntrepreneurs();
        setEntrepreneurs(entrepreneursData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        toast.error('Erreur lors de la récupération des données.');
      }
    };
    fetchData();
  }, []);

  // Fonction pour créer un nouveau projet
  const handleCreateProject = async () => {
    setStatusMessage(null);
    setStatusType(null);
    setLoading(true);

    try {
      // Validation des champs obligatoires
      if (!newProject.name || !newProject.client_id || !newProject.entrepreneur_id) {
        toast.warn('Tous les champs marqués d\'un * sont obligatoires.');
        setLoading(false);
        return;
      }

      // Création du projet
      await createProject(newProject);

      // Afficher un toast de succès
      toast.success('Projet créé avec succès !');

      // Définir le message de succès localement
      setStatusMessage('Projet créé avec succès !');
      setStatusType('success');

      // Redirection vers la liste des projets après un court délai
      setTimeout(() => {
        navigate('/projects');
      }, 2000); 
    } catch (error) {
      console.error('Erreur lors de la création du projet :', error);

      // Afficher le toast d'erreur et définir le message localement
      toast.error('Erreur lors de la création du projet.');
      setStatusMessage('Une erreur est survenue lors de la création du projet.');
      setStatusType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Créer un Nouveau Projet</h1>
      {statusMessage && (
        <div className={`alert ${statusType === 'success' ? 'alert-success' : 'alert-danger'} mt-4`} style={{ maxWidth: '600px', margin: '0 auto' }}>
          {statusMessage}
        </div>
      )}

      <form className="mt-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group mb-3">
          <label>Nom du Projet <span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Description <span className="text-danger">*</span></label>
          <textarea
            className="form-control"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Date de Début <span className="text-danger">*</span></label>
          <input
            type="date"
            className="form-control"
            value={newProject.start_date}
            onChange={(e) => setNewProject({ ...newProject, start_date: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Date de Fin <span className="text-danger">*</span></label>
          <input
            type="date"
            className="form-control"
            value={newProject.end_date}
            onChange={(e) => setNewProject({ ...newProject, end_date: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Budget Estimé <span className="text-danger">*</span></label>
          <input
            type="number"
            className="form-control"
            value={newProject.estimated_budget}
            onChange={(e) => setNewProject({ ...newProject, estimated_budget: parseFloat(e.target.value) })}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Sélectionner le Client <span className="text-danger">*</span></label>
          <select
            className="form-control"
            value={newProject.client_id}
            onChange={(e) => setNewProject({ ...newProject, client_id: parseInt(e.target.value) })}
            required
          >
            <option value="">Sélectionner un client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>{client.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group mb-4">
          <label>Sélectionner l'Entrepreneur <span className="text-danger">*</span></label>
          <select
            className="form-control"
            value={newProject.entrepreneur_id}
            onChange={(e) => setNewProject({ ...newProject, entrepreneur_id: parseInt(e.target.value) })}
            required
          >
            <option value="">Sélectionner un entrepreneur</option>
            {entrepreneurs.map((entrepreneur) => (
              <option key={entrepreneur.id} value={entrepreneur.id}>{entrepreneur.name}</option>
            ))}
          </select>
        </div>
        <button type="button" className="btn btn-primary mt-3 w-100" onClick={handleCreateProject} disabled={loading}>
          {loading ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : 'Créer le Projet'}
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
