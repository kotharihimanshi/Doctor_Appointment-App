import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'



const About = () => {

  const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "58e772e1-fdd9-4c88-bdfc-b104cad41de5");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully!")
        event.target.reset();
      } else {
        console.log("Error", data);
       toast.error(data.message)
        setResult("");
      }
    };


  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className='text-gray-700 font-bold'>ABOUT US</p>
      </div>

      <div className='flex flex-col md:flex-row my-10 gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 capitalize '>
          <p>Welcome, your trusted partner in managing you healthcare needs conviniently and efficiently here. We understand the challenges individual face when it comes to scheduling doctor appointmentand maintaining their health records.</p>
          <p>We commit to excellence in healthcare technology. We continuously strive to enhance our platform, itnegrating the latest advancements to improve user experience and deliver superior service.Whether You are booking your first appointment or managing ongoing care.We Are here to support you in every way.</p>
          <b className='text-gray-800'>Our Vision,</b>
          <p>Our vision is to create a seamless healthcare experience for every user.We aim to bridge the gap between patients and healthcare providers.Making it easier for you to access the care you need when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4 mt-[100px]'>
        <p className='mb-6'> <span className='text-gray-700 font-semibold '>WHY CHOOSE US ?</span> </p>
        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b className='uppercase'>Efficiency</b>
            <p className='capitalize'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b className='uppercase'>Convinience</b>
            <p className='capitalize'>Access to a network of trusted healthcare proffesionals in your area.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b className='uppercase'>Personalization</b>
            <p className='capitalize'>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>

      {/* Email Us */}
      <motion.div 
        initial =  {{opacity: 0, x:-200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
        className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 under font-light'>With Us!</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready To Make A Move? Let's Build Your Future Together!!</p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text=gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
                </div>
            </div>
            <div className='my-6 text-left'>
                Message:
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 resize-none h-48' name='Message' placeholder='Your Message' required />
            </div>
            <button className='bg-blue-600 mb-10 rounded text-white py-2 px-12'>{result ?  result : "Send Message"}</button>
        </form>

        </motion.div>

    </div>
  )
}

export default About
