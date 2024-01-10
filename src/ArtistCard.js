import moment from 'moment';
import 'moment/locale/fr';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

function ArtistCard() {
  const [concerts, setConcerts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState(null);

  const openModal = (concert) => {
    setSelectedConcert(concert);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
          setConcerts(data);
        } else {
          console.log('No data received');
        }
      })
      .catch(error => {
        console.log('Fetch error: ', error);
      });
  }, []);

  const customStyles = {
    overlay: {
      backgroundColor: '#14213D'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      borderRadius: '4px',
      padding: '20px',
      width: '80%',
      height: '80%',
      maxWidth: '1100px',
      maxHeight: '500px',
      overflow: 'auto'
    },
    modalTitle: {
      marginTop: '25px', // Ajoutez une marge supérieure au titre
    }
  };

  return (
    <div className="cards-container">
      <div className="row">
        {concerts.map((concert, index) => {
          const baseUrl = 'http://localhost:8000/images/concerts/';
          const imageUrl = baseUrl + concert.image;

          return (
            <div key={index} className="col-md-6 mb-5 d-flex">
              <div className="artist-card bgWhite p-4 rounded-3 shadow-lg d-flex flex-column" style={{ border: '1px solid #ccc', height: '100%' }}>
                <div className="row">
                  <div className="col-12 col-md-5">
                    <img src={imageUrl} alt={concert.image} className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-7">
                    <h2 className="blue">{concert.nom_artiste}</h2>
                    <p style={{ fontWeight: 'bold' }}>Scene: {concert.scene}</p>
                    <p style={{ fontWeight: 'bold' }}>Musique: {concert.musique}</p>
                    <p style={{ fontWeight: 'bold' }}>Date: Le {moment(concert.date_concert.date).locale('fr').format('D MMMM [à] HH:mm')}</p>
                    <button onClick={() => openModal(concert)} className="">Voir +</button>
                  </div>
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                  <h2 style={customStyles.modalTitle}>{selectedConcert?.nom_artiste}</h2>
                  <img
                    src={baseUrl + selectedConcert?.image}
                    alt={selectedConcert?.image}
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <p dangerouslySetInnerHTML={{ __html: selectedConcert?.designation }}></p>
                  <p dangerouslySetInnerHTML={{ __html: selectedConcert?.description }}></p>
                  <p style={{ fontWeight: 'bold' }}>Scene: {selectedConcert?.scene}</p>
                  <p style={{ fontWeight: 'bold' }}>Musique: {selectedConcert?.musique}</p>
                  <p style={{ fontWeight: 'bold' }}>Date: Le {moment(selectedConcert?.date_concert.date).locale('fr').format('D MMMM [à] HH:mm')}</p>
                  <button onClick={closeModal}>Fermer</button>
                </Modal>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArtistCard;

