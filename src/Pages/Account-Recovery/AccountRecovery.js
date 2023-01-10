import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Login/Login.css'
import './Verify.css'

export default function AccountRecovery() {
    document.title = "Account Recovery"
    const [error, setError] = useState(false)
    const [contact, setContact] = useState('');

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
        console.log(contact)
        if(contact.length !== 10)
        {
            setError(true)
            return
        }
        else
        {
            setError(false)
        }
        // Storing of data processed here
        // setting input field value to empty
        setContact('')
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
                        <h1 className='font-bold text-loginpage text-center text-2xl'>Account Recovery</h1>
                        {/* Login Form */}
                        <form className='w-full m-auto lg:mt-6 md:mt-6 mt-8' onSubmit={handleSubmit} >
                            {/* Email Input */}
                            {/* Login Button */}
                            <label>
                                <input type="tel" placeholder='Contact No.' value={contact} className='border-b-2 w-full focus:outline-0 lg:mt-16 md:mt-16 mt-4' onChange={(e) => setContact(e.target.value)} required />
                                {error && <p className='text-red-600 text-sm' >* Enter Valid Contact No. !</p>}
                            </label>
                            <button type='submit' className='bg-loginpage w-full p-3 text-white rounded-2xl mt-8 text-lg' >Send OTP</button>
                            <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col mt-10' >
                                <p>Don’t have a account ?</p>
                                <a href='/' className='text-loginpage font-semibold lg:ml-2 md:ml-2 sm:ml-2 ml-0' >Sign Up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}