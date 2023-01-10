import React, { useRef, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'
import ProfilePic from './assets/Group 8.png'

export default function CreateProfile() {
    // Setting Refs for all inout 
    const fileRef = useRef(null)
    const NameRef = useRef(null)
    const mailRef = useRef(null)
    const aboutRef = useRef(null)
    const jobRef = useRef(null)
    const passingYearRef = useRef(null)
    const expertiseRef = useRef(null)
    const techRef = useRef(null)

    // State For Form Data
    const [ProfileData, setProfileData] = useState({
        image: '',
        name: '',
        email: '',
        about: '',
        currentJob: '',
        passingYear: '',
        currentExpertise: '',
        knownTechnologies: ''
    })
    const handleFileInput = (e) => {
        if((e.target.files[0].type).includes("image"))
        {
            setProfileData({...ProfileData,image : e.target.files[0].name})
        }
        else
        {
            alert("Enter Image File Only")
            return
        }
    }
    //Function for Handling Submit
    const handleSubmit = () => {
        if (!ProfileData.name) { alert("Please Enter Your name"); NameRef.current.focus(); return }
        if (!ProfileData.email) { alert("Please Enter Your email"); mailRef.current.focus(); return }
        if (!(ProfileData.email.includes('@'))) { alert("Please Enter Valid email"); mailRef.current.focus(); return }
        if (!ProfileData.about) { alert("Please Fill About section "); aboutRef.current.focus(); return }
        if (!ProfileData.currentJob) { alert("Please Enter Your currentJob"); jobRef.current.focus(); return }
        if (!ProfileData.passingYear) { alert("Please Enter Your Passing Year"); passingYearRef.current.focus(); return }
        if (!ProfileData.currentExpertise) { alert("Please Enter Your Current Expertise"); expertiseRef.current.focus(); return }
        if (!ProfileData.knownTechnologies) { alert("Please Enter Known Technologies"); techRef.current.focus(); return }
        if (!ProfileData.image) { alert("Please Upload Your image");return }
        window.location.replace("/hello")
    }
    return (
        <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between min-h-screen' >
            <div className='bg-tableblue lg:w-5/12 md:w-5/12 sm:w-5/12 w-full lg:min-h-screen md:min-h-screen sm:min-h-screen pb-12 lg:rounded-r-2xl md:rounded-r-2xl sm:rounded-r-2xl' >
                <h1 className='flex p-4 pl-8 items-center text-2xl text-white font-semibold tracking-wide' ><BsArrowLeft className='mr-3' />Profile</h1>
                <div className='Profile-Pic-div lg:h-64 lg:w-64 md:h-64 md:w-64 sm:h-48 sm:w-48 w-48 h-48 m-auto overflow-hidden relative mt-12' >
                    <img src={ProfilePic} alt="Profile Pic" className='h-full w-full rounded-full bg-gray-300' />
                    {/* Image Input */}
                    <div className='absolute lg:bottom-4 lg:right-4 md:bottom-4 md:right-4 sm:bottom-3 sm:right-2 bottom-2 right-2' >
                        <input type='file' accept="image/*" ref={fileRef} style={{ display: "none" }} onChange={handleFileInput} />
                        <button className='text-4xl bg-white rounded-full ' onClick={() => { fileRef.current.click() }} ><IoMdAdd /></button>
                    </div>
                </div>
                <form className='w-9/12 m-auto mt-16' >
                    {/* Name Input */}
                    <div className="relative z-0 m-auto">
                        <input type="text" ref={NameRef} value={ProfileData.name} onChange={(e) => setProfileData({ ...ProfileData, name: e.target.value })} id="floating_standard" className="block py-2.5 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                        <label htmlFor="floating_standard" className="absolute text-base text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>
                    <div className="relative z-0 m-auto mt-12">
                        {/* Email Input */}
                        <input type="email" ref={mailRef} value={ProfileData.email} onChange={(e) => setProfileData({ ...ProfileData, email: e.target.value })} id="floating_standard" className="block py-2.5 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                        <label htmlFor="floating_standard" className="absolute text-base text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your email</label>
                        {false && <p className='text-red-600 text-sm' >* Please enter valid Email !</p>}
                    </div>
                </form>
            </div>
            <div className='lg:w-6/12 md:w-6/12 sm:w-6/12 w-10/12 lg:m-0 md:m-0 sm:m-0 m-auto lg:pr-16 md:pr-16 sm:pr-16' >
                <div className='lg:flex md:flex sm:flex hidden justify-end pt-4' >
                    <button type='submit' onClick={handleSubmit} className='text-2xl text-tableblue font-bold' >Next</button>
                </div>
                {/* About Input */}
                <div className="relative z-0 lg:mt-28 md:mt-28 sm:mt-28 mt-8">
                    <input type="text" ref={aboutRef} value={ProfileData.about} onChange={(e) => setProfileData({ ...ProfileData, about: e.target.value })} id="floating_standard" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_standard" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">About</label>
                </div>
                {/* Current Job input */}
                <div className="relative z-0 mt-12">
                    <input type="text" ref={jobRef} value={ProfileData.currentJob} onChange={(e) => setProfileData({ ...ProfileData, currentJob: e.target.value })} id="floating_standard" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_standard" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Current Job</label>
                </div>
                {/* Passing Year Input */}
                <div className="relative z-0 mt-12">
                    <input type="text" ref={passingYearRef} value={ProfileData.passingYear} onChange={(e) => setProfileData({ ...ProfileData, passingYear: e.target.value })} id="floating_standard" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_standard" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year Of Passing</label>
                </div>
                {/* Expertise Input */}
                <div className="relative z-0 mt-12">
                    <input type="text" ref={expertiseRef} value={ProfileData.currentExpertise} onChange={(e) => setProfileData({ ...ProfileData, currentExpertise: e.target.value })} id="floating_standard" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_standard" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Current Expertise</label>
                </div>
                {/* knownTechnologies Input */}
                <div className="relative z-0 mt-12">
                    <input type="text" ref={techRef} value={ProfileData.knownTechnologies} onChange={(e) => setProfileData({ ...ProfileData, knownTechnologies: e.target.value })} id="floating_standard" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_standard" className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Known Technologies </label>
                </div>
                <p className='text-red-600 mt-12' >*All field are Mandatory to fill</p>
                <div className='lg:hidden md:hidden sm:hidden flex justify-end pt-4 mb-8' >
                    <button type='submit' onClick={handleSubmit} className='text-2xl text-tableblue font-bold' >Next</button>
                </div>
            </div>
        </div>
    )
}