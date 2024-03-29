import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';
import React, { useEffect, useState } from 'react';
import './Billetterie.css';
import Layout from './Layout';
import ScrollToTopButton from './ScrollToTopButton';
import logoImage from './assets/imagesEtLogo/images/logo1.webp';
import Image from './assets/imagesEtLogo/images/pass.jpg';

const Billetterie = () => {
  const [passes, setPasses] = useState([]);
  const [panier, setPanier] = useState({});
  const [message, setMessage] = useState('');
  const [afficherPanier, setAfficherPanier] = useState(false);
  const [panierValide, setPanierValide] = useState(false);

  // useEffect est un Hook de React qui permet d'exécuter du code après chaque rendu du composant.
  useEffect(() => {
    // Fonction fetchData pour récupérer les données des pass
    const fetchData = async () => {
       // L'URL de l'API à partir de laquelle les données seront récupérées.
      const url = '/api/passes';
    
      try {
        // Récupération des données à partir de l'URL.
        const response = await fetch(url);
        const data = await response.json();
        // Mise à jour de l'état des passes si des données ont été récupérées.
        if (data) {
          setPasses(data);
        }
      } catch (error) {
        // Affichage des erreurs éventuelles.
        console.error('Erreur:', error);
      }
    };
    // Appel de la fonction pour récupérer les données.
    fetchData();
  }, []);

  // Fonction pour ajouter un pass au panier
  const ajouterAuPanier = (pass) => {
    setPanier((prevPanier) => {
      return {
        ...prevPanier,
        [pass.nom_pass]: {
          ...pass,
          quantite: (prevPanier[pass.nom_pass]?.quantite || 0) + 1,
        },
      };
    });

    setMessage(`${pass.nom_pass} a été ajouté au panier`);
    setTimeout(() => {
      setMessage('');
    }, 5000);

    // Ouvrir le panier
    setAfficherPanier(true);
  };

  // Fonction pour afficher ou masquer le panier
  const togglePanier = () => {
    setAfficherPanier(!afficherPanier);
  };

  // Fonction pour supprimer un pass du panier
  const supprimerDuPanier = (pass) => {
    setPanier((prevPanier) => {
      const newPanier = { ...prevPanier };
      const titre = pass.nom_pass;

      newPanier[titre] = {
        ...pass,
        quantite: (newPanier[titre]?.quantite ?? 0) - 1,
      };

      if (newPanier[titre].quantite <= 0) {
        delete newPanier[titre];
        setMessage(`${pass.nom_pass} a été supprimé du panier`);
        setTimeout(() => {
          setMessage('');
        }, 5000);
      }

      return newPanier;
    });
  };

  // Fonction pour réinitialiser le panier
  const reinitialiserPanier = () => {
    setPanier({});
  };

  // Fonction pour calculer le total du panier
const calculerTotal = () => {
  return Object.values(panier).reduce((total, item) => total + item.prix_pass * item.quantite, 0);
};

  // Fonction pour calculer le nombre total d'articles dans le panier
  const calculerNombreArticles = () => {
    return Object.values(panier).reduce((total, item) => total + item.quantite, 0);
  };

  // Fonction pour fermer le panier
  const fermerPanier = () => {
    setAfficherPanier(false);
  };

  // Fonction pour valider le panier
  const validerPanier = () => {
    setPanierValide(true);
    genererBilletPDF(panier);
  };

  // Fonction pour générer un billet PDF avec les détails du panier
  const genererBilletPDF = (panier) => {
    const pdf = new jsPDF();

    // Déterminez les types de passes distincts dans le panier
    const typesDePassDistincts = [...new Set(Object.values(panier).map(item => item.nom_pass))];

    // Utilisez les types de passes distincts pour le titre
    const titre = `Festival de Musique Nation Sound - Billet(s) ${typesDePassDistincts.join(', ')}`;

    pdf.setFontSize(18);
    pdf.setTextColor(255, 74, 147);
    pdf.addImage(logoImage, 'PNG', 10, 10, 40, 40);
    const lines = pdf.splitTextToSize(titre, 170);
    pdf.text(lines, 20, 60);
    pdf.line(10, 50, 200, 50);

    let yPosition = 80;

    Object.values(panier).forEach((item) => {
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      pdf.text(`${item.nom_pass} - Quantité: ${item.quantite}`, 20, yPosition);

      pdf.setFontSize(10);
      pdf.text(`Prix unitaire: ${item.prix_pass} €`, 20, yPosition + 10);
      pdf.text(`Total: ${item.prix_pass * item.quantite} €`, 20, yPosition + 20);

      yPosition += 40;
    });

    pdf.setFillColor(100, 190, 139);
    pdf.rect(10, yPosition, 190, 20, 'F');

    pdf.setFontSize(12);
    pdf.setTextColor(255, 74, 147);
    pdf.text(`Total: ${calculerTotal()} €`, 20, yPosition + 10);

    const qrCodeData = '2024-06-21';
    QRCode.toDataURL(qrCodeData, { errorCorrectionLevel: 'H' }, function (err, url) {
      if (err) throw err;
      pdf.addImage(url, 'PNG', 150, yPosition + 20, 50, 50);
      pdf.save('billet_pass.pdf');
    });
  };

  return (
    <Layout>
      <div className="navbar mt-5 pt-5">
        <button className="panier-button mt-5 me-3" onClick={togglePanier}>
          <FontAwesomeIcon icon={faShoppingCart} /> Panier
          {calculerNombreArticles() > 0 && (
            <span className="badge">{calculerNombreArticles()}</span>
          )}
        </button>
      </div>
  
      {afficherPanier && (
        <div className='panier me-3' style={{ borderRadius: '8px' }}>
          <div className="overlay mt-5" onClick={fermerPanier}></div>
          <div className="">
            {panierValide ? (
            <h2 className='pt-5 h4 coral'style={{ fontWeight: 'bold' }} >Votre panier a bien été validé!</h2>
            ) : (
              <>
                <h2 className='mt-5 pt-5'>🧺 Panier</h2>
                <ul>
                  {Object.values(panier).map((item) => (
                    item.quantite > 0 && (
                      <li key={item.id}>
                        {item.nom_pass} - Quantité: {item.quantite} - Prix: {item.prix_pass * item.quantite} € TTC
                        <button className="btn btn-sm mr-2 fw-bold" onClick={() => supprimerDuPanier(item)}>Supprimer</button>
                      </li>
                    )
                  ))}
                </ul>
                <p className='fw-bold'>Total: {calculerTotal()} € TTC</p>
                <button className="btn btn-sm mr-2 fw-bold" onClick={reinitialiserPanier}>Réinitialiser le panier</button>
                <button className="btn btn-sm mr-2 fw-bold" onClick={fermerPanier}>Fermer le panier</button>
                <button className="btn btn-sm fw-bold" onClick={validerPanier}>Valider le panier</button>
              </>
            )}
          </div>
        </div>
      )}
  
      {message && (
        <div className="popup">
          <p className='coral'>{message}</p>
        </div>
      )}
  
      <div className="container">
        <h1 className="text-center mb-0 mt-3 pt-0 pb-5">Billetterie</h1>
        <p className="text-center mb-0 mt-3 pt-0 pb-5">Pour information, ce site étant fictif, vous n'avez pas d'options de paiement, vous validez votre panier, et votre billet de concert se télécharge automatiquement.</p>
        <div className="row">
          {passes.map((pass) => (
            <div key={pass.id} className="col-md-3 bgWhite ms-2 border mb-4 p-3 d-flex flex-column" style={{ borderRadius: '8px' }}>
              <div>
                <img src={Image} alt="pass" className="img-fluid" style={{ maxWidth: '85%', height: 'auto', display: 'block', margin: '0 auto' }}/>
                <h3 className='ms-4'>{pass.nom_pass}</h3>
                <p className="me-2 ms-4" dangerouslySetInnerHTML={{ __html: pass.description_pass }}></p>
                <p className='ms-4'>Prix: {pass.prix_pass} €</p>
              </div>
              <div className="mt-auto">
                <button className="mb-2 my-2 ms-4" onClick={() => ajouterAuPanier(pass)}>Ajouter au panier</button>
              </div>
            </div>
          ))}
        </div>
        {/* ScrollToTopButton Component */}
        <ScrollToTopButton />
      </div>
    </Layout>
  );
  }

  export default Billetterie;

 