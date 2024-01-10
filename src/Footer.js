import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './assets/imagesEtLogo/images/logo2.webp';


function Footer() {
  return (
    <footer className="container-fluid bgBlue" id="mainFooter">
      <section className="row pt-4 gx-4 mb-4">
        {/* Première colonne avec le logo */}
        <div className="col-12 col-md-4 col-lg-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center">
          <div className="marque pe-5 me-5 text-center">
           
            <img className="img-fluid" src={logo} alt="Logo Live Events" style={{ width: '100px', height: '100px' }}/>
          </div>
        </div>

        {/* Deuxième colonne avec les liens */}
        <div className="col-12 col-md-4 col-lg-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center">
          <div className="liens me-5 pe-4">
          
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/contactForm" className="text-white link-hover">Contact</Link></li>
            <li><Link to="/newsletter" className="text-white link-hover">Newsletter</Link></li>
            <li><Link to="/faqPage" className="text-white link-hover">Faq</Link></li>
            <li><Link to="/legalNotice" className="text-white link-hover">Mentions Légales</Link></li>
          </ul>
          </div>
        </div>

        {/* Troisième colonne avec les réseaux sociaux sur deux lignes */}
        <div className="col-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center">
          <div className="reseauxSociaux me-5 pe-4 text-center">
            {/* Icônes de réseaux sociaux sur une seule ligne sur les mobiles */}
            <div className="d-md-none mb-3">
              <a className="facebook custom-icon-color ms-5 me-2" href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" role="button" id="facebook">
              <span className="visually-hidden">Page Facebook</span>
                <FaFacebook style={{ fontSize: '20px' }} />
              </a>
              <a className="twitter custom-icon-color me-2" href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" role="button" id="twitter">
              <span className="visually-hidden">Page Twitter</span>
                <FaTwitter style={{ fontSize: '20px' }} />
              </a>
              <a className="instagram custom-icon-color me-2" href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" role="button" id="instagram">
              <span className="visually-hidden">Page Instagram</span>
                <FaInstagram style={{ fontSize: '20px' }} />
              </a>
              <a className="youtube custom-icon-color me-2" href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" role="button" id="youtube">
              <span className="visually-hidden">Page Youtube</span>
                <FaYoutube style={{ fontSize: '20px' }} />
              </a>
              <a className="snapchat custom-icon-color me-2 " href="http://www.snapchat.com" target="_blank" rel="noopener noreferrer" role="button" id="snapchat">
              <span className="visually-hidden">Page Snapchat</span>
                <FaSnapchat style={{ fontSize: '20px' }} />
              </a>
              <a className="linkedin custom-icon-color me-1" href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" role="button" id="linkedin">
              <span className="visually-hidden">Page Linkedin</span>
                <FaLinkedin style={{ fontSize: '20px' }} />
              </a>
            </div>

            {/* Icônes de réseaux sociaux sur deux lignes sur les écrans plus grands */}
            <div className="d-none d-md-block">
              {/* Première ligne des réseaux sociaux */}
              <div className="mb-3">
                <a className="facebook custom-icon-color me-4" href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" role="button" id="facebook2">
                  <span className="visually-hidden">Page Facebook</span>
                  <FaFacebook style={{ fontSize: '30px' }} />
                </a>
                <a className="twitter custom-icon-color me-4" href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" role="button" id="twitter2">
                  <span className="visually-hidden">Page Twitter</span>
                  <FaTwitter style={{ fontSize: '30px' }} />
                </a>
                <a className="instagram custom-icon-color " href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" role="button" id="instagram2">
                  <span className="visually-hidden">Page Instagram</span>
                  <FaInstagram style={{ fontSize: '30px' }} />
                </a>
              </div>

              {/* Deuxième ligne des réseaux sociaux */}
              <div>
                <a className="youtube custom-icon-color me-4" href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" role="button" id="youtube2">
                <span className="visually-hidden">Page Youtube</span>
                  <FaYoutube style={{ fontSize: '30px' }} />
                </a>
                <a className="snapchat custom-icon-color me-4 " href="http://www.snapchat.com" target="_blank" rel="noopener noreferrer" role="button" id="snapchat2">
                  <span className="visually-hidden">Page Snapchat</span>
                  <FaSnapchat style={{ fontSize: '30px' }} />
                </a>
                <a className="linkedin custom-icon-color" href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" role="button" id="linkedin2">
                  <span className="visually-hidden">Page Linkedin</span>
                  <FaLinkedin style={{ fontSize: '30px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className="text-center small orange">©2023 Nation Sound. Tous droits réservés.</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;