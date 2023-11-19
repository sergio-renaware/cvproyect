import './styles/infoCardProfile.css';
import Header from './Header';
import profilePicture from "../assets/profilePicture.png"
import SwiperInfoCard from './SwiperInfoCard';
import SocialIcons from './SocialIcons';
import { TypeAnimation } from 'react-type-animation';

const InfoCardProfile = () => {

    return (
        <div>
            <Header />
            <div className="info-card">
                <div className="profile">
                    <div className="profile-content">
                        <div className="slide">
                            <SwiperInfoCard />
                        </div>
                        <div className="image">
                            <img className="profile-image" src={profilePicture} alt="Sergio Beleño" />
                        </div>
                        <div className="title">Sergio Beleño</div>
                        <div className="subtitle">
                            <TypeAnimation
                                sequence={[
                                    'Technical Lead (VTEX)',
                                    3000,
                                    'Full Stack Web Developer',
                                    3000,
                                ]}
                                wrapper="span"
                                cursor={false}
                                speed={50}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                        <div className="social">
                            <SocialIcons />
                        </div>
                    </div>
                    <div className="lnks">
                        <a href="https://ryancv.bslthemes.com/wp-content/uploads/2022/07/Dublin-Resume-Template-Modern.pdf" className="lnk" target="_blank">
                            <span className="text">Download CV</span>
                            <span className="ion ion-android-download"></span>
                        </a>
                        <a href="/developer/#contact" className="lnk">
                            <span className="text">Contact Me</span>
                            <span className="ion ion-ios-paperplane"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCardProfile;