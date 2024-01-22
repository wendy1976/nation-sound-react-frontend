import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import './Header.css';

import Logo from './assets/imagesEtLogo/images/logo1.webp';

function Header() {
  const location = useLocation();

  // Fonction pour déterminer si un lien est actif
  const isActive = (path) => location.pathname === path;

  // État local pour gérer l'affichage des sous-sections d'Infos pratiques
  const [showInfosSections, setShowInfosSections] = useState(false);

  return (
    <div>
      {/* Barre de navigation */}
      <Navbar className="bgBlue px-5" expand="lg" id="navbar" fixed="top">
        {/* Logo Nation Sound */}
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={Logo} alt="logo" id="logo" style={{ width: '75px', height: '75px' }} />
          </Navbar.Brand>
        </LinkContainer>
        {/* Bouton de bascule de la barre de navigation */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bgWhite my-auto' style={{ height: '37px' }} />
        {/* Contenu de la barre de navigation */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="position-relative">
            {/* Lien vers la page d'accueil */}
            <Nav.Item className={isActive('/') ? 'active' : ''}>
              <LinkContainer to="/">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Accueil</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* Lien vers la page ConcertPage */}
            <Nav.Item className={isActive('/concertsPage') ? 'active' : ''}>
              <LinkContainer to="/concertsPage">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Concerts & Programmation</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* Lien vers la page Billetterie */}
            <Nav.Item className={isActive('/billetterie') ? 'active' : ''}>
              <LinkContainer to="/billetterie">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Billetterie</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* Lien vers la page Infos pratiques */}
            <LinkContainer to="/infos">
              <Nav.Item
                className={`nav-item-infos ${isActive('/infos') ? 'active' : ''}`}
                onMouseEnter={() => setShowInfosSections(true)}
                onMouseLeave={() => setShowInfosSections(false)}
              >
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Infos pratiques</h1>
                </Nav.Link>
                {/* Sous-sections d'Infos pratiques */}
                {showInfosSections && (
                  <div className="infos-sections white ms-2 h6">
                    <LinkContainer to={{ pathname: "/infos", hash: "#section1" }}>
                      <NavDropdown.Item className={isActive('/infos#section1') ? 'active' : ''}>Transport</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={{ pathname: "/infos", hash: "#section2" }}>
                      <NavDropdown.Item className={isActive('/infos#section2') ? 'active' : ''}>Logement</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={{ pathname: "/infos", hash: "#section3" }}>
                      <NavDropdown.Item className={isActive('/infos#section3') ? 'active' : ''}>Restauration & Bar</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={{ pathname: "/infos", hash: "#section4" }}>
                      <NavDropdown.Item className={isActive('/infos#section4') ? 'active' : ''}>Accessibilité</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={{ pathname: "/infos", hash: "#section5" }}>
                      <NavDropdown.Item className={isActive('/infos#section5') ? 'active' : ''}>Infos vente</NavDropdown.Item>
                    </LinkContainer>
                  </div>
                )}
              </Nav.Item>
            </LinkContainer>
            {/* Lien vers la page FAQ */}
            <Nav.Item className={isActive('/faqPage') ? 'active' : ''}>
              <LinkContainer to="/faqPage">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Faq</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* Lien vers la page Nos partenaires */}
            <Nav.Item className={isActive('/partners') ? 'active' : ''}>
              <LinkContainer to="/partners">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Nos partenaires</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            
            {/* Lien vers la page Carte interactive */}
            <Nav.Item className={isActive('/myMap2') ? 'active' : ''}>
              <LinkContainer to="/myMap2">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Carte interactive</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>

            {/* Lien vers la page Sécurité */}
            <Nav.Item className={isActive('/SecurityInfoPage') ? 'active' : ''}>
              <LinkContainer to="/SecurityInfoPage">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Sécurité</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {/* Lien vers la page de connexion */}
            <Nav.Item className={isActive('/LoginForm') ? 'active' : ''}>
              <LinkContainer to="/LoginForm">
                <Nav.Link>
                  <h1 className="h6 mt-3 white" style={{ fontWeight: 600 }}>Connexion</h1>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
 