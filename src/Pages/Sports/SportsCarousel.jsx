import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination,Autoplay } from "swiper";
import './LDRPSports.css'

export const SportsCarousel = () => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay,EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="/Sports-1.png" alt='Sports-1' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="Sports-2.png" alt='Sports-2' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="Sports-3.png" alt='Sports-3' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="Sports-4.png" alt='Sports-4' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="Sports-2.png" alt='Sports-2' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="Sports-3.png" alt='Sports-3' />
            </SwiperSlide>
        </Swiper>
    )
}
