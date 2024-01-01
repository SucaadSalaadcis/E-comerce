import React,{useState} from 'react'


function Hero() {
const [isOpen , setisOpen] = useState(true);

 const handleIsOpen = () => {
    setisOpen(false)
 }
  return (
    // bg-[url()]
    <div className='h-[400px] sm:px-20 sm:flex justify-between'>
        <div className='mt-20 w-[580px]'>
        <h1  className='font-bold sm:text-5xl text-md ml-7'>Best Place For Shopping In Your Area </h1>
        <p className='sm:mt-8 mt-5 text-md sm:text-2xl px-5 ml-3  '>We got you everything that you need. Visit us<br/> anywhere any time</p>
        <button className='bg-fourthColor ml-7 px-5 mt-5 sm:px-10 py-3 sm:text-3xl rounded text-white'>Explore More</button>
        </div>
        <img className='rounded-xl mt-16 block px-10' src="https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?size=626&ext=jpg&ga=GA1.2.407266189.1693377002&semt=sph" alt="" />

    </div>
  )
}

export default Hero