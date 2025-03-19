import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, docId }) => {

    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc, setReldoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && docId !== doc._id)
            setReldoc(doctorsData)
        }
    }, [doctors, speciality, docId])
    return (
        <div className='flex flex-col gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl text-center font-medium'>Related Doctors</h1>
            <p className="sm:w-1/3 text-sm text-center mx-auto">Trust with us since 10 years</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2 mt-[20px] sm:px-0'>
                {relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-blue-200 cursor-pointer rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500'>
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
        </div>
    )
}

export default RelatedDoctors
