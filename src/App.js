import './App.css';
import InfoCardProfile from './components/InfoCardProfile';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App" id='website'>
      <Helmet>
        <meta property="og:locale" content="en_CO" />
        <meta property="og:title" content="Sergio Beleño - Technical Lead (VTEX) | Full Stack Web Developer" />
        <meta property="og:description" content="Sergio Beleño, VTEX Technical Lead & Full Stack Web Developer. Crafting digital excellence with e-commerce mastery. Explore Sergio's CV for a showcase of technical leadership and innovation in web development." />
        <meta property="og:image" content="https://serbeld.space/profilePicture.jpg" />
        <meta property="og:url" content="www.serbeld.space" />
        <meta property="og:site_name" content="Sergio Beleño - Technical Lead (VTEX) | Full Stack Web Developer" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sergio Beleño - Technical Lead (VTEX) | Full Stack Web Developer" />
        <meta name="twitter:description" content="Sergio Beleño, VTEX Technical Lead & Full Stack Web Developer. Crafting digital excellence with e-commerce mastery. Explore Sergio's CV for a showcase of technical leadership and innovation in web development." />
        <meta name="twitter:image" content="https://serbeld.space/profilePicture.jpg" />
        <meta name="twitter:url" content="https://www.serbeld.space" />
      </Helmet>
      <InfoCardProfile />
    </div>
  );
}

export default App;
