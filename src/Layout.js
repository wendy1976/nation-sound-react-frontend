// pour importer mon header et mon footer dans toutes mes pages, sauf la page de carte interactive
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
   