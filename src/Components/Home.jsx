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
import { FaXTwitter } from "react-icons/fa6";
import aster from '../Images/aster.png'
import { useState } from 'react';
import Overlay from './Overlay';
export default function Home() {

    const [overlayActive, setOverlayActive] = useState(false);

    const handleNavigate = () => {
        // Activate the overlay
        setOverlayActive(true);
        
        // Simulate loading time or wait for navigation to complete
        setTimeout(() => {
          setOverlayActive(false);
        }, 1000); // Adjust timing as necessary
      };
    const style = {
        width: '300px',
        height: 'auto',
        filter: 'drop-shadow(12px 24px 16px rgba(255, 165, 0, 3.5))'
      };
    return (
        <>



            <div className='flex justify-center items-center   md:flex-row flex-col h-auto mx-2 md:my-24  md:mx-12 mb-44 md:mb-0 overflow-hidden'>

                <div className='image-box lg:mx-12 mt-28 md:mt-2'>
                    <div className='image '>
                        <img className='rounded-full w-full h-auto lg:h-[400px] max-w-96 md:my-0 my-12 ' src={one} alt="me" />
                    </div>
                </div>

                <div className='text-box sm:mx-24   flex-1'>
                    <div className='heading'>
                        <h1 className='split text-5xl font-extrabold'>"Greetings, Explorer!"</h1>
                    </div>
                    <div className='sub-heding my-4'>
                        <p className=' z-10 text-xl text-center md:text-left'>"Hi there! I'm <span className='text-orange-700'>Abhishek Dhar</span>, currently navigating the intricate world of Information Technology—where I transform code into solutions and coffee into code. Join me as I decode challenges and innovate the future of tech."</p>
                    </div>
                    <div className='social-media '>
                        <ul className='flex '>
                            <Link to='https://github.com/abhishekdhar999'>
                                <li>
                                    <FaGithub  className='text-xl mx-3' />
                                </li>
                            </Link>

                            <Link to='https://www.linkedin.com/in/abhishek-dhar-7bb3a42a3/'>
                                <li>
                                    <CiLinkedin className='text-xl mx-3' />
                                </li>
                            </Link>

                            <Link to='https://www.instagram.com/abhishek.dhar/'>
                                <li>
                                    <FaInstagram className='text-xl mx-3' />
                                </li>
                            </Link>

                            <Link to='https://twitter.com/Abhishek_Dhar98'>
                                <li>
                                    <FaXTwitter className='text-xl mx-3' />
                                </li>
                            </Link>


                            {/* <Link to='/'>
                                <li>
                                    <SiLeetcode className='text-xl mx-3' />
                                </li>
                            </Link> */}


                        </ul>
                    </div>

                    <div className='btn my-3 lg:my-6'>
                        <Link to="/contact">
                            <button type="button" class="text-white bg-orange-500 hover:bg-orange-400/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">

                                <CiMail className=' font-extrabold text-xl mx-2 ' />
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

            {/* <span className='absolute overflow-hidden bottom-40 right-0  p-4'style={{ width: '10rem', height: '10rem', overflow: 'hidden' }}>
            <img style={{ position: 'absolute', right: '-50%' }}className='overflow-hidden w-50 h-50' src={aster} alt="" />
        </span> */}

        <div className='z-0 sm:block hidden absolute bottom-3 right-0 p-4 lg:h-[20rem] lg:w-[20rem] h-[18rem]  w-[18rem] overflow-hidden'  >
                <img style={style} className=' z-0 absolute right-[-47%] lg:h-[20rem] lg:w-[20rem] h-[18rem]  w-[18rem]'  src={aster} alt="" />
            </div>

        </>
    )
}

