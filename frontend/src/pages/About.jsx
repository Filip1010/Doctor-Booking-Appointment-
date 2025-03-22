import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className='text-center text-3xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-bold'>US</span></p>
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-12 items-center'>
        <img className='w-full md:max-w-[400px] rounded</div>-lg shadow-lg transform transition duration-500 hover:scale-105' src={assets.about_image} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600'>
          <p>Welcome to <span className='font-semibold text-gray-800'>XMEDIKA</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At <span className='font-semibold text-gray-800'>XMEDIKA</span>, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p><span className='font-semibold text-gray-800'>XMEDIKA</span> is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, <span className='font-semibold text-gray-800'>XMEDIKA</span> is here to support you every step of the way.</p>
          <b className='text-gray-800 text-xl'>Our Vision</b>
          <p>Our vision at XMEDIKA is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-2xl my-4 text-center'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-6'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-md transform transition duration-500 hover:scale-105'>
           <b className='text-lg'>Efficiency:</b>
           <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-md transform transition duration-500 hover:scale-105'>
           <b className='text-lg'>Convenience:</b>
           <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-md transform transition duration-500 hover:scale-105'>
           <b className='text-lg'>Personalization:</b>
           <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
