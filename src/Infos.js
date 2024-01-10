import { faBus, faCampground, faCar, faExclamationCircle, faGlassCheers, faHotel, faLaptop, faParking, faStore, faTrain, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


// Importation des composants nécessaires
import Layout from './Layout';
import ScrollToTopButton from './ScrollToTopButton';

// Importation des images
import InfosImage from './assets/imagesEtLogo/images/Infos.jpg';
import accessibiliteImage from './assets/imagesEtLogo/images/accessibilite.jpg';
import barImage from './assets/imagesEtLogo/images/bar.webp';
import campingImage from './assets/imagesEtLogo/images/camping.jpg';
import hotelImage from './assets/imagesEtLogo/images/hotel.jpg';
import restaurationImage from './assets/imagesEtLogo/images/restauration.jpg';
import ticketImage from './assets/imagesEtLogo/images/ticket.jpg';
import transportImage from './assets/imagesEtLogo/images/transport.jpg';

function Infos() {
    const location = useLocation();

  useEffect(() => {
    const anchorId = location.hash.substring(1);
    if (anchorId) {
      const anchorElement = document.getElementById(anchorId);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  }, [location]);
   
    return (
        <Layout>
            {/* Présentation de la page */}
            <div className='text-center bgWhite'>
                <div className="container">
                    <h1 className="text-center border-bottom border-2 mb-0 mt-0 pt-5 pb-2">Informations pratiques</h1>
                    <div className="row mt-3 mx-5">
                        {/* Colonne avec l'image à droite (md et lg) */}
                        <div className="col-md-6 col-lg-6 mt-2">
                            <img
                                src={InfosImage}
                                alt="présentation de la page infos"
                                style={{ maxWidth: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                        {/* Colonne avec le texte à gauche (md et lg) */}
                        <div className="col-md-6 col-lg-6">
                            {/* Liste des sections de la page avec des liens vers chacune */}
                            <ul className="list-unstyled text-center mt-5">
                                <li><a href="#section1">Transport</a></li>
                                <li><a href="#section2">Logement</a></li>
                                <li><a href="#section3">Restauration & Bar</a></li>
                                <li><a href="#section4">Accessibilité</a></li>
                                <li><a href="#section5">Infos vente</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Transport */}
            <section className='text-center bgWhite' id="section1">
                <div className="container">
                    <h2 className='text-center border-bottom border-2 mb-0 mt-0 pt-5 pb-2'>Transport</h2>
                    <div className="row">
                        {/* Colonne avec le texte à gauche (md et lg) */}
                        <div className="col-md-6 col-lg-6 text-start mt-0 order-2 order-md-1">
                            <div className="mx-md-5">
                                {/* Sous-section En train */}
                                <h4 className='mt-5'>
                                    <FontAwesomeIcon icon={faTrain} className="mr-3 animate__animated animate__pulse animate__slow	2s animate__infinite	infinite" /> En train
                                </h4>
                                <p>
                                    Le festival est accessible en train depuis la gare de Paris Montparnasse, et toutes autres villes. Vous pouvez cliquer sur le bouton ci-dessous pour accéder au site de la SNCF et réserver votre billet.
                                </p>
                                <a href="https://www.sncf-connect.com/" target="_blank" rel="noopener noreferrer">
                                    <button>En train &#10132;</button>
                                </a>
                            </div>
                            {/* Sous-section En bus */}
                            <div className="mx-md-5">
                                <h4 className='mt-3'>
                                    <FontAwesomeIcon icon={faBus} className="mr-3 animate__animated animate__pulse animate__slow	2s animate__infinite	infinite" /> En bus
                                </h4>
                                <p>
                                    Le festival est accessible en bus depuis la gare de Paris Montparnasse, et autres arrêts. Vous pouvez cliquer sur le bouton ci-dessous pour accéder au site de la RATP.
                                </p>
                                <a href="https://www.ratp.fr/plan-bus" target="_blank" rel="noopener noreferrer">
                                    <button>En bus &#10132;</button>
                                </a>
                            </div>
                            {/* Sous-section En voiture */}
                            <div className="mx-md-5">
                                <h4 className='mt-3'>
                                    <FontAwesomeIcon icon={faCar} className="mr-3 animate__animated animate__pulse animate__slow	2s animate__infinite	infinite" /> En voiture
                                </h4>
                                <p>
                                    Vous pouvez cliquer sur le bouton ci-dessous pour accéder au site de Google Maps et calculer votre itinéraire.
                                </p>
                                <a href="https://www.google.fr/maps/" target="_blank" rel="noopener noreferrer">
                                    <button>En voiture &#10132;</button>
                                </a>
                            </div>
                        </div>
                        {/* Colonne avec l'image à droite (md et lg) */}
                        <div className="col-md-6 col-lg-6 mt-4 order-1 order-md-2">
                            <img
                                src={transportImage}
                                alt="Transport"
                                style={{ display: 'block', margin: '0 auto', maxWidth: '80%', height: 'auto' }}
                            />
                            {/* Sous-section Les parkings à proximité */}
                            <div className="mx-md-5 text-start">
                                <h4 className='mt-5'>
                                    <FontAwesomeIcon icon={faParking} className="mr-3 animate__animated animate__pulse animate__slow	2s animate__infinite	infinite" /> Les parkings à proximité
                                </h4>
                                <p>
                                    Le festival met à disposition un parking gratuit pour tous les festivaliers ayant acheté le PASS 2 Jours ou 3 Jours. Vous pouvez cliquer sur le bouton ci-dessous pour accéder au site de la ville de Paris et trouver un parking à proximité.
                                </p>
                                <a href="https://www.paris.fr/pages/trouver-un-parking-2270" target="_blank" rel="noopener noreferrer">
                                    <button>Les parkings &#10132;</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Logement */}
            <section className='text-center bgWhite' id="section2">
                <div className="container">
                    <h2 className='text-center border-bottom border-2 mb-0 mt-0 pt-5 pb-2'>Logement</h2>
                    <div className="row">
                        {/* Colonne avec l'image du camping à droite (md et lg) */}
                        <div className="col-md-6 col-lg-6 mt-4">
                            <img
                                src={campingImage}
                                alt="Camping"
                                style={{ maxWidth: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                        {/* Colonne avec le texte sur le camping à gauche (md et lg) */}
                        <div className="col-md-6 col-lg-6 text-start">
                            {/* Sous-section Le camping du festival */}
                            <h3 className='mt-5'>
                                <FontAwesomeIcon icon={faCampground} className="mr-3" /> Le camping du festival
                            </h3>
                            <h5 className='pink mt-5'>Le camping est gratuit pour tous les festivaliers ayant acheté le PASS 2 Jours ou 3 Jours.</h5>
                            <p>Le camping est monté pour l’occasion, et vous permettra de planter votre tente et de faire de nouvelles rencontres. Il vous propose les services suivants:</p>
                            <ul style={{ listStyle: 'none', padding: 0, fontWeight: 'bold' }}>
                                <li>Epicerie temporaire</li>
                                <li>Espace de vie, douches…</li>
                                <li>Equipe présente 24h/24</li>
                                <li>Bornes de rechargements mobiles</li>
                                <li>Accueil possible jusqu’à la dernière minute (selon les places disponibles)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Nouvelle rangée pour la deuxième section */}
                <div className="container mt-5">
                    <div className="row">
                        {/* Colonne avec l'image des hôtels à gauche (md et lg) */}
                        <div className="col-md-6 col-lg-6 text-start order-2 order-md-1">
                            {/* Sous-section Les hôtels aux alentours */}
                            <h3 className='mt-5'>
                                <FontAwesomeIcon icon={faHotel} className="mr-3" /> Les hôtels aux alentours
                            </h3>
                            <p>Si vous préférez un certain confort, nous vous proposons une liste d’hôtels aux alentours du festival:</p>
                            <ul style={{ listStyle: 'none', padding: 0, fontWeight: 'bold' }}>
                                <li>HOTEL IBIS</li>
                                <li>B&B HOTEL</li>
                                <li>HOTEL CAMPANILE</li>
                                <li>HOTEL F1</li>
                                <li>HOTEL CitizenM</li>
                            </ul>
                        </div>
                        {/* Colonne avec l'image de l'hôtel à droite (md et lg) */}
                        <div className="col-md-6 col-lg-6 mt-4 order-1 order-md-2">
                            <img
                                src={hotelImage}
                                alt="Hôtel"
                                style={{ maxWidth: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Section Restauration et Bar */}
            <section className='text-center bgWhite' id="section3">
                <div className="container">
                    <h2 className='text-center border-bottom border-2 mb-0 mt-0 pt-5 pb-2'>
                        Restauration et Bar
                    </h2>
                    <div className="row">
                        {/* Colonne avec l'image des restaurants à gauche (md et lg) */}
                        <div className="col-md-6 col-lg-6 mt-4">
                            {/* Sous-section Les restaurants */}
                            <img
                                src={restaurationImage}
                                alt="Restauration"
                                style={{ maxWidth: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                        {/* Colonne avec le texte sur les restaurants à droite (md et lg) */}
                        <div className="col-md-6 col-lg-6 text-start">
                            <div className='mx-md-5'>
                                <h3 className='mt-5'>
                                    <FontAwesomeIcon icon={faUtensils} className="mr-3" /> Les restaurants du festival
                                </h3>
                                <p>Le festival vous propose une sélection de restaurants pour vous restaurer entre deux concerts:</p>
                                <h4 className='mt-5'>Foodtruck : « La Charrette de papy »</h4>
                                <p>Dans une ambiance très conviviale, « La Charrette de papy » vous propose une large carte de sandwichs, des hamburgers, des pizzas, des frites, des boissons et des desserts.</p>
                            </div>
                        </div>
                        {/* Nouvelle rangée pour les deux derniers paragraphes */}
                        <div className="row">
                            {/* Colonne pour le paragraphe "Restauration du monde" */}
                            <div className="col-md-6 col-lg-6 text-start">
                                <h4 className='mt-5 pe-3'>Restauration du monde: « L’Epicurium »</h4>
                                <p>« L’Epicurium » vous propose une très grande diversité de cuisine du monde: asiatique (sushis, nems, brochettes, rouleaux de printemps entre autres), végétarienne (salades, pokébowl…), espagnole (tapas, paella…).</p>
                            </div>
                            {/* Colonne pour le paragraphe "Restauration du terroir" */}
                            <div className="col-md-6 col-lg-6 text-start">
                                <h4 className='mt-5'>Restauration du terroir: « La cuisine des bichettes »</h4>
                                <p>Dans une ambiance chaleureuse, « La cuisine des bichettes », vous propose une très grande variété de plats traditionnels (poulet basquaise, choucroute…), de planchettes (fromages, charcuterie), des huîtres, de la mouclade et autres fruits de mer, de salades, de quiches, et de crêpes (galettes bretonnes), et de succulents desserts (profiteroles, tartes, glaces, crème brûlée…)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nouvelle rangée pour la deuxième section */}
                <div className="container mt-5">
                    <div className="row">
                    {/* Colonne avec le texte sur le bar à gauche (md et lg) */}
                        <div className="col-md-6 col-lg-6 text-start">
                        {/* Sous-section Le bar du festival */}
                            <h3 className='mt-5'>
                                <FontAwesomeIcon icon={faGlassCheers} className="mr-3" /> Le bar du festival
                            </h3>
                            <p>Le festival vous propose un bar pour vous désaltérer entre deux concerts,vous y trouverez un grand choix de bières et de cocktails, ainsi que de nombreuses boissons non-alcoolisées! </p>
                        </div>

                        {/* Colonne avec l'image à droite (md et lg) */}
                        <div className="col-md-6 col-lg-6 mt-3 mb-3">
                            <img
                                src={barImage}
                                alt="Bar Nation Sounds"
                                style={{ maxWidth: '70%', height: 'auto', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Accessibilité */}
            <section className='text-center bgWhite' id="section4">
                <div className="container">
                    <h2 className='text-center border-bottom border-2 mb-0 mt-0 pt-5 pb-2'>Accessibilité</h2>
                    <div className="row">
                        {/* Colonne avec l'image sur l'accessibilité à droite (md et lg) */}
                        <div className="col-md-6 col-lg-6 mt-3">
                            <img
                                src={accessibiliteImage}
                                alt="Accessibilité"
                                style={{ maxWidth: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                        {/* Colonne avec le texte sur l'accessibilité à gauche (md et lg) */}
                        <div className="col-md-6 col-lg-6 text-start">
                            <div className='mx-md-5'>
                                <div className='d-flex justify-content-center align-items-center mt-3'>
                                    <FontAwesomeIcon icon={faExclamationCircle} style={{ fontSize: '2em' }} />
                                </div>
                                <h3 className='mt-3'>Signalez vous avant d’acheter vos billets!</h3>
                                <p>Le festival cherche à améliorer l’accueil des Personnes en Situation de Handicap. Des solutions vous sont proposées pour rendre le festival accessible à tous.</p>
                                <p>Seules les personnes possédant <strong>UN JUSTIFICATIF DE HANDICAP</strong><em> (Carte d’invalidité, Carte priorité pour personne handicapée, Carte européenne de stationnement, Carte mobilité inclusion…)</em> pourront accéder à l’entrée et aux places dédiées après bien sûr avoir été enregistrées.
                                <strong> A NOTER !</strong> Pour des raisons de sécurité et de confort, le nombre de places est limité au niveau des plateformes et des places assises. Une fois la capacité d’accueil maximum atteinte, nous ne pourrons donc pas répondre favorablement aux nouvelles inscriptions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Infos vente */}
            <section className='text-center bgWhite' id="section5">
                <div className="container">
                <h2 className='text-center border-bottom border-2 mb-0 mt-0 pt-5 pb-2'>Infos vente</h2>
                    <div className="row">
                    {/* Colonne avec le texte sur les infos de vente à gauche (md et lg) */}
                        <div className="col-md-6 col-lg-6 text-start order-2 order-md-1">
                            <div>
                                <div className='d-flex justify-content-center align-items-center mt-3'>
                                    <FontAwesomeIcon
                                        icon={faLaptop}
                                        className='mr-3'
                                        style={{ fontSize: '2em' }}
                                    />
                                </div>
                                <h3 className='mt-2'>En ligne</h3>
                                <p>Pour acheter votre billet, rendez-vous sur notre BILLETTERIE EN LIGNE</p>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <FontAwesomeIcon
                                        icon={faStore}
                                        className='mr-3'
                                        style={{ fontSize: '2em' }}
                                        />
                                    </div>
                                <h3 className='mt-2'>En magasin</h3>
                                <p>Liste des points de vente: Fmac, Leplerc, Ochamps, Culturo, Carrif</p>
                            </div>
                        </div>
                    {/* Colonne avec l'image des tickets à droite (md et lg) */}
                        <div className="col-md-6 col-lg-6 mt-3 mb-3 order-1 order-md-2">
                            <img
                                src={ticketImage}
                                alt="Ticket"
                                style={{ maxWidth: '80%', height: 'auto', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
                {/* Ajoutez le bouton de retour en haut de la page */}
                <ScrollToTopButton />
        </Layout>
    );
}

export default Infos;