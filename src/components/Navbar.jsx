import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-1 flex-row justify-between items-center mx-5 bg-transparent my-2 '>
      <div className="text-2xl text-black">EduMe</div>
      <div className="flex flex-row justify-between items-center min-w-25 w-125">
          <div className='cursor-pointer' style={{fontFamily:"poppins"}}>Subjects</div>
          <div className='cursor-pointer'style={{fontFamily:"poppins"}}>courses</div>
          <div className='cursor-pointer'style={{fontFamily:"poppins"}}>Degrees</div>
          <div className='cursor-pointer'style={{fontFamily:"poppins"}}>For Business</div>
      </div>
      <div className="flex w-37.5 flex-row justify-between items-center">
        <div className="bg-white text-black rounded-md p-2 cursor-pointer">Sign up</div>
        <div className="bg-red-500 text-white rounded-md p-2 cursor-pointer">Login</div>
      </div>
    </div>
    
  )
}

export default Navbar
