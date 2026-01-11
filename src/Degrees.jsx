import React from "react";
import CourseCard from "./components/CourseCard";

function Degrees() {
  return (
    <>
    <div className="h-16 shadow" />
    <div className="flex flex-col items-start justify-between gap-10 m-5">
        <div className=" w-100 h-10 shadow border border-gray-300 rounded-2xl">
            <input className="w-full h-full rounded-2xl px-4" placeholder='Enter Degrees'/>
        </div>
        <div className='flex flex-wrap gap-10'>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        </div>
    </div>
    </>
    
  )
}

export default Degrees;
