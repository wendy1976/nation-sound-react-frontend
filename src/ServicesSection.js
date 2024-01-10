// Importation des icônes et composants nécessaires depuis les bibliothèques
import { faCampground, faCocktail, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './ServicesSection.css'; // Importation du fichier de styles ServicesSection.css

// Définition du composant fonctionnel ServicesSection
function ServicesSection() {
  return (
    // Section principale pour les services
    <section className="services-section">
      <Container>
        {/* Titre de la section des services */}
        <h2 className="section-title">SERVICES</h2>
        {/* Description générale des services */}
        <p className="text-center">Sur place, vous trouverez un camping, des points de restauration, ainsi que le bar du festival!</p>
        {/* Disposition en rangées des cartes de services */}
        <Row className="justify-content-center">
          {/* Carte de service - Camping gratuit */}
          <Col md={4} sm={12} className="d-flex">
            <div className="service-card flex-fill text-center">
              <FontAwesomeIcon icon={faCampground} size="3x" className="orange"/>
              <h3>Camping gratuit</h3>
              <p>Nous vous proposons sur place, un camping gratuit pour tous les festivaliers les nuits du 21, 22 et 23 Juin 2024! </p>
              {/* Lien vers la section du camping */}
              <Link to="/infos#section2" className="service-button">
                <button>
                  Voir le camping
                </button>
              </Link>
            </div>
          </Col>

          {/* Carte de service - Restauration */}
          <Col md={4} sm={12} className="d-flex">
            <div className="service-card flex-fill text-center">
              <FontAwesomeIcon icon={faUtensils} size="3x" className="orange" />
              <h3>Restauration</h3>
              <p>Nous vous proposons également plein de points de restauration sur tout le festival, où vous trouverez tout ce qu'il faut pour faire saliver vos papilles!</p>
              {/* Lien vers la section de restauration */}
              <Link to="/infos/restauration-bar#section3" className="service-button">
                <button>
                  Voir les restaurants
                </button>
              </Link>
            </div>
          </Col>

          {/* Carte de service - Bar Nation Sound */}
          <Col md={4} sm={12} className="d-flex">
            <div className="service-card flex-fill text-center">
              <FontAwesomeIcon icon={faCocktail} size="3x" className="orange" />
              <h3>Le bar Nation Sound</h3>
              <p>Nous vous proposons l'immense bar du festival qui pourra étancher votre soif tout le long du festival, avec un grand choix de boissons!</p>
              {/* Lien vers la section du bar */}
              <Link to="/infos/Restauration&Bar#section3" className="service-button">
                <button>
                  Voir le bar
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;






