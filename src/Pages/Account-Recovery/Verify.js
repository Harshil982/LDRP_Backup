import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import '../Login/Login.css'
import './Verify.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {RxCrossCircled} from 'react-icons/rx'

export default function Verify() {
    const [error, setError] = useState(false)
    const [OTP, setOTP] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(OTP)
        // Storing of data processed here
        // setting input field value to empty
    }
    return (
        <div className='Login-container w-full' >
            <div className='wrapper-cont' >
                <div className='Login-content-container w-9/12 m-auto bg-white flex lg:flex-row lg:justify-between md:flex-row md:justify-between sm:flex-col flex-col p-8 rounded-2xl' >
                    <div className='lg:w-6/12 md:w-6/12 w-full h-full' >
                        <Slider {...settings}>
                            <img src='/Sports-1.png' className='w-full overflow-hidden lg:h-96 md:h-96 h-64 rounded-2xl' alt='Login' />
                            <img src='/Sports-1.png' className='w-full overflow-hidden lg:h-96 md:h-96 h-64 rounded-2xl' alt='Login' />
                            <img src='/Sports-1.png' className='w-full overflow-hidden lg:h-96 md:h-96 h-64 rounded-2xl' alt='Login' />
                            <img src='/Sports-1.png' className='w-full overflow-hidden lg:h-96 md:h-96 h-64 rounded-2xl' alt='Login' />
                        </Slider>
                    </div>
                    <div className='lg:w-5/12 md:w-5/12 lg:mt-0 md:mt-0 mt-8 w-full h-full' >
                        {/* Login Title */}
                        <h1 className='font-bold text-loginpage text-center text-2xl'>Verify</h1>
                        {error ? <div className='flex flex-row text-red-600 items-center text-lg mt-8' ><RxCrossCircled /><p  className='ml-2'>Can’t Send OTP !</p></div> : <div className='flex flex-row text-green-500 items-center text-base mt-8'><AiOutlineCheckCircle className='mr-2' />OTP Sent Succesfully.....</div>}
                        {/* Login Form */}
                        <form className='w-full m-auto lg:mt-6 md:mt-6 mt-8' onSubmit={handleSubmit} >
                            {/* Email Input */}
                            {/* Login Button */}
                            <div className='otp-Container' >
                                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="any" disabled={false} className="otp-main" />
                            </div>
                            <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col mt-4' >
                                <p>Didn’t get OTP ? </p>
                                <a href='/' className='text-loginpage font-semibold lg:ml-2 md:ml-2 sm:ml-2 ml-0' >Resend</a>
                            </div>
                            <button type='submit' className='bg-loginpage w-full p-3 text-white rounded-2xl mt-8 text-lg' >Verify</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}