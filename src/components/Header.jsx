import React, { useState } from 'react'

function Header() {
    const [isOpen, setisOpen] = useState(false);


    const handleIsOpen = ()=> {
     setisOpen(true)
    } 
    const handleIsClose = () => {
        setisOpen(false)
    }

  return (
    <div className='bg-fourthColor flex p-5 justify-between text-white'>
        <h1 className='font-bold text-2xl sm:text-4xl '>E-comerce </h1>
        <i onClick={handleIsOpen} style={{display: isOpen === true ? "none" : ""}} class="fa fa-solid fa-bars absolute right-2 text-3xl text-white sm:hidden"></i>
        <i onClick={handleIsClose} style={{display: isOpen=== true ? "block" : "none"}} class="fa-solid fa-x absolute right-2 text-3xl hidden "></i>
        <ul style={{display: isOpen=== true ? "block" : ""}} className='hidden gap-5 sm:flex-row sm:mt-0 mt-5 sm:gap-20 text-2xl sm:text-4xl sm:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact Us</li>
        </ul>

       <ol className='text-4xl'>
        <li><i class='fa-solid fa-cart-shopping mr-[22px]'></i></li>
       </ol>



    </div>
  )
}

export default Header