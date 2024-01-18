import L from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import './MyMap.css';

const MyMap = () => {
  // Coordonnées de la cascade
  const cascadeCoordinates = [48.8621, 2.2526];

  // Référence à l'instance de la carte
  const mapRef = useRef(null);

  // État pour stocker la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const [locations, setLocations] = useState([]);

  // État pour stocker la catégorie active
  const [activeCategory, setActiveCategory] = useState(null);

  // Déclarer baseUrl ici
  const baseUrl = 'http://localhost:8000/images/location';

  // Effet pour récupérer les produits depuis une API
  useEffect(() => {
    const url = '/api/locations';

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
          
          // Convertir les coordonnées de chaque objet dans le tableau
          const locationsWithParsedCoordinates = data.map(location => ({
            ...location,
            coordinates: parseCoordinates(location.coordinates),
          }));

          // Utilisez setLocations pour mettre à jour l'état
          setLocations(locationsWithParsedCoordinates);
        } else {
          console.log('No data received');
        }
      })
      .catch(error => {
        console.log('Fetch error: ', error);
      });
  }, []);

  // Fonction pour parser les coordonnées
  const parseCoordinates = (coordinates) => {
    const key = Object.keys(coordinates)[0]; // Obtenir la première clé
    return JSON.parse(coordinates[key]);
  };

  // Utilisation du hook de réactivité pour détecter la taille de l'écran
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  // Filtrage des lieux en fonction de la catégorie sélectionnée
  const filteredLocations = selectedCategory
    ? locations.filter((location) => location.category === selectedCategory)
    : locations;

  // Gérer le changement de catégorie
  const handleCategoryFilter = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
    setActiveCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  // Réinitialiser le filtre
  const handleResetFilter = () => {
    setSelectedCategory(null);
    setActiveCategory(null);
    // Ajoutez d'autres logiques de réinitialisation ici si nécessaire
  };

  // Créer un ensemble pour stocker les catégories uniques
  const uniqueCategories = new Set(locations.map((location) => location.category));

  // Convertir l'ensemble en tableau
  const uniqueCategoriesArray = Array.from(uniqueCategories);

  return (
    <>
      <div className="pb-5">
        <Header />
      </div>
      <div className="pt-5">
        {/* Affichage des boutons de filtre */}
        {isDesktopOrLaptop && (
          <div className="mb-5 mt-5" style={{ display: 'flex', gap: '10px' }}>
            {uniqueCategoriesArray.map((category) => {
              // Trouver la première occurrence de la catégorie
              const locationWithIcon = locations.find((location) => location.category === category);

              // S'assurer qu'il y a une occurrence avec une icône
              if (locationWithIcon && locationWithIcon.icon) {
                // Construire l'URL complet de l'icône en utilisant le nom de fichier de la colonne "icon"
                const iconUrl = `${baseUrl}/${locationWithIcon.icon}`;

                return (
                  <button
                    key={category}
                    className={`d-flex align-items-center ${activeCategory === category ? 'active-filter' : ''}`}
                    onClick={() => handleCategoryFilter(category)}
                  >
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      {/* Utiliser l'icône de la première occurrence de la catégorie */}
                      <img
                        src={iconUrl}
                        alt={category}
                        style={{ width: '30px', height: '30px', marginRight: '5px' }}
                      />
                      {category}
                    </span>
                  </button>
                );
              }

              // Retourner uniquement le texte de la catégorie si aucune icône n'est trouvée
              return (
                <button
                  key={category}
                  className="d-flex align-items-center"
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </button>
              );
            })}
            <button className="d-flex align-items-center" onClick={handleResetFilter}>
              Réinitialiser le filtre
            </button>
          </div>
        )}
        {isTabletOrMobile && (
          // Affichage pour les tablettes et mobiles
          <div style={{ marginBottom: '10px' }}>
            {/* Conteneur de sélection de catégorie */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Sélecteur de catégorie */}
              <select className="form-select" onChange={(e) => handleCategoryFilter(e.target.value)}>
                <option value="">Sélectionner une catégorie</option>
                <option value="Scène">Scènes</option>
                <option value="Restaurant">Restaurants</option>
                <option value="Bar">Bars</option>
                <option value="wc">WC</option>
                <option value="Camping">Camping</option>
              </select>
              {/* Bouton pour réinitialiser le filtre */}
              <div>
                <button className="btn d-inline-block" onClick={handleResetFilter}>
                  Réinitialiser le filtre
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Carte avec les marqueurs et popups */}
        <MapContainer center={cascadeCoordinates} zoom={15} style={{ height: '800px', width: '100%' }} whenCreated={(mapInstance) => (mapRef.current = mapInstance)}>
          {/* Couche de tuiles OpenStreetMap */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />

          {/* Marqueurs avec popups */}
          {filteredLocations.map((location, index) => {
            // Construisez l'URL de l'image ici
            const baseUrl = 'http://localhost:8000/images/location/';
            const imageUrl = baseUrl + location.image;

            return (
              <Marker key={index} position={location.coordinates} icon={
                new L.Icon({
                  iconUrl: `${baseUrl}${location.icon}`,  // Utilisez la base URL pour construire l'URL complet de l'icône
                  iconRetinaUrl: `${baseUrl}${location.icon}`,
                  iconSize: [35, 35],
                })
              }>
                <Popup>
                  {/* Contenu de la popup */}
                  <div>
                    <h3 className="pink">{location.name}</h3>
                    <p>
                      <strong>Catégorie:</strong> {location.category}
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: location.popupContent }}></p>
                    {/* Utilisez la base URL pour construire l'URL complet de l'image */}
                    <img src={imageUrl} alt={location.category} style={{ width: '45px', height: '45px' }} />
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </>
  );
};

export default MyMap;
