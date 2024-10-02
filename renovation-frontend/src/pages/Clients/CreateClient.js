// src/pages/Clients/CreateClient.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createClient } from '../../services/clientService'; // Chemin corrigé

const CreateClient = () => {
  const navigate = useNavigate();
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: ''
  });

  const handleCreate = async () => {
    try {
      await createClient(newClient);
      toast.success('Client créé avec succès !');
      navigate('/clients');
    } catch (error) {
      toast.error('Erreur lors de la création du client.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Créer un Nouveau Client</h1>
      <form className="mt-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="form-group">
          <label>Nom du Client</label>
          <input
            type="text"
            className="form-control"
            value={newClient.name}
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={newClient.email}
            onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Numéro de Téléphone</label>
          <input
            type="text"
            className="form-control"
            value={newClient.phone_number}
            onChange={(e) => setNewClient({ ...newClient, phone_number: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Adresse</label>
          <input
            type="text"
            className="form-control"
            value={newClient.address}
            onChange={(e) => setNewClient({ ...newClient, address: e.target.value })}
          />
        </div>
        <button type="button" className="btn btn-primary mt-3" onClick={handleCreate}>
          Créer le Client
        </button>
      </form>
    </div>
  );
};

export default CreateClient;
