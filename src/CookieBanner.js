import React from 'react';
import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="J'accepte"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={0} // 0 = j'ai mis 0  pour les besoins de la formation, sinon c'est entre 6 mois et 1 an
    >
      Ce site utilise des cookies pour améliorer votre expérience. En continuant à utiliser ce site, vous acceptez leur utilisation.
    </CookieConsent>
  );
}

export default CookieBanner;