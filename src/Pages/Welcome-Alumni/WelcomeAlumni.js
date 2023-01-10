import React,{useState} from 'react'
import './WelcomeAlumni.css'
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'

export default function WelcomeAlumni() {
    const [Agree, setAgree] = useState('')
    console.log()
    return (
        <div className='overflow-hidden relative' >
            <div className='absolute top-8 left-8 text-2xl font-bold z-10 text-white' >
                <BsArrowLeft />
            </div>
            <div className='welcome-main-cont' >
                <div className='content' >
                    <h1 className='text-4xl leading-10 font-bold' >Welcome to LDRP-ALUMNI</h1>
                    <h3 className='text-2xl leading-10 font-semibold '>Computer-IT  Department</h3>
                    <p className='text-xl leading-10 font-semibold tracking-wide '>“કર ભલા હોગા ભલા”</p>
                </div>
            </div>
            <div className='flex lg:flex-row md:flex-row flex-col justify-between lg:mt-12 md:mt-12 mt-8 items-center px-12 w-full sm:flex-row' >
                <form className='mt-6' >
                    <label>
                        <input type='radio' name='condition' value='Agreed' checked={Agree === 'Agreed'} onChange={(e) => setAgree(e.target.value)} />&nbsp;
                        I Agree Term & Conditions
                    </label><br/>
                    <label>
                        <input type='radio' name='condition' value='Not-Agreed' checked={Agree === 'Not-Agreed'} onChange={(e) => setAgree(e.target.value)} />&nbsp;
                        I can’t Agree Term & Conditions
                    </label>
                </form>
                <div className='flex flex-row mt-6' >
                    <a href='/' className='h-3 w-3 rounded-2xl bg-tableblue mr-2' ></a>
                    <a href='/' className='h-3 w-3 rounded-2xl bg-slate-300 mr-2' ></a>
                    <a href='/' className='h-3 w-3 rounded-2xl bg-slate-300 mr-2' ></a>
                    <a href='/' className='h-3 w-3 rounded-2xl bg-slate-300 mr-2' ></a>
                </div>
                <div className='mt-6' >
                    <a href='/' className='flex flex-row items-center text-tableblue text-xl font-semibold' >Next<BsArrowRight className='ml-2' /></a>
                </div>
            </div>
        </div>
    )
}
