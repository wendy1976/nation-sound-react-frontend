import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  useEffect(() => {
    const loadBootstrap = async () => {
      try {
        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        console.log('Bootstrap JavaScript chargé avec succès', bootstrap);
        // Vous pouvez effectuer des initialisations supplémentaires ici si nécessaire
      } catch (error) {
        console.error('Erreur lors du chargement de Bootstrap JavaScript', error);
      }
    };

    loadBootstrap();
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

