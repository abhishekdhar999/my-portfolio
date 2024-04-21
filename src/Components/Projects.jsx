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
import { Link } from 'react-router-dom';
import { useRef,useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Overlay from './Overlay';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import moreProjectImg from '../Images/check.png'
import snail from '../Images/emojiImg.png';
import { MdEmail } from "react-icons/md";
// import Emoji from './Emoji';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin); 

export default function Projects() {
    const [seeMore, setSeeMore] = useState(false);
    const cardRef = useRef(null);
    const handleClick = () => {
        setSeeMore(!seeMore)
    }

    const container = useRef();
const container2 = useRef();
const container3 = useRef();

const exploreProjects = useRef();

    useEffect(() => {
        const elements = container.current;
    
        if (elements) {
          const image1 = elements.querySelector('.project-image1');
          const text1 = elements.querySelector('.project-text1');
    
          let tl = gsap.timeline({
            scrollTrigger: {
                trigger: image1,
                start: "top+=100 bottom",
                end: "bottom+=100 bottom",
                scrub: true,
                toggleActions: 'play none none none',
                //  markers: true, 
            }
        })
        tl.fromTo(image1,{x:-400,opacity:0,duration:10},{opacity:1,x:0,duration:50})
    

        let ll = gsap.timeline({
            scrollTrigger: {
                trigger: text1,
                start: "top+=100 bottom",
                end: "bottom+=140 bottom",
                scrub: true,
                toggleActions: 'play none none none',
                //  markers: true, 
            }
        })
        ll.fromTo(text1,{x:1000,opacity:0,duration:10},{opacity:1,x:0})
        }
      }, []);


      useEffect(() => {
        const elements = container2.current;
    
        if (elements) {
          const image2 = elements.querySelector('.project-image2');
          const text2 = elements.querySelector('.project-text2');
    
          let tl = gsap.timeline({
            scrollTrigger: {
                trigger: image2,
                start: "top+=120 bottom",
                end: "bottom+=130 bottom",
                scrub: true,
                toggleActions: 'play none none none',
                //  markers: true, 
            }
        })
        tl.fromTo(image2,{x:1000,opacity:0,duration:10},{opacity:1,x:0,duration:50})
    

        let ll = gsap.timeline({
            scrollTrigger: {
                trigger: text2,
                start: "top+=120 bottom",
                end: "bottom+=130 bottom",
                scrub: true,
                toggleActions: 'play none none none',
                //  markers: true, 
            }
        })
        ll.fromTo(text2,{x:-700,opacity:0,duration:10},{opacity:1,x:0})
        }
      }, []);



      useEffect(() => {
        const elements = container3.current;
    
        if (elements) {
          const image3 = elements.querySelector('.project-image3');
          const text3 = elements.querySelector('.project-text3');
    
          let tl = gsap.timeline({
            scrollTrigger: {
                trigger: image3,
                start: "top+=150 bottom",
                end: "bottom+=150 bottom",
                scrub: true,
                toggleActions: 'play none none none',
                //  markers: true, 
            }
        })
        tl.fromTo(image3,{x:-400,opacity:0,duration:10},{opacity:1,x:0,duration:50})
    

        let ll = gsap.timeline({
            scrollTrigger: {
                trigger: text3,
                start: "top+=150 bottom",
                end: "bottom+=190 bottom",
                scrub: true,
                toggleActions: 'play none none none',
                //  markers: true, 
            }
        })
        ll.fromTo(text3,{x:1000,opacity:0,duration:10},{opacity:1,x:0})
        }
      }, []);
      

      useEffect(() => {
        // Check if the container and its children are available
        if (exploreProjects.current) {
            const cards = exploreProjects.current.querySelectorAll('.one');

            const angle = 360 / cardRef.current.length;

        cards.forEach((card, i) => {
            
            const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: card,
                  start: "top+=200 center",
                  end: "bottom top",
                  scrub: true,
                //   markers:true
                }
              });
            

              tl.to(card, {
                y:-700,
                x:-700,
                rotationY: 360,
                rotationX:360,
                 rotationZ:360, // Rotate each card differently
        transformOrigin: "center", // Rotate around the center
        ease: "none"
              });
          
              return () => {
                ScrollTrigger.kill();
              };
        },[]);

        
        }
    })

    useEffect(() => {
        // Check if the container and its children are available
        if (exploreProjects.current) {
            const cards = exploreProjects.current.querySelectorAll('.two');

            const angle = 360 / cardRef.current.length;

        cards.forEach((card, i) => {
            
            const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: card,
                  start: "top+=200 center",
                  end: "bottom top",
                  scrub: true,
                //   markers:true
                }
              });
            

              tl.to(card, {
                y:-700,
                x:-700,
                rotationY: 360,
                rotationX:360,
                 rotationZ:360, // Rotate each card differently
        transformOrigin: "center", // Rotate around the center
        ease: "none"
              });
          
              return () => {
                ScrollTrigger.kill();
              };
        },[]);

        
        }
    })

    const [overlayActive, setOverlayActive] = useState(false);
    const handleNavigate = () => {
        // Activate the overlay
        setOverlayActive(true);
        
        // Simulate loading time or wait for navigation to complete
        setTimeout(() => {
          setOverlayActive(false);
        }, 1500); // Adjust timing as necessary
      };

      const container5 =  useRef(null);
      useEffect(()=>{
          if(container5.current){
              
              let tl  = gsap.timeline({
  scrollTrigger:{
  trigger: container5.current,
  start:"top-=150 center",
  end:"bottom center",
  scrub: true,
  toggleActions: 'play none none reverse',
//    markers: true,
  }
              })
  
              tl.fromTo(container5.current,{x:900 ,duration:1} ,{x:-1400,duration:1})
          }
      },[seeMore])
    return (
        <>
        <Overlay isActive={overlayActive} />
            <div className='heading-box flex justify-between mx-12 lg:mx-44 my-24 '>
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

                <div ref={container} className=' one flex justify-center items-center md:flex-row flex-col overflow-hidden'>
                    
                    <div  className='project-image1'>
                        <img className='h-[350px] w-[300px] md:w-[350px] lg:w-[450px] rounded-xl' src={nyaysathi} alt="" />
                    </div>

                    <div className='project-text1 mx-12 md:my-0 my-4'>

                        <span className="block max-w-lg p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-[250px] overflow-hidden">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NyaySathi</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Developed an automated case management system optimizing legal workflows, enhancing efficiency in hiring advocates and having a hasle free connection with them.</p>

                            <div className='my-4 '>
                                <Link to='https://github.com/abhishekdhar999/LegaLink'>
                                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                    Peek in to the Code
                                </button>
                                </Link>
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

                <div ref={container2} className=' second flex justify-center items-center md:flex-row flex-col overflow-hidden'>

                    <div className='project-text2 mx-12  md:ml-0'>

                        <span className="block max-w-lg p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  min-w-[250px] md:my-0 my-4 ">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AlgoArena</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Your all-in-one platform for mastering and solving data structures and algorithms, featuring problem, integrated todo lists,
                                and note-taking capabilities.</p>

                            <div className='my-4'>
                                <Link to='https://github.com/abhishekdhar999/AlgoExpert'>
                                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                    Peek in to the Code
                                </button>
                                </Link>
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

                    <div className='project-image2'>
                        <img className='h-[350px] w-[300px] md:w-[350px] lg:w-[450px] rounded-xl' src={algoarena} alt="" />
                    </div>
                </div>


                {/* third */}
                <div ref={container3} className='one flex justify-center items-center md:flex-row flex-col md:my-0 my-4 overflow-hidden'>
                    <div className='project-image3'>
                        <img className='h-[350px] w-[300px] md:w-[350px] lg:w-[450px] rounded-xl' src={shopfiesta} alt="" />
                    </div>
                    <div className='project-text3 mx-12'>

                        <span className="block max-w-lg p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-w-[250px] md:my-0 my-4">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ShopFiesta</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Elevate your wardrobe with our curated fashion. Discover trends, shop seamlessly. Unleash your style effortlessly with us.  <br /> [e-commerce].</p>

                            <div className='my-4'>
                                <Link to='https://github.com/abhishekdhar999/Shop-Fiesta'>
                                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                    Peek in to the Code
                                </button>
                                </Link>
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
                <button onClick={handleClick} type="button" className="text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-orange-400 me-2 mb-2">

                    Explore More
                    <RiArrowDownDoubleLine />
                </button>
            </div>


            {seeMore && (
            <div ref={exploreProjects} style={{
    backgroundImage: `url(${moreProjectImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  }} className='more-projects  '>
           
           <div className= ' first-row flex mx-2 p-4 md:flex-row flex-col items-center justify-center lg:gap-8 md:gap-4 '>

               
                    <div ref={cardRef} className='one  '>

                        <span href="/" className="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 className="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Travel Advisor</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p className="mb-3 font-normal text-gray-500 ">Explore the world effortlessly with our Travel Advisor app! Find top-rated hotels and restaurants nearby, access user reviews, and tailor your travel itinerary for an unforgettable, perfectly customized journey that suits your preferences.</p>
<Link to='https://github.com/abhishekdhar999/Travel-Advisor'>
                                <span className='flex' >
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </span>
                                </Link>
                            </div>


                        </span>

                    </div>

                    <div className='one md:my-0 my-2 '>

                        <span href="/" className="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 className="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Talk Buddy</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p className="mb-3 font-normal text-gray-500 ">Connect seamlessly with friends and family through our intuitive Chat App. Experience real-time messaging, create group chats, share media effortlessly, and keep your conversations secure with end-to-end encryption. Chatting just got easier!</p>
                                <Link to='https://github.com/abhishekdhar999/Talk-Buddy'>
                                <span className='flex' >
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </span>
                                </Link>
                            </div>


                        </span>

                    </div>


                    <div className='one  md:my-0 my-2'>

                        <span href="/" className="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 className="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Spotify Clone</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p className="mb-3 font-normal text-gray-500 ">Immerse yourself in sound with our Music App, where endless tracks and personalized playlists await. Experience high-quality audio and discover new favorites, all curated to match your taste and mood, anytime, anywhere.</p>
                                <Link to='https://github.com/abhishekdhar999/Spoitify-Clone'>
                                <span className='flex' href="/">
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </span>
                                </Link>
                            </div>


                        </span>

                    </div>

                </div>


                <div className='first-row flex mx-2 p-4 md:flex-row flex-col items-center justify-center lg:gap-8 md:gap-4 my-0'>

                    <div className='two my-0 '>

                        <span href="/" className="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 className="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Shooter Game</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p className="mb-3 font-normal text-gray-500 ">Aim, shoot, and score with our BallShooter Game, where precision meets excitement. Challenge yourself with dynamic targets and levels, enhancing your skills and competing for high scores in this thrilling action-packed adventure.</p>
                                <Link to='https://github.com/abhishekdhar999/Ball-Shooter'>
                                <span   className='flex' href="/">
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </span>
                                </Link>
                            </div>


                        </span>

                    </div>

                    <div className='two md:my-0 my-3 '>

                        <span href="/" className="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 className="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Swift News</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p className="mb-3 font-normal text-gray-500 ">Stay informed on-the-go with our News App, delivering breaking news and in-depth analysis directly to your device. Tailor your feed for personalized updates and explore diverse perspectives from trusted sources worldwide.</p>
                                    <Link to='https://github.com/abhishekdhar999/Swift-News'>
                                <span     className='flex' href="/">
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </span>
                                </Link>
                            </div>


                        </span>

                    </div>


                    <div className='two  md:my-0 my-2'>

                        <span  className="flex flex-col items-center  border shadow-stone-500 rounded-lg shadow-lg md:flex-row md:max-w-xl lg:h-[300px] lg:w-[400px]  dark:  bg-[#E1DCD7] hover-effect">

                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <div className='flex'>
                                    <h5 className="hover-text-change mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange-800">Study Wave</h5>
                                    <div className=' grow-bar h-1 w-24 bg-orange-800 my-4 mx-3 '></div>
                                </div>
                                <p className="mb-3 font-normal text-gray-500 ">Explore a world of knowledge with our EdTech website, offering personalized learning experiences and interactive courses across a spectrum of subjects. Elevate your skills with expert-led tutorials and a vibrant community of learners.
                                 </p>
                            <Link to='https://thestudywave.com/'>
                                <span className='flex' href="/">
                                    <FaGithub className='text-orange-800 my-1' />
                                    <h1 className='text-orange-800 mx-2'>See Code</h1>
                                </span>
                                </Link>
                            </div>


                        </span>

                    </div>

                </div>
            </div>
              )}

<div  ref={container5} className=' h-44 whole sm:block hidden my-12  '>
            <span className='flex justify-center items-center'>
        <div className='img-1'>
            <img className=' h-28 ' src={snail} alt="" />
        </div>

        <div className='img-2 mx-4 bg-orange-400  rounded-full '>
<h2 className='mx-4 p-0 m-0 text-amber-900 font-extrabold text-2xl my-0'> "Intrigued?   I’d love to hear from you!"      </h2>
        </div>

        <span >
        <MdEmail className='text-4xl text-orange-400'  />
        </span>
        <span >
        <MdEmail className='text-3xl text-orange-400'  />
        </span>
        <span >
        <MdEmail className='text-2xl text-orange-400'  />
        </span>
        <span >
        <MdEmail className='text-xl text-orange-400'  />
        </span>
        <span >
        <MdEmail className='  text-orange-400'  />
        </span>
        </span>
        </div> 


        </>
    )
}
