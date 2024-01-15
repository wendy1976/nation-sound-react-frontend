import React, { useEffect, useState } from 'react';

const GetNotification = () => {
  const [data, setData] = useState(null);

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

  // Vous pouvez afficher les données ici, ou retourner null si les données ne sont pas encore chargées
  return data ? <div>{JSON.stringify(data)}</div> : null;
};

export default GetNotification;