// Importer le CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importations nécessaires depuis les modules React
import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';

// Importation du composant principal de l'application et du fichier de styles global
import App from './App';
import './index.css';

// Importation de l'utilitaire pour mesurer les performances de l'application web
import reportWebVitals from './reportWebVitals';

// Définir l'élément racine de votre application pour React Modal
Modal.setAppElement('#root');

// Création d'une racine React pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans le strict mode de React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si vous souhaitez mesurer les performances de votre application, utilisez reportWebVitals
// Vous pouvez passer une fonction pour consigner les résultats ou les envoyer à une destination d'analyse
// En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
