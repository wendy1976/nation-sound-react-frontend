import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';


// Import des images et icônes
import barImage from './assets/imagesEtLogo/images/bar1.png';
import campingImage from './assets/imagesEtLogo/images/camping1.png';
import djImage from './assets/imagesEtLogo/images/dj.png';
import foodtruckImage from './assets/imagesEtLogo/images/foodtruck.png';
import guitareImage from './assets/imagesEtLogo/images/guitare_rock.png';
import barIcon from './assets/imagesEtLogo/images/icone_bar.png';
import campingIcon from './assets/imagesEtLogo/images/icone_camping.png';
import restaurantIcon from './assets/imagesEtLogo/images/icone_restaurant.png';
import sceneIcon from './assets/imagesEtLogo/images/icone_scene.png';
import wcIcon from './assets/imagesEtLogo/images/icone_wc.png';
import celtiqueImage from './assets/imagesEtLogo/images/musique_celtique.png';
import popImage from './assets/imagesEtLogo/images/musique_pop.png';
import reggaeImage from './assets/imagesEtLogo/images/musique_reggae.png';
import restaurant1Image from './assets/imagesEtLogo/images/restaurant1.png';
import restaurant2Image from './assets/imagesEtLogo/images/restaurant2.png';
import wc1Image from './assets/imagesEtLogo/images/wc1.png';
import wc2Image from './assets/imagesEtLogo/images/wc2.png';
import wc3Image from './assets/imagesEtLogo/images/wc3.png';

