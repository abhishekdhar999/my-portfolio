import React from 'react'
import { FaJava } from "react-icons/fa";
import javaimage from '../Images/javalogo.png'
import javascript from '../Images/javascript-39404.png'
import reactimage from '../Images/reactlogo.png'
import nextjsimage from '../Images/nextjs.png'
import cssimage from '../Images/css.png'
import { useRef, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)



export default function Skills() {
    const container = useRef();
    const secondcontainer = useRef();
    const thirdcontainer = useRef();
    useEffect(() => {
        // Check if the container and its children are available
        if (container.current) {
            const boxes = container.current.querySelectorAll('.box');

            boxes.forEach(box => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: box,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                        toggleActions: 'play none none reverse',

                        // markers: true, // Use for debugging, remove or set to false in production
                        // onEnterBack: () => {
                        //     // Animation or action when the element re-enters from the bottom
                        //     gsap.to(box, { rotation: 0, duration: 1 });
                        // },
                        // onLeave: () => {
                        //     // Animation or action when the element leaves through the top
                        //     gsap.to(box, { rotation: 180, duration: 1 });
                        // }
                    }
                });

                // Initial animation when entering the first time
                tl.fromTo(box,
                    { rotation: 0 },
                    { rotation: 360, duration: 1 }
                );
            });
        }

        if (secondcontainer.current) {
            const boxes = secondcontainer.current.querySelectorAll('.box');

            boxes.forEach(box => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: box,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                        toggleActions: 'play none none none',
                        // markers: true, // Use for debugging, remove or set to false in production
                        // onEnterBack: () => {
                        //     // Animation or action when the element re-enters from the bottom
                        //     gsap.to(box, { rotation: 0, duration: 1 });
                        // },
                        // onLeave: () => {
                        //     // Animation or action when the element leaves through the top
                        //     gsap.to(box, { rotation: 180, duration: 1 });
                        // }
                    }
                });

                // Initial animation when entering the first time
                tl.fromTo(box,
                    { rotation: 0 },
                    { rotation: 360, duration: 1 }
                );
            });
        }

        if (thirdcontainer.current) {
            const boxes = thirdcontainer.current.querySelectorAll('.box');

            boxes.forEach(box => {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: box,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                        toggleActions: 'play none none none',
                        // markers: true, // Use for debugging, remove or set to false in production
                        // onEnterBack: () => {
                        //     // Animation or action when the element re-enters from the bottom
                        //     gsap.to(box, { rotation: 0, duration: 1 });
                        // },
                        // onLeave: () => {
                        //     // Animation or action when the element leaves through the top
                        //     gsap.to(box, { rotation: 180, duration: 1 });
                        // }
                    }
                });

                // Initial animation when entering the first time
                tl.fromTo(box,
                    { rotation: 0 },
                    { rotation: 360, duration: 1 }
                );
            });
        }
    }, []);

    return (
        <>
            <div>
                <div className='heading flex mx-10 lg:mx-36 mb-8 md:my-8 my-14'>
                    <h2 className='text-orange-500 my-3'>Tech</h2>
                    <h1 className=' text-gray-800 text-4xl ml-12'>Tools of the Trade</h1>
                    <div className='h-1 w-14 ml-4 my-4 bg-orange-500'></div>
                </div>

                <div ref={container} className='first-row flex justify-center  items-center  mt-12 overflow-hidden '>
                    <span className='flex justify-center items-center sm:flex-row flex-col '>
                        <div className="box hexagon-wrapper mx-2 ml-2">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src={javaimage} alt="Hexagonal Img" className="h-16 w-10 object-cover " />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src={javascript} alt="Hexagonal Img" className="h-14 w-14 rounded-lg object-cover mt-2" />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src="https://imgs.search.brave.com/lw6ZLjRl51GTCm7eLCRmTQOXiL9T0v8Luud_LMyvorM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y1L1R5cGVzY3Jp/cHQuc3Zn.svg " alt="Hexagonal Img" className="h-14 w-14 rounded-lg object-cover mt-2 " />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src="https://imgs.search.brave.com/uYdp_mAugIFP1aLvY9mARspEn5lIZXXkA4glfSRW6Lc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL0hUTUw1X2xv/Z29fYW5kX3dvcmRt/YXJrLnN2Zw.svg" alt="Hexagonal Img" className="h-12 w-15 rounded-lg object-cover " />
                                </div>
                            </div>
                        </div>
                    </span>

                    <span className='flex justify-center items-center sm:flex-row flex-col'>
                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src={cssimage} alt="Hexagonal Img" className="h-14 w-14 rounded-lg object-cover " />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src={reactimage} alt="Hexagonal Img" className="h-14 w-14 rounded-lg object-cover " />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src={nextjsimage} alt="Hexagonal Img" className="h-14 w-14 rounded-lg object-cover " />
                                </div>
                            </div>
                        </div>

                        <div className=" box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src="https://imgs.search.brave.com/mt3_ltFUor3sJTiWHdmFbORv1QE3PUtM9gsygWvKgFQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbm9kZWpz/LWxvZ28tRkJFMTIy/RTM3Ny1zZWVrbG9n/by5jb20ucG5n" alt="Hexagonal Img" className="h-10 w-9 rounded-lg object-cover " />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src="https://imgs.search.brave.com/Eigw7xYFQSqNFQhxxHde3hkdrP6Z2KHAInq2-yUxCO4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MzA5YmNlZjEw/MTRjMGI1ZTRhOWEu/cG5n" alt="Hexagonal Img" className="h-15 w-14 rounded-lg object-cover " />
                                </div>
                            </div>
                        </div>

                    </span>


                </div>

                {/* second row */}
                <div className='box second-row flex justify-center  
                items-center mt-3 overflow-hidden'>
                    <span ref={thirdcontainer} className='flex justify-center items-center sm:flex-row flex-col'>
                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src="https://imgs.search.brave.com/WA2Ii5mTDS-Qy6JrHCkqL9i52b_h3s7Gv6Ao04xdek8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzI1/MlVTRndoVWFWZUZt/NjY0aFd6RkEtMzIw/LTgwLmpwZw" alt="Hexagonal Img" className="h-12 w-15 rounded-lg object-cover " />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src='https://imgs.search.brave.com/W9CbFyxwjuZCstu49xt6tccC5kk1TtWTumoZ_-X-XRU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy90YWlsd2luZC1j/c3MtMi5zdmc.svg' alt="Hexagonal Img" className="h-8 w-14 rounded-lg object-cover " />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src="https://imgs.search.brave.com/2sAYcb_8ll9cQ4tYbEze1z-TTJlZ5EnZiMtffFaoQCw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9jLWxvZ28ucG5n" alt="Hexagonal Img" className="h-14 w-13 object-cover " />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src="https://imgs.search.brave.com/jLap1gkvy3LYJ3tzFyGH-gsbcPd3wiGPQVq7Bs9guEo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IyL0Jvb3RzdHJh/cF9sb2dvLnN2Zw.svg" alt="Hexagonal Img" className="h-14 w-14 rounded-lg object-cover mt-2" />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src="https://imgs.search.brave.com/X0wYzieFzIkfj4cY96H6btfXAO34UKBdbUaAeh77cF8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2xvZ28tbW9u/Z29kYi1wbmctbW9u/Z28tZGItc2hhcGVk/LXN0aWNrZXItNjUw/LnBuZw " alt="Hexagonal Img" className="h-14 w-14 rounded-lg object-cover mt-2 " />
                                </div>
                            </div>
                        </div>

                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src='https://imgs.search.brave.com/_VRjDznw8ox6kesgstpSGA4nWtnJFI2E8d4Jkiopoi4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9maWxlLXR5/cGUtcHJpc21hLWlj/b24tMjEweDI1Ni12/N3hybm0xay5wbmc' alt="Hexagonal Img" className="h-14 w-14 rounded-lg object-cover " />
                                </div>
                            </div>
                        </div>


                        <div className="box hexagon-wrapper mx-2 ">
                            <div className="hexagon shadow-lg shadow-slate-900">
                                <div className="hexagon-inner">
                                    {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                    <img src='https://imgs.search.brave.com/6lHxBgRoJ7Yy405ITGS8dhRMVHPgaXtdT-l8BGSmBM8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NeVNRTC9N/eVNRTC1Mb2dvLndp/bmUuc3Zn.svg' alt="Hexagonal Img" className="h-12 w-14 rounded-lg object-cover " />
                                </div>
                            </div>
                        </div>

                    </span>
                </div>
            </div>

            {/* third */}
            <div className='second-row flex justify-center  
                items-center overflow-hidden'>
                <span ref={secondcontainer} className='flex justify-center items-center sm:flex-row flex-col'>
                    <div className="box hexagon-wrapper mx-2 ">
                        <div className="hexagon shadow-lg shadow-slate-900">
                            <div className="hexagon-inner">
                                {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                <h1 className='flex justify-center items-center font-bold mx-4'> Html5 Canvas</h1>

                            </div>
                        </div>
                    </div>

                    <div className="box hexagon-wrapper mx-2 ">
                        <div className="hexagon shadow-lg shadow-slate-900">
                            <div className="hexagon-inner">
                                {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                <img src="https://imgs.search.brave.com/mt3_ltFUor3sJTiWHdmFbORv1QE3PUtM9gsygWvKgFQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbm9kZWpz/LWxvZ28tRkJFMTIy/RTM3Ny1zZWVrbG9n/by5jb20ucG5n" alt="Hexagonal Img" className="h-10 w-9 rounded-lg object-cover " />
                            </div>
                        </div>
                    </div>

                    <div className="box hexagon-wrapper mx-2 ">
                        <div className="hexagon shadow-lg shadow-slate-900">
                            <div className="hexagon-inner">
                                {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                <img src="https://imgs.search.brave.com/reSezJa1q3WrrdidClihDA8wcjbzx0kFDQECk8MJ4cg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbG91/ZC5naXRodWJ1c2Vy/Y29udGVudC5jb20v/YXNzZXRzLzk1MDEx/Mi8xNDA4MDc0NC85/MjM0ZDUzYS1mNTI0/LTExZTUtOTlkNS03/YjliMTQ1ZmFiODgu/cG5n" alt="Hexagonal Img" className="h-15 w-14 rounded-lg object-cover " />
                            </div>
                        </div>
                    </div>


                    <div className="box hexagon-wrapper mx-2 ">
                        <div className="hexagon shadow-lg shadow-slate-900">
                            <div className="hexagon-inner">
                                {/* <FaJava className='h-10 w-10 text-white object-cover ' /> */}
                                <img src='https://imgs.search.brave.com/JafQwnc6AUXAPF9-jIKMS4z0byoQBHR2aFYo-rtw5jo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzE1OTA5NDcucG5n' alt="Hexagonal Img" className="h-8 w-14 rounded-lg object-cover " />
                            </div>
                        </div>

                    </div>
                </span>
            </div>
        </>
    )
}
