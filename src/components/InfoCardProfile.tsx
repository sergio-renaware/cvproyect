import './styles/infoCardProfile.css';
import Header from './Header';
import profilePicture from "../assets/profilePicture.png"
import SwiperInfoCard from './SwiperInfoCard';
import SocialIcons from './SocialIcons';
import { TypeAnimation } from 'react-type-animation';
import CustomButton from './ui/CustomButton';
import { faDownload, faContactCard } from '@fortawesome/free-solid-svg-icons'

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
                            <img className="profile-image" src={profilePicture} alt="Sergio Beleño" title="Profile picture - Sergio Beleño" />
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
                    <div className="buttons-info-card flex-center">
                        <CustomButton
                            text='Download'
                            icon={faDownload} />
                        <CustomButton
                            text='Contact Me'
                            icon={faContactCard}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCardProfile;