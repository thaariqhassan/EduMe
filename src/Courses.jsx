import React from 'react'
import CourseCard from './components/CourseCard'

function Courses() {
  return (
    <div className="flex flex-col items-center justify-between gap-10 m-5">
        <div className=" w-100 h-10 shadow border border-gray-300 rounded-2xl">
            <input placeholder='Enter Cources'/>
        </div>
        <div className='flex flex-wrap gap-10'>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        </div>
    </div>
    
  )
}

export default Courses
