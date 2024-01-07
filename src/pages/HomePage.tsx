import '../App.css';
import InfoCardProfile from '../components/InfoCardProfile';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <div className="App" id='website'>

      <Helmet>

        <link rel="canonical" href="https://www.serbeld.space" />

        <title>Sergio Beleño - Technical Lead (VTEX) | Full Stack Web Developer</title>
        <meta name="description" content="Sergio Beleño, a Technical Leader & Full Stack Web Developer specializing in VTEX, SEO and creating impactful e-commerce experiences." />

        <meta property="og:locale" content="en_CO" />
        <meta property="og:title" content="Sergio Beleño - Technical Lead (VTEX) | Full Stack Web Developer" />
        <meta property="og:description" content="Sergio Beleño, a Technical Leader & Full Stack Web Developer specializing in VTEX, SEO and creating impactful e-commerce experiences." />
        <meta property="og:image" content="https://www.serbeld.space/profilePicture.jpg" />
        <meta property="og:url" content="https://www.serbeld.space" />
        <meta property="og:site_name" content="Sergio Beleño - Technical Lead (VTEX) | Full Stack Web Developer" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@serbeld" />
        <meta name="twitter:title" content="Sergio Beleño - Technical Lead (VTEX) | Full Stack Web Developer" />
        <meta name="twitter:description" content="Sergio Beleño, a Technical Leader & Full Stack Web Developer specializing in VTEX, SEO and creating impactful e-commerce experiences." />
        <meta name="twitter:image" content="https://www.serbeld.space/profilePicture.jpg" />
        <meta name="twitter:url" content="https://www.serbeld.space" />
      </Helmet>

      <InfoCardProfile />
    </div>
  );
}

export default HomePage;