const MyMap = () => {
  // Coordonnées de la cascade
  const cascadeCoordinates = [48.8621, 2.2526];
 
  // Référence à l'instance de la carte
  const mapRef = useRef(null);
  // État pour stocker la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Icônes pour les différentes catégories
  const barIconLeaflet = new L.Icon({
    iconUrl: barIcon,
    iconRetinaUrl: barIcon,
    iconSize: [35, 35],
  });

  const campingIconLeaflet = new L.Icon({
    iconUrl: campingIcon,
    iconRetinaUrl: campingIcon,
    iconSize: [35, 35],
  });

  const restaurantIconLeaflet = new L.Icon({
    iconUrl: restaurantIcon,
    iconRetinaUrl: restaurantIcon,
    iconSize: [35, 35],
  });

  const sceneIconLeaflet = new L.Icon({
    iconUrl: sceneIcon,
    iconRetinaUrl: sceneIcon,
    iconSize: [35, 35],
  });

  const wcIconLeaflet = new L.Icon({
    iconUrl: wcIcon,
    iconRetinaUrl: wcIcon,
    iconSize: [35, 35],
  });


  const locations = [
    { category: 'Scène', coordinates: [48.86331, 2.24632], icon: sceneIconLeaflet, name: 'Horizon Sonore', popupContent: <div dangerouslySetInnerHTML={{ __html: "Les concerts de musique « <strong>Pop</strong> » se dérouleront sur cette scène." }} />, image: popImage },
    { category: 'Scène', coordinates: [48.86059, 2.24405], icon: sceneIconLeaflet, name: 'Reggae Vibes Haven', popupContent: <div dangerouslySetInnerHTML={{ __html: "Les concerts de musique « <strong>Reggae</strong> » se dérouleront sur cette scène." }} />, image: reggaeImage },
    { category: 'Scène', coordinates: [48.8606, 2.2391], icon: sceneIconLeaflet, name: 'Cybergroove', popupContent: <div dangerouslySetInnerHTML={{ __html: "Les concerts de musique « <strong>Electro</strong> » se dérouleront sur cette scène." }} />, image: djImage },
    { category: 'Scène', coordinates: [48.8658, 2.2481], icon: sceneIconLeaflet, name: "Terre d'Emeraude", popupContent: <div dangerouslySetInnerHTML={{ __html: "Les concerts de musique « <strong>Celtique</strong> » se dérouleront sur cette scène." }} />, image: celtiqueImage },
    { category: 'Scène', coordinates: [48.8625, 2.2555], icon: sceneIconLeaflet, name: 'Guitares en fusion',popupContent: <div dangerouslySetInnerHTML={{ __html: "Les concerts de musique « <strong>Rock</strong> » se dérouleront sur cette scène." }} />, image: guitareImage },
    { category: 'Restaurant', coordinates: [48.8615, 2.2414], icon: restaurantIconLeaflet, name: 'Foodtruck : « La Charrette de papy »', popupContent: <div dangerouslySetInnerHTML={{ __html: " « <strong>La Charrette de papy</strong> » vous propose une large carte de sandwichs, des hamburgers, des pizzas, des frites, des boissons et des desserts." }} />, image: foodtruckImage },
    { category: 'Restaurant', coordinates: [48.8595, 2.2490], icon: restaurantIconLeaflet, name: 'Restauration du monde: « L’Epicurium »', popupContent: <div dangerouslySetInnerHTML={{ __html: " « <strong>L’Epicurium</strong> » vous propose une très grande diversité de cuisine du monde." }} />, image: restaurant1Image },
    { category: 'Restaurant', coordinates: [48.8583, 2.2431], icon: restaurantIconLeaflet, name: 'Restauration du terroir: « La cuisine des bichettes »' , popupContent: <div dangerouslySetInnerHTML={{ __html: " « <strong>La cuisine des bichettes</strong> » vous propose une très grande variété de plats traditionnels." }} />,  image: restaurant2Image},
    { category: 'Bar', coordinates: [48.8619, 2.2494], icon: barIconLeaflet, name: 'Bar « Nation Sound »',popupContent: <div dangerouslySetInnerHTML={{ __html: " « Le bar <strong>Nation Sound</strong> » vous propose une très grande variété de boissons: cocktails, bières, sans alcool." }} />,  image: barImage },
    { category: 'wc', coordinates: [48.8605, 2.2550], icon: wcIconLeaflet, name: 'Toilettes 1', popupContent: <div dangerouslySetInnerHTML={{ __html: "Toilettes pour Homme & Femme" }} />, image: wc1Image },
    { category: 'wc', coordinates: [48.8573, 2.2455], icon: wcIconLeaflet, name: 'Toilettes 2',popupContent: <div dangerouslySetInnerHTML={{ __html: "Toilettes pour Homme & Femme" }} />, image: wc2Image },
    { category: 'wc', coordinates: [48.8640, 2.2427], icon: wcIconLeaflet, name: 'Toilettes 3',popupContent: <div dangerouslySetInnerHTML={{ __html: "Toilettes pour Homme & Femme, et Handicapés" }} />, image: wc3Image },
    { category: 'Camping', coordinates: [48.8565, 2.2474], icon: campingIconLeaflet, name: 'Camping « Nation Sound »',popupContent: <div dangerouslySetInnerHTML={{ __html: " « <strong>Le camping du festival</strong> » est gratuit pour tous les festivaliers ayant acheté le PASS 2 Jours ou 3 Jours." }} />, image: campingImage },
  ];

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
  };

  // Réinitialiser le filtre
  const resetFilter = () => {
    setSelectedCategory(null);
  };

  
  return (
   
    <>
      <div className="pb-5">
      <Header />
      </div>
      <div className="pt-5">
        {isDesktopOrLaptop && (
          <div className="mb-5 mt-5"style={{ display: 'flex', gap: '10px' }}>
            <button className="d-flex align-items-center" onClick={() => handleCategoryFilter('Scène')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <img src={sceneIcon} alt="Scène" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
                Scènes
              </span>
            </button>

            <button className="d-flex align-items-center" onClick={() => handleCategoryFilter('Restaurant')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <img src={restaurantIcon} alt="Restaurant" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
                Restaurants
              </span>
            </button>

            <button className="d-flex align-items-center" onClick={() => handleCategoryFilter('Bar')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <img src={barIcon} alt="Bar" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
                Bars
              </span>
            </button>

            <button className="d-flex align-items-center" onClick={() => handleCategoryFilter('wc')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <img src={wcIcon} alt="WC" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
                WC
              </span>
            </button>

            <button className="d-flex align-items-center" onClick={() => handleCategoryFilter('Camping')}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <img src={campingIcon} alt="Camping" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
                Camping
              </span>
            </button>

            <button className="d-flex align-items-center" onClick={resetFilter}>
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
                  <button className="btn d-inline-block" onClick={resetFilter}>
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

            {/* Affichage des marqueurs et popups pour les emplacements filtrés */}
            {filteredLocations.map((location, index) => (
              <Marker key={index} position={location.coordinates} icon={location.icon}>
                <Popup>
                  {/* Contenu de la popup */}
                  <div>
                    <h3 className="pink">{location.name}</h3>
                    <p>
                      <strong>Catégorie:</strong> {location.category}
                    </p>
                    <p>{location.popupContent}</p>
                    <img src={location.image} alt={location.category} style={{ width: '45px', height: '45px' }} />
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          </div>
    </>
  );
};

export default MyMap;