import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Login/Login.css'
export default function SignupStepOne() {
    const [formData, setformData] = useState({
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Email: '',
    })
    const [error, setError] = useState(false)

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
            FirstName: '',
            MiddleName: '',
            LastName: '',
            Email: '',
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
                        <h1 className='font-bold text-loginpage text-center text-2xl'>Sign Up</h1>
                        {/* Login Form */}
                        <form className='w-full m-auto lg:mt-6 md:mt-6 mt-8' onSubmit={handleSubmit} >
                            {/* Email Input */}
                            <label>
                                <input type="text" placeholder='First Name' value={formData.FirstName} className='border-b-2 w-full focus:outline-0' onChange={(e) => setformData({ ...formData, FirstName: e.target.value })} required />
                                {error && <p className='text-red-600 text-sm' >* Please enter valid First Name !</p>}
                            </label>
                            <label>
                                <input type="text" placeholder='Middle Name' value={formData.MiddleName} className='border-b-2 w-full focus:outline-0 mt-8' onChange={(e) => setformData({ ...formData, MiddleName: e.target.value })} required />
                                {error && <p className='text-red-600 text-sm' >* Please enter valid Middle Name !</p>}
                            </label>
                            <label>
                                <input type="text" placeholder='Last Name' value={formData.LastName} className='border-b-2 w-full focus:outline-0 mt-8' onChange={(e) => setformData({ ...formData, LastName: e.target.value })} required />
                                {error && <p className='text-red-600 text-sm' >* Please enter valid Last Name !</p>}
                            </label>
                            <label>
                                <input type="email" placeholder='Email' value={formData.Email} className='border-b-2 w-full focus:outline-0 mt-8' onChange={(e) => setformData({ ...formData, Email: e.target.value })} required />
                                {error && <p className='text-red-600 text-sm' >* Please enter valid Email !</p>}
                            </label>
                            {/* Login Button */}
                            <button type='submit' className='bg-loginpage w-full p-3 text-white rounded-2xl mt-10 text-lg' >Next</button>
                            <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col mt-4' >
                                <p>Alredy have a account ?</p>
                                <a href='/' className='text-loginpage font-semibold lg:ml-2 md:ml-2 sm:ml-2 ml-0' >Log in</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
