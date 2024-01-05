import './styles/infoCardProfile.css';
import Header from './Header';
import SwiperInfoCard from './SwiperInfoCard';
import SocialIcons from './SocialIcons';
import { TypeAnimation } from 'react-type-animation';
import CustomButton from './ui/CustomButton';
import { faDownload, faContactCard } from '@fortawesome/free-solid-svg-icons'
import MainContent from './MainContent';

const InfoCardProfile = () => {

    return (
        <div className='flex' id='person'>
            <Header />
            <div className="info-card">
                <div className="profile">
                    <div className="profile-content">
                        <div className="slide">
                            <SwiperInfoCard />
                        </div>
                        <div className="image">
                            <img className="profile-image" rel="image_src" id='profilePicture' src="https://www.serbeld.space/profilePicture.jpg" alt="Sergio Beleño - Technical Lead (VTEX) | Full Stack Web Developer" height={220} width={220} title="Profile picture - Sergio Beleño" />
                        </div>
                        <h1 className="title">Sergio Beleño</h1>
                        <h2 className="subtitle">
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
                        </h2>
                        <div className="social">
                            <SocialIcons />
                        </div>
                    </div>
                    <div className="buttons-info-card flex-center">
                        <CustomButton
                            text='Download CV'
                            icon={faDownload}
                            href='https://www.serbeld.space/sergiobelenocv.pdf'
                            blank={true}
                        />
                        <CustomButton
                            text='Contact Me'
                            icon={faContactCard}
                            href='https://calendly.com/serbeldiaz/30min'
                            blank={true}
                        />
                    </div>
                </div>
            </div>
            <MainContent />
        </div>
    )
}

export default InfoCardProfile;