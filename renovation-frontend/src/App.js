import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BreadcrumbNavigation from './components/BreadcrumbNavigation';
import HomePage from './pages/Home/HomePage';
import ClientList from './pages/Clients/ClientList';
import CreateClient from './pages/Clients/CreateClient';
import ProjectList from './pages/Projects/ProjectList';
import CreateProject from './pages/Projects/CreateProject';
import EntrepreneurList from './pages/Entrepreneurs/EntrepreneurList';
import CreateEntrepreneur from './pages/Entrepreneurs/CreateEntrepreneur';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Routes pour les clients */}
          <Route
            path="/clients"
            element={
              <>
                <BreadcrumbNavigation />
                <ClientList />
              </>
            }
          />
          <Route
            path="/clients/create"
            element={
              <>
                <BreadcrumbNavigation />
                <CreateClient />
              </>
            }
          />

          {/* Routes pour les entrepreneurs */}
          <Route
            path="/entrepreneurs"
            element={
              <>
                <BreadcrumbNavigation />
                <EntrepreneurList />
              </>
            }
          />
          <Route
            path="/entrepreneurs/create"
            element={
              <>
                <BreadcrumbNavigation />
                <CreateEntrepreneur />
              </>
            }
          />

          {/* Routes pour les projets */}
          <Route
            path="/projects"
            element={
              <>
                <BreadcrumbNavigation />
                <ProjectList />
              </>
            }
          />
          <Route
            path="/projects/create"
            element={
              <>
                <BreadcrumbNavigation />
                <CreateProject />
              </>
            }
          />

          {/* Route par défaut */}
          <Route path="*" element={<h1>Page non trouvée</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
