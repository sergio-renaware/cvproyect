import './styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faList, faNewspaper, faContactCard } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <ul id="menu-main-menu">
                <li className="menu-item current-menu-item">
                    <a href="#home" className="one-page-menu-item" title='About me'>
                        <FontAwesomeIcon icon={faUser} />
                        <span className="name">About</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#resume" className="one-page-menu-item" title='Resume'>
                        <FontAwesomeIcon icon={faList} />
                        <span className="name">Resume</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#blog" className="one-page-menu-item" title='Blog'>
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span className="name">Blog</span>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#contact" className="one-page-menu-item" title='Contact'>
                        <FontAwesomeIcon icon={faContactCard} />
                        <span className="name">Contact</span>
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;