import React from 'react'
import my_img from '../Images/my_img.jpg'
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import one from '../Images/three.jpeg'
import { IoMdDownload } from "react-icons/io";
export default function Home() {
  return (
    <>

     <div className='flex justify-center items-center md:flex-row flex-col h-screen mx-12'>
        
        <div className='image-box lg:mx-12'>
<div className='image '>
    <img className='rounded-full w-full h-auto lg:h-[400px] max-w-96 md:my-0 my-12 ' src={one} alt="me" />
</div>
        </div>

        <div className='text-box mx-24 flex-1'>
<div className='heading'>
    <h1 className='text-5xl font-extrabold'>"Greetings, Explorer!"</h1>
</div>
<div className='sub-heding my-4'>
<p className='text-xl'>"Hi there! I'm <span className='text-orange-700'>Abhishek Dhar</span>, currently navigating the intricate world of Information Technology—where I transform code into solutions and coffee into code. Join me as I decode challenges and innovate the future of tech."</p>
</div>
<div className='social-media '>
    <ul className='flex '>
        <Link to='/'>
        <li>
        <FaGithub  className='text-xl mx-3'/>
        </li>
        </Link>

        <Link to='/'>
        <li>
        <CiLinkedin className='text-xl mx-3'/>
        </li>
        </Link>

        <Link to='/'>
        <li>
        <FaInstagram className='text-xl mx-3'/>
        </li>
        </Link>

        <Link to='/'>
        <li>
        <CiFacebook className='text-xl mx-3'/>
        </li>
        </Link>


        <Link to='/'>
        <li>
        <SiLeetcode className='text-xl mx-3'/>
        </li>
        </Link>
        
        
    </ul>
</div>

<div className='btn my-3 lg:my-6'>
    <Link to="/contact">
<button type="button" class="text-white bg-orange-500 hover:bg-orange-400/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">

<CiMail className=' font-extrabold text-xl mx-2 '  />
Contact Me
</button>
</Link>


<a href="/Resume(outside).pdf" download="ResumeFileName.pdf" className="btn btn-primary">
<button type="button" class="text-white bg-orange-500 hover:bg-orange-400/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">

<IoMdDownload className=' font-extrabold text-xl mx-2 ' />
Download Resume
</button>

      </a>

</div>
        </div>
       
       
       
       
       
        </div> 
    </>
  )
}
