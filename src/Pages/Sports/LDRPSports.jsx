import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SportsCarousel } from './SportsCarousel';
import './LDRPSports.css'

export const LDRPSports = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        swipeToSlide: true,
    };
    return (
        <div className='Sports-main-container' >
            <div className='flex items-center justify-center my-8 m-auto' >
                <div className='w-20 h-0.5 bg-tableblue mr-4' ></div>
                <h1 className='text-center text-3xl Sports-title' >Sports</h1>
            </div>
            <img src="/wave.png" className='wave-img' alt="wave" />
            <p className='text-center text-textColor w-10/12 m-auto' >LDRP is having its own name and fame in sports & games. <br />College students have participated in different sports & games like Cricket, Football, Volleyball, Kabaddi, Kho-Kho, Badminton, Table Tennis, Chess, Swimming, Athletics, Taekwondo, Cross Country etc….</p>
            <SportsCarousel />
            <p className='text-center leading-8 w-10/12 m-auto text-textColor' >This year 47 students have represented Kadi Sarva Vishwavidyalaya in All India Inter University and West Zone Inter University in different games. Above that college Team participated in Invitation Tournaments like PETROCUP, CONCOURS & ELITE CORE, J.G.CUP, ADANI CUP,NIRMA  and SHAURYA. Every Year college is organizing Inter Branch sports fest called “TRIUNFADOR – Fighter kabhi haar nahi maanta’. Most awaited event of the college is “SPORTS MAN AND SPORTS WOMAN OF THE YEAR.</p>
            <div className='flex lg:flex-row lg:justify-between w-10/12 m-auto my-8 flex-col md:flex-row md:justify-between' >
                <div className='img-cont w-full lg:w-2/5 md:w-2/5' >
                    <Slider {...settings}>
                        <img src="/Laksh.png" className='w-full' alt="" />
                        <img src="/Laksh.png" className='w-full' alt="" />
                        <img src="/Laksh.png" className='w-full' alt="" />
                        <img src="/Laksh.png" className='w-full' alt="" />
                        <img src="/Laksh.png" className='w-full' alt="" />
                    </Slider>
                </div>
                <div className='description lg:w-6/12 md:6/12 w-full lg:mt-0 md:mt-0 mt-8'  >
                    <p className='text-textColor' ><span className='text-tableblue font-bold text-2xl' >LAKSH</span>&nbsp; (“IT DOESN’T GET EASIER YOU GET STRONGER”)</p>
                    <p className='mt-6 leading-8 text-textColor text-justify text-base' >The LAKSH started in Kadi Sarva Vishwavidyalaya from the year 2018-2019 under the guidance of our Hon’ble President Shri Vallabhbhai M. Patel Sir.
                        Kadi Sarva Vishwavidyalaya strongly supported financially and morally throughout the event.<br />
                        Every year a maximum number of students (boys & girls) have participated in LAKSH from LDRP ITR.<br />
                        The LAKSH is designed on Fitness Components like Speed, Endurance, Flexibility, Agility, Strength, Stamina, Power, Coordination and Balance.
                        To prove yourself in each task in all the three rounds with minimum time.
                        Final Round has been conducted at Uttarakhand.<br />
                        Winner receives Rs.10000/- cash award, Trophy and many more.</p>
                </div>
            </div>
            <div className='flex lg:flex-row-reverse lg:justify-between w-10/12 m-auto my-8 flex-col md:flex-row-reverse md:justify-between' >
                <div className='img-cont w-full lg:w-2/5 md:w-2/5' >
                    <Slider {...settings}>
                        <img src="/Manali.png" className='w-full' alt="" />
                        <img src="/Manali.png" className='w-full' alt="" />
                        <img src="/Manali.png" className='w-full' alt="" />
                        <img src="/Manali.png" className='w-full' alt="" />
                        <img src="/Manali.png" className='w-full' alt="" />
                    </Slider>
                </div>
                <div className='description lg:w-6/12 md:6/12 w-full lg:mt-0 md:mt-0 mt-8'  >
                    <p className='text-textColor' ><span className='text-tableblue font-bold text-2xl' >Manali Camp</span></p>
                    <p className='mt-6 leading-8 text-textColor text-justify text-base' >Every year our university Kadi Sarva Vishwavidyalaya has organized Manali trekking camp for 100 students for 10 days of all constituent colleges.
                        The maximum number of students from LDRP ITR is taking advantage of this trekking camp. <br />
                        You will visit Bhrigu Lake, Hidimba Temple, Jogini waterfalls, Vashishtha Kund, Old Manali and many more… <br />
                        Manali is one of the most beautiful adventure destinations of India. A gift of the Himalayas to the world. The place is a classic blend of peace and tranquility which makes it a haven for nature lovers and adventure enthusiasts.
                        With super views of the Dhauladhar and Pir Panjal Ranges, and with mountain adventures beckoning from all directions, Manali is a year round magnet for adventure lovers.</p>
                </div>
            </div>
        </div>
    )
}
