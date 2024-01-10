import React from 'react';
import './index.css'; // Import du fichier de styles global

function NewsletterForm({ formData, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="newsletter-form-container">
      <label htmlFor="firstName">Prénom:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="Votre prénom"
        required
      />
      <br />
      <label htmlFor="lastName">Nom:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Votre nom"
        required
      />
      <br />
      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Votre adresse e-mail"
        required
      />
      <br />
      {/* Case à cocher pour autorisation */}
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="newsletterAgreementCheckbox"
          name="newsletterAgreement"
          checked={formData.newsletterAgreement}
          onChange={handleInputChange}
          required
        />
        <label className="form-check-label" htmlFor="newsletterAgreementCheckbox">
          <span style={{ fontSize: 'x-small', fontStyle: 'italic' }}>
            J'autorise Nation Sound à utiliser mon adresse mail pour m'envoyer la Newsletter.
          </span>
        </label>
      </div>
      {/* Bouton d'envoi du formulaire */}
      <button className="mx-auto d-block"type="submit">S'abonner</button>
    </form>
  );
}

export default NewsletterForm;


