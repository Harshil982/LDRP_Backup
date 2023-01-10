// Import Section
import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Login/Login.css'

export default function SignupStepTwo() {
    // state for Form Data
    const [formData, setformData] = useState({
        Profession: '',
        Password: '',
        RepeatPassword: '',
        Contact: '',
    })

    // Setting error if any
    const [passErr, setpassErr] = useState(false)
    const [contactErr, setcontactErr] = useState(false)

    // Slick carousel setting
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

    // Handling Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Storing of data processed here
        console.log(formData)

        //Checking if repeat password is same as entered password 
        if(!(formData.RepeatPassword === formData.Password))
        {
            setpassErr(true)
            return
        }
        else{setpassErr(false)}

        // Checking if the length of contact number is of 10
        if(formData.Contact.length !== 10)
        {
            setcontactErr(true)
            return
        }
        else{setcontactErr(false)}

        // setting input field value to empty
        setformData({
            Profession: '',
            Password: '',
            RepeatPassword: '',
            Contact: '',
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
                            <label>
                                <input type="text" placeholder='Profession' value={formData.Profession} className='border-b-2 w-full focus:outline-0' onChange={(e) => setformData({ ...formData, Profession: e.target.value })} required />
                            </label>
                            <label>
                                <input type="password" placeholder='Craete Password' value={formData.Password} className='border-b-2 w-full focus:outline-0 mt-8' onChange={(e) => setformData({ ...formData, Password: e.target.value })} required />
                            </label>
                            <label>
                                <input type="password" placeholder='Repeat Password' value={formData.RepeatPassword} className='border-b-2 w-full focus:outline-0 mt-8' onChange={(e) => setformData({ ...formData, RepeatPassword: e.target.value })} required />
                                {passErr && <p className='text-red-600 text-sm' >* Password Not mached !</p>}
                            </label>
                            <label>
                                <input type="tel" placeholder='Contact No.' value={formData.Contact} className='border-b-2 w-full focus:outline-0 mt-8' onChange={(e) => setformData({ ...formData, Contact: e.target.value })} required />
                                {contactErr && <p className='text-red-600 text-sm' >* Enter Valid Contact No. !</p>}
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