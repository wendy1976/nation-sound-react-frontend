// Importation des composants nécessaires
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'animate.css';
import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable'; // Importation du hook useSwipeable

const GetNotification = () => {
  // Utilisation du hook useState pour stocker les données et l'index actuel
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Utilisation du hook useEffect pour récupérer les données au chargement du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/notifications', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Fonctions pour passer à la notification suivante ou précédente
  const nextNotification = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const previousNotification = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  // Utilisation du hook useSwipeable pour créer des gestionnaires d'événements de balayage
  const handlers = useSwipeable({
    onSwipedLeft: () => nextNotification(),
    onSwipedRight: () => previousNotification(),
  });

  // Rendu du composant
  return (
    <div {...handlers} sx={{ marginTop: '100px', paddingTop: '100px', textAlign: 'center'}}>
      {data ? (
        <div>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '120px' }}>
            {/* Bouton précédent */}
            <Button variant='outlined' size='small' onClick={previousNotification} startIcon={<DoubleArrowIcon sx={{ transform: 'rotate(180deg)' }} />} />

            {/* Titre */}
            <Typography className='coral animate__animated animate__flash animate__infinite' variant='h5' component='div' sx={{ textAlign: 'center', animationDuration: '2s' }}>
              {data[currentIndex].title}
            </Typography>

            {/* Bouton suivant */}
            <Button variant='outlined' size='small' onClick={nextNotification} endIcon={<DoubleArrowIcon />} />
          </Box>
          

          <a href={data[currentIndex].externalLink} target="_blank" rel="noopener noreferrer"style={{ textDecoration: 'none', color: 'inherit' }} >
            <Typography className='coral' variant='body1' sx={{ marginTop: '20px', textAlign: 'center', margin: ['0', 'auto'], maxWidth: ['100%', '80%'] }}>
              {data[currentIndex].body}
            </Typography>
          </a>

          {/* Indicateurs de position (ronds) */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            {data.map((_, index) => (
              <FiberManualRecordIcon
                key={index}
                sx={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                backgroundColor: '#ccc',
                borderRadius: '50%',
                margin: '0 5px',
                cursor: 'pointer',
              ...(index === currentIndex && { backgroundColor: 'blue' }),
            }}
          onClick={() => setCurrentIndex(index)}
          />
        ))}
        </Box>
      </div>
      ) : null}
    </div>
  );
}

export default GetNotification;