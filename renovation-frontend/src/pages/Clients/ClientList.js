import React, { useEffect, useState } from 'react';
import { getClients, deleteClient } from '../../services/clientService';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  // Récupérer la liste des clients à l'initialisation du composant
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsData = await getClients();
        setClients(clientsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des clients :', error);
      }
    };

    fetchClients();
  }, []);

  // Fonction pour gérer la suppression d'un client
  const handleDelete = async (id) => {
    try {
      await deleteClient(id);
      // Mettre à jour la liste des clients localement après la suppression
      setClients(clients.filter(client => client.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du client :', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Liste des Clients</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clients.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">Aucun client trouvé</td>
            </tr>
          ) : (
            clients.map(client => (
              <tr key={client.id} className="align-middle">
                <td className="text-center">{client.id}</td>
                <td className="text-center">{client.name}</td>
                <td className="text-center">{client.email}</td>
                <td className="text-center">{client.phone_number}</td>
                <td className="text-center">{client.address}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(client.id)}
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

export default ClientList;
