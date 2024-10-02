import React, { useEffect, useState } from 'react';
import { getEntrepreneurs, deleteEntrepreneur } from '../../services/entrepreneurService';

const EntrepreneurList = () => {
  const [entrepreneurs, setEntrepreneurs] = useState([]);

  // Récupérer la liste des entrepreneurs à l'initialisation du composant
  useEffect(() => {
    const fetchEntrepreneurs = async () => {
      try {
        const data = await getEntrepreneurs();
        setEntrepreneurs(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des entrepreneurs :', error);
      }
    };

    fetchEntrepreneurs();
  }, []);

  // Fonction pour supprimer un entrepreneur
  const handleDelete = async (id) => {
    try {
      await deleteEntrepreneur(id);
      // Mettre à jour la liste des entrepreneurs après suppression
      setEntrepreneurs(entrepreneurs.filter(entrepreneur => entrepreneur.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'entrepreneur :', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Liste des Entrepreneurs</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Nom de l'Entreprise</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entrepreneurs.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">Aucun entrepreneur trouvé</td>
            </tr>
          ) : (
            entrepreneurs.map(entrepreneur => (
              <tr key={entrepreneur.id} className="align-middle">
                <td className="text-center">{entrepreneur.id}</td>
                <td className="text-center">{entrepreneur.name}</td>
                <td className="text-center">{entrepreneur.email}</td>
                <td className="text-center">{entrepreneur.phone_number}</td>
                <td className="text-center">{entrepreneur.company_name}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(entrepreneur.id)}
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

export default EntrepreneurList;
