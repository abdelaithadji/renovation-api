import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createEntrepreneur } from '../../services/entrepreneurService';

const CreateEntrepreneur = () => {
  const navigate = useNavigate();

  // État pour les messages d'erreur/succès local
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);

  // État pour les données du nouvel entrepreneur
  const [newEntrepreneur, setNewEntrepreneur] = useState({
    name: '',
    email: '',
    phone_number: '',
    company_name: ''
  });

  // Fonction pour créer un entrepreneur
  const handleCreate = async () => {
    try {
      await createEntrepreneur(newEntrepreneur);

      // Afficher le toast de succès
      toast.success('Entrepreneur créé avec succès !');

      // Définir un message de succès local pour affichage dans le composant
      setStatusMessage('Entrepreneur créé avec succès !');
      setStatusType('success');

      // Redirection vers la liste des entrepreneurs après un court délai
      setTimeout(() => {
        navigate('/entrepreneurs');
      }, 2000);
    } catch (error) {
      toast.error('Erreur lors de la création de l\'entrepreneur.');

      // Définir un message d'erreur local pour affichage dans le composant
      setStatusMessage('Une erreur est survenue lors de la création de l\'entrepreneur.');
      setStatusType('error');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Créer un Nouvel Entrepreneur</h1>

      {/* Affichage du message d'état */}
      {statusMessage && (
        <div className={`alert ${statusType === 'success' ? 'alert-success' : 'alert-danger'} mt-4`} style={{ maxWidth: '600px', margin: '0 auto' }}>
          {statusMessage}
        </div>
      )}

      {/* Formulaire de création */}
      <form className="mt-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group">
          <label>Nom de l'Entrepreneur</label>
          <input
            type="text"
            className="form-control"
            value={newEntrepreneur.name}
            onChange={(e) => setNewEntrepreneur({ ...newEntrepreneur, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={newEntrepreneur.email}
            onChange={(e) => setNewEntrepreneur({ ...newEntrepreneur, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Numéro de Téléphone</label>
          <input
            type="text"
            className="form-control"
            value={newEntrepreneur.phone_number}
            onChange={(e) => setNewEntrepreneur({ ...newEntrepreneur, phone_number: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Nom de l'Entreprise</label>
          <input
            type="text"
            className="form-control"
            value={newEntrepreneur.company_name}
            onChange={(e) => setNewEntrepreneur({ ...newEntrepreneur, company_name: e.target.value })}
          />
        </div>
        <button type="button" className="btn btn-primary mt-3" onClick={handleCreate}>
          Créer l'Entrepreneur
        </button>
      </form>
    </div>
  );
};

export default CreateEntrepreneur;
