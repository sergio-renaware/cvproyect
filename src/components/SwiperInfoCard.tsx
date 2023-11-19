
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css'
import "swiper/css/effect-fade";
import backgroundOneSwiper from "../assets/backgroundOneSwiper.jpg"
import backgroundTwoSwiper from "../assets/backgroundTwoSwiper.jpg"
import backgroundThreeSwiper from "../assets/backgroundThreeSwiper.jpg"

const SwiperInfoCard = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            effect={'fade'}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                pauseOnMouseEnter: false,
            }}
            speed={1800}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={backgroundOneSwiper} alt="Wallpaper 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={backgroundTwoSwiper} alt="Wallpaper 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={backgroundThreeSwiper} alt="Wallpaper 3" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperInfoCard;