import React, { useEffect, useState } from 'react';
import './FestivalCountdown.css'; // Importer le fichier CSS pour les styles

const FestivalCountdown = () => {
  // Définir la date du festival
  const festivalDate = new Date('2024-06-21');

  // Supprimer la variable inutilisée
  // const currentDate = new Date();

  // Calculer le temps restant jusqu'au festival
  const calculateTimeRemaining = () => {
    const newCurrentDate = new Date();
    const newTimeRemaining = festivalDate - newCurrentDate;

    // Calculer les jours, heures, minutes et secondes restants
    const days = Math.floor(newTimeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((newTimeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((newTimeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((newTimeRemaining % (1000 * 60)) / 1000);

    // Mettre à jour les états avec les valeurs calculées
    setDaysRemaining(days);
    setHoursRemaining(hours);
    setMinutesRemaining(minutes);
    setSecondsRemaining(seconds);
  };

  // États pour stocker les valeurs du compte à rebours
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [hoursRemaining, setHoursRemaining] = useState(0);
  const [minutesRemaining, setMinutesRemaining] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  // Utiliser useEffect pour mettre à jour le compte à rebours à intervalles réguliers
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    calculateTimeRemaining();

    // Mettre en place un intervalle pour mettre à jour le compte à rebours chaque seconde
    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      calculateTimeRemaining();
    }, 1000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [festivalDate]); // La dépendance ici est festivalDate car le compte à rebours dépend de cette date

  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <div className="countdown-number">{daysRemaining}</div>
        <div className="countdown-label">Jours</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{hoursRemaining}</div>
        <div className="countdown-label">Heures</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{minutesRemaining}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{secondsRemaining}</div>
        <div className="countdown-label">Secondes</div>
      </div>
    </div>
  );
};

export default FestivalCountdown;




