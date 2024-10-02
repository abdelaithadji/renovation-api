import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from '../../assets/logo-reno.jpg';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Section bannière */}
      <div className="banner">
        <img src={logo} alt="Logo" className="banner-logo" />
        <h1 className="banner-title">Gestion des Projets</h1>
        <p className="banner-subtitle">Simplifiez la gestion de vos projets avec une plateforme intuitive et efficace.</p>
      </div>

      {/* Section fonctionnalités */}
      <div className="features-container">
        <div className="feature-box">
          <h3>Suivi des Projets</h3>
          <p>Gardez une trace de l'avancement de vos projets, de la planification à l'exécution.</p>
          <Link to="/projects" className="feature-link">Voir les Projets</Link>
        </div>
        <div className="feature-box">
          <h3>Gestion des Clients</h3>
          <p>Gérez facilement vos clients, de la création de contacts à la gestion des relations.</p>
          <Link to="/clients" className="feature-link">Voir les Clients</Link>
        </div>
        <div className="feature-box">
          <h3>Profils des Entrepreneurs</h3>
          <p>Créez et suivez les profils des entrepreneurs pour une meilleure organisation.</p>
          <Link to="/entrepreneurs" className="feature-link">Voir les Entrepreneurs</Link>
        </div>
      </div>

      {/* Section bouton d'appel à l'action */}
      <div className="cta-container">
        <Link to="/projects/create" className="cta-button">Commencer un Nouveau Projet</Link>
      </div>
    </div>
  );
};

export default HomePage;
