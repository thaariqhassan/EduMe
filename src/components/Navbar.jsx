import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-1 flex-row justify-between items-center mx-5 bg-transparent my-2'>
        <div className="text-2xl text-black">EduMe</div>
        <div className="flex flex-row justify-between items-center min-w-[100px] w-[500px]">
            <div className='font-poppins'>Subjects</div>
            <div className='font-poppins'>courses</div>
            <div className='font-poppins'>Degrees</div>
            <div className='font-poppins'>For Business</div>
        </div>
      <div className="flex w-[150px] flex-row justify-between items-center">
        <div className="bg-white text-black rounded-md p-2">Sign up</div>
        <div className="bg-red-500 text-white rounded-md p-2">Login</div>
      </div>
      
    </div>
    
  )
}

export default Navbar
