import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
  // State pour déterminer la visibilité du bouton
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour basculer la visibilité en fonction de la position de défilement
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      // Affiche le bouton lorsque la position de défilement dépasse 100 pixels
      setIsVisible(true);
    } else {
      // Masque le bouton lorsque la position de défilement est inférieure à 100 pixels
      setIsVisible(false);
    }
  };

  // Fonction pour faire défiler la page vers le haut de manière fluide
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Effet pour écouter les événements de défilement et mettre à jour la visibilité en conséquence
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Nettoie l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Affichage du bouton vers le haut s'il est visible
  return (
    <button
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      {/* Icône de flèche vers le haut à l'intérieur du bouton */}
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
 