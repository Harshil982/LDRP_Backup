import React, { useState } from 'react'
import styles from './ContactUs.module.css'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { BiPhoneCall } from 'react-icons/bi'
import { ContactForm } from './ContactForm'

export const ContactUs = () => {
    return (
        <div className='my-12'>
            {/* Title */}
            <div className='flex items-center justify-center my-8 m-auto' >
                <div className='w-20 h-0.5 bg-tableblue mr-4' ></div>
                <h1 className='text-center text-3xl Sports-title' >Have Some Questions ?</h1>
            </div>
            <img src="/wave.png" className='wave-img' alt="wave" />
            {/* main Flex Container */}
            <div className="contactdiv-container w-4/5 m-auto mt-14 flex flex-col lg:flex-row justify-between md:flex-row sm:flex-col sm:justify-center">
                {/* div for info about LDRP */}
                <div className='lg:w-2/5 md:w-2/5 sm:w-full' >
                    <img src="/contactImg.png" alt="contact-img" className='w-4/5 m-auto lg:m-0 md:m-0' title='Have a Good Day' />
                    <div className='contact-info mt-8 w-full m-auto' >
                        <div className='flex flex-row items-center mt-6' >
                            <p><CiLocationOn className={styles['location-icon']} /></p>
                            <p className=' text-textGray ml-8 ' >LDRP Institute of Technology & Research,<br />Near KH-5,Sector-15,Gandhinagar - 382015.</p>
                        </div>
                        <div className='flex flex-row items-center mt-6' >
                            <CiMail className={styles['location-icon']} />
                            <p className=' text-textGray ml-8' >info@ldrp.ac.in</p>
                        </div>
                        <div className='flex flex-row items-center mt-6' >
                            <BiPhoneCall className={styles['location-icon']} />
                            <p className=' text-textGray ml-8' >+ 91 - 079 - 23241492</p>
                        </div>
                        <div className='flex flex-row items-center mt-6' >
                            <BiPhoneCall className={styles['location-icon']} />
                            <p className=' text-textGray ml-8' >+ 91 - 079 - 23241493</p>
                        </div>
                    </div>
                </div>
                {/* div for Taking Questions */}
                <ContactForm />
            </div>
        </div>
    )
}
