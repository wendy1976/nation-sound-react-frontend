
import React from 'react';
//Import de mes composants
import Footer from './Footer';
import Header from './Header';

import ListeDeConcerts from './ListeDeConcerts';
import ScrollToTopButton from './ScrollToTopButton';

//Appels de mes composants pour ma page Concerts et programmation
function ConcertsPage() {
  return (
    <div>
      <Header />
        <h1 className="text-center mb-0 mt-3 pt-0 pb-5 boutique">LES CONCERTS & LA PROGRAMMATION</h1>
        <h2 className="text-center mb-0 mt-3 pt-0 pb-5 boutique">Le festival Nation Sound aura lieu les 21, 22 et 23 Juin 2024</h2>   
        <ListeDeConcerts />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default ConcertsPage;
