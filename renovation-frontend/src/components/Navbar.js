import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-reno.jpg';
import '../assets/Navbar.css'; // Assurez-vous d'importer votre fichier CSS si ce n'est pas déjà fait

const Navbar = () => {
  const [showModal, setShowModal] = useState(false); // État pour afficher/masquer la modale

  const handleLoginClick = () => {
    // Affiche le pop-up (modale)
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: '100px', marginRight: '100px' }} />
          Gestion des Projets
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Menu déroulant Projets */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="projetsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projets
              </a>
              <ul className="dropdown-menu" aria-labelledby="projetsDropdown">
                <li>
                  <Link className="dropdown-item" to="/projects">Lister les Projets</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/projects/create">Créer un Projet</Link>
                </li>
              </ul>
            </li>

            {/* Menu déroulant Clients */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="clientsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Clients
              </a>
              <ul className="dropdown-menu" aria-labelledby="clientsDropdown">
                <li>
                  <Link className="dropdown-item" to="/clients">Lister les Clients</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/clients/create">Créer un Client</Link>
                </li>
              </ul>
            </li>

            {/* Menu déroulant Entrepreneurs */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="entrepreneursDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Entrepreneurs
              </a>
              <ul className="dropdown-menu" aria-labelledby="entrepreneursDropdown">
                <li>
                  <Link className="dropdown-item" to="/entrepreneurs">Lister les Entrepreneurs</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/entrepreneurs/create">Créer un Entrepreneur</Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Bouton Connexion aligné à droite */}
          <div className="ms-auto me-3" style={{ marginRight: '20px' }}> {/* Ajoutez un espace de 20px à droite */}
            <button className="cta-button" onClick={handleLoginClick}>
              Connexion
            </button>
          </div>
        </div>
      </div>

      {/* Modale de notification */}
      {showModal && (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">En construction 🚧</h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Cette fonctionnalité est en cours de développement. Merci de votre patience ! 🙏</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
