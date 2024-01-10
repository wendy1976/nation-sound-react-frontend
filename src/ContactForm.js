// Importations nécessaires
import React, { useState } from 'react';
import Layout from './Layout';
import ScrollToTopButton from './ScrollToTopButton';

// Composant de formulaire de contact
function ContactForm() {
    // State pour stocker les données du formulaire
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
        agreement: false, // Nouvelle propriété pour la case à cocher
    });

    // State pour gérer l'état de soumission du formulaire
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Gestionnaire de changement de saisie
    function handleInputChange(event) {
        const { name, value, type, checked } = event.target;

        // Si c'est une case à cocher, utilisez 'checked' au lieu de 'value'
        const inputValue = type === 'checkbox' ? checked : value;

        // Mettre à jour le state avec les nouvelles données
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: inputValue,
        }));
    }

    // Gestionnaire de soumission du formulaire
    function handleSubmit(event) {
        event.preventDefault();
        
        // Validation du formulaire
        if (formData.fullName && formData.email && formData.subject && formData.message && formData.agreement) {
            // Envoi des données du formulaire à un serveur (simulé avec console.log)
            console.log(formData);
            setFormSubmitted(true); // Mettre à jour l'état de soumission du formulaire
        } else {
            // Alerte si tous les champs ne sont pas remplis
            alert('Veuillez remplir tous les champs du formulaire et accepter les conditions.');
        }
    }

    // Rendu du composant
    return (
        <Layout>
            <div className="mt-5 pt-5">
            <h1 className="text-center blue mt-5">Formulaire de contact</h1>
            </div>
            <div className="contact-form-container pb-5 pt-5 mt-5 mb-3">
                {/* Afficher un message de remerciement si le formulaire a été soumis */}
                {formSubmitted ? (
                    <p className='coral'>Merci pour votre message! Nous vous répondrons dès que possible.</p>
                ) : (
                    // Afficher le formulaire si le formulaire n'a pas été soumis
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label>Nom complet:</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Entrez votre nom complet" />
                        </div>
                        <div className="form-group">
                            <label>Adresse e-mail:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Entrez votre adresse e-mail" />
                        </div>
                        <div className="form-group">
                            <label>Objet:</label>
                            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Entrez l'objet du message" />
                        </div>
                        <div className="form-group">
                            <label>Message:</label>
                            <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Entrez votre message" />
                        </div>
                        {/* Case à cocher pour autorisation */}
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="agreementCheckbox" name="agreement" checked={formData.agreement} onChange={handleInputChange} />
                            <label className="form-check-label" htmlFor="agreementCheckbox">
                                <span style={{ fontSize: 'x-small', fontStyle: 'italic' }}>
                                    J'autorise Nation Sound à utiliser mon adresse mail pour m'envoyer leurs actualités.
                                </span>
                            </label>
                        </div>
                        {/* Bouton d'envoi du formulaire */}
                        <button type="submit">Envoyer</button>
                    </form>
                )}
                {/* ScrollToTopButton Component */}
                <ScrollToTopButton />
            </div>
        </Layout>
    );
}

export default ContactForm;
 