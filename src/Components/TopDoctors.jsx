import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl text-center font-medium'>Top Doctors to Consult With</h1>
      <p className="sm:w-1/3 text-sm text-center mx-auto">Trust with us since 10 years</p>
      <div className='w-full grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item,index) => (
            <div  onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-blue-200 cursor-pointer rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500'>
                <img className='bg-blue-50' src={item.image} alt={item.name} />
               <div className='p-4'>
                <div className='flex items-center gap-2 text-center text-sm text-green-500 '>
                    <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
               </div>
            </div>
        ))}
      </div>
      <button onClick={() =>{ navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-2 py-3 rounded-full mt-10 w-[200px] hover:bg-transparent border hover:font-bold mx-auto'>More Info</button>
    </div>
  )
}

export default TopDoctors
