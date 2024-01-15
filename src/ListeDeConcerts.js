import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import 'moment/locale/fr';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListeDeConcerts.css';

function ListeDeConcerts() {
  // État pour stocker la liste des concerts
  const [concerts, setConcerts] = useState([]);

  // États pour les filtres de musique, date et scène
  const [filtresMusique, setFiltresMusique] = useState({
    Pop: false,
    Rock: false,
    Reggae: false,
    Electro: false,
    Celtique: false,
  });
  const [filtresDate, setFiltresDate] = useState({
    "21 Juin 2024": false,
    "22 Juin 2024": false,
    "23 Juin 2024": false,
  });
  const [filtresScene, setFiltresScene] = useState({
    "Horizon Sonore": false,
    "Cybergroove": false,
    "Reggae Vibes Haven": false,
    "Guitares en fusion": false,
    "Terre d'Emeraude": false,
  });

  // État pour le filtre ouvert ou fermé
  const [filtreOuvert, setFiltreOuvert] = useState(false);

  // Effet pour récupérer les produits depuis une API
  useEffect(() => {
    const url = '/api/concerts';
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data) {
          console.log(data);
          setConcerts(data); // Utilisez setConcerts pour mettre à jour l'état
        } else {
          console.log('No data received');
        }
      })
      .catch(error => {
        console.log('Fetch error: ', error);
      });
  }, []);
  

  // Filtrer les produits en fonction des états des filtres
  const concertsFiltres = concerts.filter((concert) => {
    const musiqueMatch =
      (filtresMusique.Pop && concert.musique === 'Pop') ||
      (filtresMusique.Rock && concert.musique === 'Rock') ||
      (filtresMusique.Reggae && concert.musique === 'Reggae') ||
      (filtresMusique.Electro && concert.musique === 'Electro') ||
      (filtresMusique.Celtique && concert.musique === 'Celtique');
  
    const sceneMatch =
      (filtresScene["Horizon Sonore"] && concert.scene === "Horizon Sonore") ||
      (filtresScene["Cybergroove"] && concert.scene === "Cybergroove") ||
      (filtresScene["Reggae Vibes Haven"] && concert.scene === "Reggae Vibes Haven") ||
      (filtresScene["Guitares en fusion"] && concert.scene === "Guitares en fusion") ||
      (filtresScene["Terre d'Emeraude"] && concert.scene === "Terre d'Emeraude");
  
    

      const dateMatch = Object.keys(filtresDate).some((date) => {
        const dateFiltre = moment(date, 'DD MMMM YYYY');
        const concertDate = moment(concert.day, 'DD MMMM YYYY'); // Utilisez concert.day ici
      
        return (
          filtresDate[date] &&
          concertDate.isSame(dateFiltre)
        );
      });

  return (
    (musiqueMatch || Object.values(filtresMusique).every(value => !value)) &&
    (dateMatch || Object.values(filtresDate).every(value => !value)) &&
    (sceneMatch || Object.values(filtresScene).every(value => !value))
  );
});

  // Gérer le changement d'état des checkboxes pour le filtre de musique
  const handleCheckboxChange = (styleMusique) => {
    setFiltresMusique((prevFiltresMusique) => ({
      ...prevFiltresMusique,
      [styleMusique]: !prevFiltresMusique[styleMusique],
    }));
  };

  // Gérer le changement d'état des checkboxes pour le filtre de scène
  const handleCheckboxChangeScene = (nomScene) => {
    setFiltresScene((prevFiltresScene) => ({
      ...prevFiltresScene,
      [nomScene]: !prevFiltresScene[nomScene],
    }));
  };

  // Gérer le changement d'état des checkboxes pour le filtre de date
  const handleCheckboxChangeDate = (dateConcert) => {
    setFiltresDate((prevFiltresDate) => ({
      ...prevFiltresDate,
      [dateConcert]: !prevFiltresDate[dateConcert],
    }));
  };

  // Basculer l'état du filtre ouvert/fermé
  const toggleFiltre = () => {
    setFiltreOuvert(!filtreOuvert);
  };

  // Réinitialiser tous les filtres
  const resetFilters = () => {
    setFiltresMusique({
      Pop: false,
      Rock: false,
      Reggae: false,
      Electro: false,
      Celtique: false,
    });

    setFiltresDate({
      "21 Juin 2024": false,
      "22 Juin 2024": false,
      "23 Juin 2024": false,
    });

    setFiltresScene({
      "Horizon Sonore": false,
      "Cybergroove": false,
      "Reggae Vibes Haven": false,
      "Guitares en fusion": false,
      "Terre d'Emeraude": false,
    });
  };

  return (
    <div className="list-container">
      <div className="sidebar">
        <button onClick={toggleFiltre}>
          {filtreOuvert ? "Fermer le filtre" : "Ouvrir le filtre"}
        </button>

        {filtreOuvert && (
          <div className="filtres-container">
            {/* Filtre par style de musique */}
            <div className="categorie-filtre">
              <label>Filtrer par musique:</label>
              <div className="checkboxes-container">
                {Object.keys(filtresMusique).map((styleMusique) => (
                  <label key={styleMusique}>
                    {styleMusique}
                    <input
                      type="checkbox"
                      checked={filtresMusique[styleMusique]}
                      onChange={() => handleCheckboxChange(styleMusique)}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Filtre par date de concert */}
            <div className="categorie-filtre">
              <label>Filtrer par date de concert:</label>
              <div className="checkboxes-container">
                {Object.keys(filtresDate).map((dateConcert) => (
                  <label key={dateConcert}>
                    {dateConcert}
                    <input
                      type="checkbox"
                      checked={filtresDate[dateConcert]}
                      onChange={() => handleCheckboxChangeDate(dateConcert)}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Filtre par scène */}
            <div className="categorie-filtre">
              <label>Filtrer par scène:</label>
              <div className="checkboxes-container">
                {Object.keys(filtresScene).map((nomScene) => (
                  <label key={nomScene}>
                    {nomScene}
                    <input
                      type="checkbox"
                      checked={filtresScene[nomScene]}
                      onChange={() => handleCheckboxChangeScene(nomScene)}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Bouton de réinitialisation des filtres */}
            <button onClick={resetFilters}>Réinitialiser les filtres</button>
          </div>
        )}
      </div>

      {/* Affichage des cartes filtrées */}
      <div className="cards-container">
      {concertsFiltres.map((concert, index) => {
        const baseUrl = 'http://localhost:8000/images/concerts/';
        const imageUrl = baseUrl + concert.image;

         

          return (
            <div key={index} className="card bgWhite">
              <FontAwesomeIcon icon={faMusic} className="music-note" />
              <h2 className="blue">{concert.nom_artiste}</h2>
              <img src={imageUrl} alt={concert.image} />
              <p dangerouslySetInnerHTML={{ __html: concert.designation }}></p>
              <p dangerouslySetInnerHTML={{ __html: concert.description }}></p>
              <p style={{ fontWeight: 'bold' }}>Scene: {concert.scene}</p>
              <p style={{ fontWeight: 'bold' }}>Musique: {concert.musique}</p>
              <p style={{ fontWeight: 'bold' }}>Date: Le {moment(concert.date_concert.date).locale('fr').format('D MMMM [à] HH:mm')}</p>
              <button className='bouton-billetterie'>
                <Link to="/billetterie" className="lien-bouton white">
                  Voir les Pass sur la billetterie
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListeDeConcerts;
 