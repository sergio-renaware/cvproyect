import './styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faList, faNewspaper, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Header = () => {
    const [hash, setHash] = useState("#home");

    useEffect(() => {
        // Listen for the hashchange event
        window.addEventListener('hashchange', handleHashChange);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []); // Empty dependency array ensures the effect runs once on mount and cleans up on unmount

    function handleHashChange() {
        setHash(window.location.hash);
    }

    return (
        <header>
            <ul id="menu-main-menu">
                <li className={`menu-item ${(hash === '#home' || hash === "") ? 'current-menu-item' : ''}`}>
                    <a href="#home" className="one-page-menu-item" title='About me'>
                        <FontAwesomeIcon icon={faUser} />
                        <span className="name">About</span>
                    </a>
                </li>
                <li className={`menu-item ${hash === '#resume' ? 'current-menu-item' : ''}`}>
                    <a href="#resume" className="one-page-menu-item" title='Resume'>
                        <FontAwesomeIcon icon={faList} />
                        <span className="name">Resume</span>
                    </a>
                </li>
                <li className={`menu-item`}>
                    <a href="https://www.serbeld.space/en" className="one-page-menu-item" title='Blog'  target="_blank">
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span className="name">Blog</span>
                    </a>
                </li>
                <li className={`menu-item`}>
                    <a href="https://calendly.com/serbeldiaz/30min" className="one-page-menu-item" title='Contact' target="_blank">
                        <FontAwesomeIcon icon={faContactCard} />
                        <span className="name">Contact</span>
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;