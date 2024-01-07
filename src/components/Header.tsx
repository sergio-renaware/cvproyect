import './styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faList, faNewspaper, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [path, setPath] = useState("#home");

    useEffect(() => {
        setPath(globalThis.location.pathname);
    }, []); 

    return (
        <header>
            <ul id="menu-main-menu">
                <li className={`menu-item ${(path === '/' || path === "") ? 'current-menu-item' : ''}`}>
                    <NavLink to="/" className="one-page-menu-item" title='About me'>
                        <FontAwesomeIcon icon={faUser} />
                        <span className="name">About</span>
                    </NavLink>
                </li>
                <li className={`menu-item ${path === '/resume' ? 'current-menu-item' : ''}`}>
                    <NavLink to="/resume" className="one-page-menu-item" title='Resume'>
                        <FontAwesomeIcon icon={faList} />
                        <span className="name">Resume</span>
                    </NavLink>
                </li>
                <li className={`menu-item ${path === '/blog' ? 'current-menu-item' : ''}`}>
                    <NavLink to="/blog" className="one-page-menu-item" title='Blog'>
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span className="name">Blog</span>
                    </NavLink>
                </li>
                <li className={`menu-item ${path === '/contact' ? 'current-menu-item' : ''}`}>
                    <NavLink to="/contact" className="one-page-menu-item" title='Contact'>
                        <FontAwesomeIcon icon={faContactCard} />
                        <span className="name">Contact</span>
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;