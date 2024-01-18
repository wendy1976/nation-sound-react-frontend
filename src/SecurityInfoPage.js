import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import ScrollToTopButton from './ScrollToTopButton';

function SecurityInfoPage() {
    const [securityInfo, setSecurityInfo] = useState([]);

    useEffect(() => {
        fetch('/api/securityInfos')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setSecurityInfo(data))
            .catch(error => console.error('There was an error fetching the data: ', error));
    }, []);

    return (
        <Layout>
        <div className='security-container mt-5 pt-5'>
            <h1 className="coral text-center mb-0 mt-3 pt-0 pb-5">Informations de sécurité du Festival Nation Sound</h1>
            {securityInfo.map(info => (
                <div key={info.id}>
                    <h2 className='h3' style={{ fontWeight: 'bold' }}>{info.title}</h2>
                    <p>{info.body}</p>
                </div>
            ))}
            {/* ScrollToTopButton Component */}
      <ScrollToTopButton />
        </div>
        </Layout>
    );
}

export default SecurityInfoPage;