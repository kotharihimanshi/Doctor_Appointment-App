import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className='text-gray-800 font-semibold'>CONTACT US</p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>street 1 , Arctic Circle, <br />California, USA.</p>
          <p className='text-gray-500'> Tel: (415) 555-0312 <br /> Email: DocEase@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers</p>
          <p className='text-gray-500'>Learn more about out teams and job openings.</p>
          <button className='border rounded-full bg-primary hover:font-semibold text-white transition-all duration-500 px-8 py-4 text-sm'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
