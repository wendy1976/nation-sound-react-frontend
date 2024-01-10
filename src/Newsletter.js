
import React, { useState } from 'react';
import Layout from './Layout';
import NewsletterForm from './NewsletterForm';


function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    newsletterAgreement: false,
  });

  const [subscribed, setSubscribed] = useState(false); // Nouvel état pour le suivi de l'abonnement

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simuler l'envoi des données du formulaire au serveur
    // (vous devrez implémenter la logique d'abonnement réelle ici)
    console.log(formData);

    // Réinitialiser le formulaire après l'abonnement réussi
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      newsletterAgreement: false,
    });

    // Mettre à jour l'état pour afficher le message de confirmation
    setSubscribed(true);
  };

  return (
    <Layout>
      <div className='mt-5 pt-5'>
        <h1 className="text-center mt-5 mb-5">Inscription à la newsletter</h1>
        {/* Afficher un message de confirmation si l'utilisateur s'est abonné */}
        {subscribed ? (
          <p className='text-center'>Merci de vous être abonné à notre newsletter!</p>
        ) : (
          <NewsletterForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        )}
        
      </div>
    </Layout>
  );
}

export default Newsletter;

