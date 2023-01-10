import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Login.css'
export default function Login() {
    const [formData, setformData] = useState({
        EmailorPhone: '',
        Password: ''
    })
    const [emailError, setemailError] = useState(false)
    const [PasswordError, setPasswordError] = useState(false)

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
        // Storing of data processed here
        console.log(formData)
        // setting input field value to empty
        setformData({
            EmailorPhone: '',
            Password: ''
        })
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
                        <h1 className='font-bold text-loginpage text-center text-2xl'>Log in</h1>
                        {/* Login Form */}
                        <form className='w-full m-auto lg:mt-14 md:mt-20 mt-8' onSubmit={handleSubmit} >
                            {/* Email Input */}
                            <div className="relative z-0">
                                <input type="text" value={formData.EmailorPhone} onChange={(e) => setformData({...formData,EmailorPhone : e.target.value})} id="floating_standard" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_standard" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email or Phone</label>
                                {emailError && <p className='text-red-600 text-sm' >* Please enter valid Email or phone !</p>}
                            </div>
                            {/* Password Input */}
                            <div className="relative z-0 mt-10 text-xl">
                                <input type="password" value={formData.Password} onChange={(e) => setformData({...formData,Password : e.target.value})} id="floating_standard_2" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_standard_2" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                {PasswordError && <p className='text-red-600 text-sm' >* Please enter valid Password !</p>}
                            </div>
                            {/* Login Button */}
                            <button type='submit' className='bg-loginpage w-full p-3 text-white rounded-2xl mt-10 text-lg' >Log in</button>
                            <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col mt-4' >
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
