import React from 'react'
import img from '../Images/p1.jpg'
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMongoose } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import nyaysathi from '../Images/nyaysathi.png'
import algoarena from '../Images/algoarena.png'
import shopfiesta from '../Images/shopfiesta.png'
// import 
export default function Projects() {
    const [seeMore, setSeeMore] = useState(false);

    const handleClick = () => {
        setSeeMore(!seeMore)
    }
    return (
        <>
            <div className='heading-box flex justify-between mx-12 lg:mx-44 my-12 '>
                <div className='flex flex-col md:flex-row md:my-0 mt-14 justify-center items-center lg:mx-44'>
                    <div className='heading '>
                        <h1 className='text-4xl'> <span className='text-xl  text-orange-500  mr-10'>work</span> A small selection of </h1>
                        <div className='flex justify-center items-center'>

                            <h1 className='text-4xl'>recent projects </h1>
                            <div className='h-1 w-[50px] bg-orange-500 mx-4 '></div>
                        </div>


                    </div>

                    <div className='sub-heading md:mx-12 min-w-[200px] md:my-0 my-4'>
                        <p className=' text-base'>"See my work in action: projects that <br /> exemplify the fusion of technology and ingenuity."</p>
                    </div>

                </div>
            </div>

            <div className='projects '>

                <div className='one flex justify-center items-center md:flex-row flex-col'>
                    <div className='project-image'>
                        <img className='h-[350px] w-[300px] md:w-[350px] lg:w-[450px] rounded-xl' src={nyaysathi} alt="" />
                    </div>
                    <div className='project-text mx-12 md:my-0 my-4'>

                        <span class="block max-w-lg p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-[250px] overflow-hidden">

                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NyaySathi</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">Developed an automated case management system optimizing legal workflows, enhancing efficiency in hiring advocates and having a hasle free connection with them.</p>

                            <div className='my-4 '>
                                <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                    Peek in to the Code
                                </button>
                            </div>

                            <div className='mb-1'>
                                <ul className='flex '>
                                    <li className='mx-2 text-white'>
                                        <FaReact />
                                    </li >
                                    <li className='mx-2 text-white'>
                                        <DiMongodb />
                                    </li>
                                    <li className='mx-2 text-white'>
                                        <SiMongoose />
                                    </li>
                                    <li className='mx-2 text-white'>
                                        <SiSocketdotio />
                                    </li>
                                    <li className='mx-2 text-white'>
                                        <FaNodeJs />
                                    </li>
                                    <li className='mx-2 text-white'>
                                        <SiExpress />
                                    </li>
                                    <li className='mx-2 text-white'>
                                        <SiTailwindcss />
                                    </li>
                                </ul>
                            </div>
                        </span>

                        <div>

                        </div>
                    </div>
                </div>


                {/* second */}

                <div className='second flex justify-center items-center md:flex-row flex-col'>

                    <div className='project-text mx-12 '>

                        <span class="block max-w-lg p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  min-w-[250px] md:my-0 my-4">

                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AlgoArena</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">Your all-in-one platform for mastering and solving data structures and algorithms, featuring problem, integrated todo lists,
                                and note-taking capabilities.</p>

                            <div className='my-4'>
                                <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                    Peek in to the Code
                                </button>
                            </div>


                            <div className='mb-1'>
                                <ul className='flex '>
                                    <li className='mx-2 text-white'>
                                        <TbBrandNextjs />
                                    </li >
                                    <li className='mx-2 text-white'>
                                        <IoLogoFirebase />
                                    </li>
                                    <li className='mx-2 text-white'>
                                        <TbBrandTypescript />
                                    </li>
                                    <li className='mx-2 text-white'>
                                        <SiTailwindcss />
                                    </li>
                                </ul>
                            </div>
                        </span>

                        <div>

                        </div>
                    </div>

                    <div className='project-image'>
                        <img className='h-[350px] w-[300px] md:w-[350px] lg:w-[450px] rounded-xl' src={algoarena} alt="" />
                    </div>
                </div>


                {/* third */}
                <div className='one flex justify-center items-center md:flex-row flex-col md:my-0 my-4'>
                    <div className='project-image'>
                        <img className='h-[350px] w-[300px] md:w-[350px] lg:w-[450px] rounded-xl' src={shopfiesta} alt="" />
                    </div>
                    <div className='project-text mx-12'>

                        <span class="block max-w-lg p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-[250px] md:my-0 my-4">

                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ShopFiesta</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">Elevate your wardrobe with our curated fashion. Discover trends, shop seamlessly. Unleash your style effortlessly with us.  <br /> [e-commerce].</p>

                            <div className='my-4'>
                                <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                    Peek in to the Code
                                </button>

                            </div>

                            <div className='mb-1'>
                                <ul className='flex '>
                                    <li className='mx-2 text-white'>
                                        <TbBrandNextjs />
                                    </li >
                                    <li className='mx-2 text-white'>
                                        <DiMongodb />
                                    </li>
                                    <li className='mx-2 text-white'>
                                        <SiPrisma />
                                    </li>
                                    <li className='mx-2 text-white'>
                                        <TbBrandTypescript />
                                    </li>
                                    <li className='mx-2 text-white'>
                                        <SiTailwindcss />
                                    </li>
                                </ul>
                            </div>
                        </span>

                        <div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-center items-center my-12'>
                <button onClick={handleClick} type="button" class="text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-orange-400 me-2 mb-2">

                    Explore More
                    <RiArrowDownDoubleLine />
                </button>
            </div>



            {seeMore && (<div className='more-projects '>

                <div className='first-row flex mx-2 p-4 md:flex-row flex-col items-center justify-center lg:gap-8 md:gap-4'>

                    <div className='one  '>

                        <span href="/" class="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 class="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Travel Advisor</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p class="mb-3 font-normal text-gray-500 ">Explore the world effortlessly with our Travel Advisor app! Find top-rated hotels and restaurants nearby, access user reviews, and tailor your travel itinerary for an unforgettable, perfectly customized journey that suits your preferences.</p>

                                <a className='flex' href="/">
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </a>

                            </div>


                        </span>

                    </div>

                    <div className='one md:my-0 my-2 '>

                        <span href="/" class="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 class="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Talk Buddy</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p class="mb-3 font-normal text-gray-500 ">Connect seamlessly with friends and family through our intuitive Chat App. Experience real-time messaging, create group chats, share media effortlessly, and keep your conversations secure with end-to-end encryption. Chatting just got easier!</p>

                                <a className='flex' href="/">
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </a>

                            </div>


                        </span>

                    </div>


                    <div className='one  md:my-0 my-2'>

                        <span href="/" class="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 class="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Spotify Clone</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p class="mb-3 font-normal text-gray-500 ">Immerse yourself in sound with our Music App, where endless tracks and personalized playlists await. Experience high-quality audio and discover new favorites, all curated to match your taste and mood, anytime, anywhere.</p>

                                <a className='flex' href="/">
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </a>

                            </div>


                        </span>

                    </div>

                </div>


                <div className='first-row flex mx-2 p-4 md:flex-row flex-col items-center justify-center lg:gap-8 md:gap-4 my-0'>

                    <div className='one my-0 '>

                        <span href="/" class="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 class="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Shooter Game</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p class="mb-3 font-normal text-gray-500 ">Aim, shoot, and score with our BallShooter Game, where precision meets excitement. Challenge yourself with dynamic targets and levels, enhancing your skills and competing for high scores in this thrilling action-packed adventure.</p>

                                <a className='flex' href="/">
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </a>

                            </div>


                        </span>

                    </div>

                    <div className='one md:my-0 my-3 '>

                        <span href="/" class="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 class="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Swift News</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p class="mb-3 font-normal text-gray-500 ">Stay informed on-the-go with our News App, delivering breaking news and in-depth analysis directly to your device. Tailor your feed for personalized updates and explore diverse perspectives from trusted sources worldwide.</p>

                                <a className='flex' href="/">
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </a>

                            </div>


                        </span>

                    </div>


                    <div className='one  md:my-0 my-2'>

                        <span href="/" class="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 class="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Study Wave</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p class="mb-3 font-normal text-gray-500 ">Explore a world of knowledge with our EdTech website, offering personalized learning experiences and interactive courses across a spectrum of subjects. Elevate your skills with expert-led tutorials and a vibrant community of learners.




</p>

                                <a className='flex' href="/">
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </a>

                            </div>


                        </span>

                    </div>

                </div>
            </div>)}

        </>
    )
}
