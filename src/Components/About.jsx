import React from 'react'
import my_img from '../Images/my_img.jpg'
import comment from '../Images/comment.png'
import me from '../Images/aboutImg.jpeg'
export default function About() {
  return (
    <>
<div className='flex my-12 '>
    <h1 className='heading text-orange-500 mx-10 lg:mx-32 my-3'>
        About
    </h1>
    <h2 className='sub heading text-4xl mr-4'>
        About me
    </h2>
    <div  className='h-1 w-12 my-6 mx-2 bg-orange-500'></div>
</div>

      <div className='flex justify-center items-center md:flex-row  flex-col lg:mx-40 md:mx-12 mx-4 my-8' >
        <div className='about-image flex-1 ' >
<img className='h-[400px] w-[400px] rounded-xl' src={me} alt="" />
        </div>

        <div className='about-text flex-1 bg-[#E1DCD7] rounded-xl shadow-xl shadow-stone-400 md:my-0 my-4 mx-4'>

            <div className=''>
                <img className='h-[100px] mb-[-50px]' src={comment} alt="" />
                <p className='p-8 text-amber-900 '>
            Hello! I'm Abhishek Dhar, an enthusiastic undergraduate IT student at Chandigarh Engineering College. I am deeply passionate about harnessing technology to solve real-world problems and am actively involved in various projects and initiatives that allow me to apply my knowledge in practical settings. My academic journey is geared towards mastering the intricacies of information technology and developing my skills in software development and system analysis. I thrive on challenges and am always eager to learn new technologies and methodologies that will equip me to make a significant impact in the tech world. Join me on this journey as I explore the vast landscape of IT, seeking opportunities to innovate and excel.
            </p>
            </div>
            
        </div>
      </div>

    </>
  )
}
