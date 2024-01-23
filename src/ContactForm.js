// Importations nécessaires
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
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
        recaptchaValue: '', // Ajout de la propriété recaptchaValue
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

        // Ajoutez cette ligne pour déclarer recaptchaValue
        const recaptchaValue = formData.recaptchaValue;

        if (formData.fullName && formData.email && formData.subject && formData.message && formData.agreement && recaptchaValue) {
            // Envoyer les données du formulaire à un serveur (simulé avec console.log)
            console.log(formData);

            // Envoyer la valeur reCAPTCHA côté serveur
            fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                // Si la vérification est réussie, marquez le formulaire comme soumis
                setFormSubmitted(true);
            })
            .catch(error => {
                // Si la vérification échoue, affichez un message d'erreur ou prenez d'autres mesures nécessaires
                console.error('Erreur lors de la vérification reCAPTCHA:', error);
            });
        } else {
            alert('Veuillez remplir tous les champs du formulaire, accepter les conditions et compléter le reCAPTCHA.');
        }
    }

    // Gestionnaire de changement reCAPTCHA
    const handleRecaptchaChange = (value) => {
        // Mettre à jour le state avec la valeur reCAPTCHA
        setFormData((prevFormData) => ({ ...prevFormData, recaptchaValue: value }));
    };

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
                        {/* reCAPTCHA */}
                        <ReCAPTCHA sitekey="6LcR51kpAAAAAPX21K1QtHoWCUxm1q691dahwNTT" onChange={handleRecaptchaChange} />
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
