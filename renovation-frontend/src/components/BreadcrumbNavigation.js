import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/BreadcrumbNavigation.css';

const BreadcrumbNavigation = () => {
  const location = useLocation(); 

  // Créer le fil d'Ariane en utilisant l'URL actuelle
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="breadcrumb-wrapper">
      <div className="container">      
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Accueil</a>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;

              return isLast ? (
                <li key={to} className="breadcrumb-item active" aria-current="page">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </li>
              ) : (
                <li key={to} className="breadcrumb-item">
                  <a href={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BreadcrumbNavigation;
