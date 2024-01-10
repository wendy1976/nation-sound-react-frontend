import React, { Suspense, lazy } from 'react';
import Card from 'react-bootstrap/Card';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CarouselComponent from './CarouselComponent';
import FestivalCountdown from './FestivalCountdown';
import Footer from './Footer';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';
import miniCarteImage from './assets/imagesEtLogo/images/minicarte.webp';

const ArtistCard = lazy(() => import('./ArtistCard'));
const ServicesSection = React.lazy(() => import('./ServicesSection'));

function Accueil() {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Festival Countdown Component */}
      <div className="col-12 d-flex justify-content-center align-items-center mt-5 pt-5">
        <div className="col-md-4">
          <Card className='bgWhite'>
            <Card.Body>
              <Card.Title className='fw-bold'>Compte à rebours du Festival</Card.Title>
              {/* Intégration du composant FestivalCountdown */}
              <FestivalCountdown />
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Carousel Component */}
      <CarouselComponent />

      {/* Billetterie Button */}
      <div>
        <Link to="/billetterie" className="btn h4 btn-lg white" title="Voir la billetterie" id="laBilletterie">
          <strong>LA BILLETTERIE</strong>
        </Link>
      </div>
      
      {/* Artists Section */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center bold-title mb-5">Les Artistes</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* ArtistCard Component */}
            <Suspense fallback={<div>Loading...</div>}>
              <ArtistCard />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <React.Suspense fallback={<div>Chargement...</div>}>
        <ServicesSection />
      </React.Suspense>

      {/* Newsletter and Interactive Map Section */}
      <div className="row mx-auto">
        {/* Newsletter Section */}
        <div className="col-12 col-md-4 ps-2 mx-auto">
          <Card className='bgWhite'>
            <Card.Body>
              <Card.Title className='blue fw-bold'>Inscrivez-vous à notre newsletter</Card.Title>
              <Card.Text>
                Pour avoir toutes les dernières informations, abonnez-vous!
                <Link to="/newsletter">
                  <button>
                    S'abonner <MdEmail />
                  </button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Interactive Map Section */}
        <div className="col-12 col-md-4 mx-auto">
          <Card className='bgWhite'>
            <Card.Body>
              <Card.Title className='fw-bold'>Carte Interactive</Card.Title>
              <Card.Text as="div"> {/* Utilisation de as="div" pour éviter l'élément p */}
                Découvrez le plan du festival sur la carte interactive.
                <Link to="/myMap">
                  <img
                    src={miniCarteImage}
                    alt="présentation de la carte interactive"
                    style={{
                      width: "400",
                      height: "290",
                      maxWidth: '500',
                      display: 'block',
                      margin: '0 auto',
                      cursor: 'pointer',
                    }}
                  />
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* Fin de la section */}
      
      {/* Footer Component */}
      <Footer />

      {/* ScrollToTopButton Component */}
      <ScrollToTopButton />
    </div>
  );
}

export default Accueil;
 