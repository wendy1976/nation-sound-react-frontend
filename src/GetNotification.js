import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

const GetNotification = () => {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextNotification = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const previousNotification = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  return (
    <div sx={{ marginTop: '100px', paddingTop: '100px', textAlign: 'center' }}>
      {data ? (
        <div>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '120px' }}>
            {/* Bouton précédent */}
            <Button variant='outlined' size='small' onClick={previousNotification} startIcon={<ChevronLeftIcon />}>
              Précédent
            </Button>
  
            {/* Titre */}
            <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}>
              {data[currentIndex].title}
            </Typography>
  
            {/* Bouton suivant */}
            <Button variant='outlined' size='small' onClick={nextNotification} endIcon={<ChevronRightIcon />}>
              Suivant
            </Button>
          </Box>
  
          <Typography variant='body1' sx={{ marginTop: '20px', textAlign: 'center' }}>
            {data[currentIndex].body}
          </Typography>
  
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
              ...(index === currentIndex && { backgroundColor: '#555' }),
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
