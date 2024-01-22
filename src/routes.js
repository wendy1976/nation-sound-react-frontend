import { Route, Routes } from 'react-router-dom';
import Accueil from './Accueil';
import Billetterie from './Billetterie';
import ConcertsPage from './ConcertsPage';
import ContactForm from './ContactForm';
import Faq from './Faq';
import FaqPage from './FaqPage';
import Infos from './Infos';
import LegalNotice from './LegalNotice';
import LoginForm from './LoginForm';
import MyMap from './MyMap';
import MyMap2 from './MyMap2';
import Newsletter from './Newsletter';
import Partners from './Partners';
import SecurityInfoPage from './SecurityInfoPage';


function AppRoutes() {
  return (
   
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route path="/infos/*" element={<Infos />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/contactForm" element={<ContactForm />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/legalNotice" element={<LegalNotice />} />
      <Route path="/billetterie" element={<Billetterie/>} />
      <Route path="/myMap" element={<MyMap />} />
      <Route path="/myMap2" element={<MyMap2 />} />
      <Route path="/faqPage" element={<FaqPage />} />
      <Route path="/concertsPage" element={<ConcertsPage />} />
      <Route path="/SecurityInfoPage" element={<SecurityInfoPage />} />
      <Route path="/loginForm" element={<LoginForm />} />
    </Routes>
  );
}

export default AppRoutes;





