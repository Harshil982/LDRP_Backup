import React,{useState} from 'react'

export const ContactForm = () => {
    // State for form Data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    // handling Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        // Process of storing this data to somewhere will be done here
        // .......
        // 
        // Clearing input Boxes
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }
    return (
        <form onSubmit={handleSubmit} className='lg:w-7/12 flex flex-col md:w-7/12 sm:w-full lg:mt-0 md:mt-0 mt-12 ' >
            <input type="text" placeholder='Your Name' className='bg-inputBack p-4 rounded-md focus:outline-none focus:shadow-md' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <input type="email" placeholder='Your Email' className='bg-inputBack p-4 rounded-md focus:outline-none mt-6 focus:shadow-md' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <input type="text" placeholder='Subject' className='bg-inputBack p-4 rounded-md focus:outline-none mt-6 focus:shadow-md' value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
            <textarea placeholder='Your Message ...' className='bg-inputBack p-4 rounded-md focus:outline-none mt-6 h-56 focus:shadow-md' style={{ resize: "none" }} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required ></textarea>
            <button className='bg-tableblue text-white w-full py-4 rounded-md mt-4 font-bold tracking-widest' >SEND</button>
        </form>
    )
}
