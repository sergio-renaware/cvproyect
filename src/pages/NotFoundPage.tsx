import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import '../components/styles/MainContent.css'
import Header from "../components/Header";
import GeneralInfoCardProfile from "../components/GeneralInfoCardProfile";

export default function NotFoundPage() {

    const headingStyle = {
        fontSize: "38px",
        color: "white"
    };

    const subHeadingStyle = {
        fontFamily: "Lekton",
        fontSize: "16px",
        color: "#d1d1d1",
        fontWeight: "normal",
    };

    const linkStyle = {
        textDecoration: "none",
        fontWeight: "bold",
    };

    return (
        <div className="App" id='website'>
            <Helmet>

                <link rel="canonical" href="https://www.serbeld.space" />

                <title>Oops! The page you're seeking isn't here (404 - Not Found).</title>
                <meta name="description" content="Apologies, the requested page is unavailable. Please check the URL or navigate to another page. Thank you for your understanding." />

                <meta property="og:locale" content="en_CO" />
                <meta property="og:title" content="Oops! The page you're seeking isn't here (404 - Not Found)." />
                <meta property="og:description" content="Apologies, the requested page is unavailable. Please check the URL or navigate to another page. Thank you for your understanding." />
                <meta property="og:url" content="https://www.serbeld.space" />
                <meta property="og:site_name" content="Oops! The page you're seeking isn't here (404 - Not Found)." />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@serbeld" />
                <meta name="twitter:title" content="Oops! The page you're seeking isn't here (404 - Not Found)." />
                <meta name="twitter:description" content="Apologies, the requested page is unavailable. Please check the URL or navigate to another page. Thank you for your understanding." />
                <meta name="twitter:url" content="https://www.serbeld.space" />
            </Helmet>

            <div className='flex' id='person'>
                <Header />

                <GeneralInfoCardProfile />

                <div className="card-wrap">
                    <div className="content">
                        <h1 style={headingStyle}>404 - Not Found</h1>
                        <h2 style={subHeadingStyle}>Apologies, the requested page is unavailable. Please check the URL or navigate to another page. Thank you for your understanding.</h2>
                        <p>
                            Go to the <NavLink to="/" title="Homepage" style={linkStyle}>Homepage</NavLink>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}