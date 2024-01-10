import 'animate.css';
import React from 'react';
import Layout from './Layout';
import ScrollToTopButton from './ScrollToTopButton';
import logoEcoEnergy from './assets/imagesEtLogo/images/logo_ecoEnergy.jpg';
import logoFacem from './assets/imagesEtLogo/images/logo_facem.jpg';
import logoFestivalEte from './assets/imagesEtLogo/images/logo_festival_ete.jpg';
import logoMusicalSound from './assets/imagesEtLogo/images/logo_musical_sound.jpg';
import logoRegion from './assets/imagesEtLogo/images/logo_region.jpg';
import logoSncp from './assets/imagesEtLogo/images/logo_sncp.jpg';

const Partners = () => {
  const partnerLogos = [
    logoEcoEnergy,
    logoFacem,
    logoFestivalEte,
    logoMusicalSound,
    logoRegion,
    logoSncp,
  ];

  return (
    <Layout>
      <div className="partners-section">
        <h1 className="text-center pink mb-0 mt-3 pt-0 pb-5">Nos Partenaires</h1>
        <h2 className='text-center pink mb-5'>Merci à tous nos partenaires pour leur soutien et leur collaboration.</h2>
        <div className="row bgWhite">
          {partnerLogos.map((logo, index) => (
            <div className="col-md-4 col-6" key={index}>
              <div className="partner">
                <img src={logo} alt={`Partenaire ${index + 1}`} className="img-fluid mb-4 me-4 animate__animated animate__tada animate__slow animate__repeat-3" />
              </div>
            </div>
          ))}
        </div>
        {/* ScrollToTopButton Component */}
      <ScrollToTopButton />
      </div>
    </Layout>
  );
};

export default Partners;
