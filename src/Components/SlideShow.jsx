import React from 'react'
import img1 from '../Images/Screenshot 2024-05-22 at 3.34.08 PM.png';
import img2 from '../Images/Screenshot 2024-05-22 at 3.35.01 PM.png';
import img3 from '../Images/Screenshot 2024-05-22 at 3.38.54 PM.png';
import img4 from '../Images/Screenshot 2024-05-22 at 9.52.18 PM.png';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';
const images = [
    img2,img3,img1,img4
  
];
const links = [
    'https://cyber-fiction-frontend-yrld.vercel.app/', // cyber fiction 
    'https://make-art-effect.vercel.app/', // make art effect
    'https://website-cyan-zeta.vercel.app/', // who website
    'https://thestudywave.com/'   //   study wave


  ];
export default function SlideShow() {

    
  return (
    <>
    <div className='my-8 flex items-center mx-12 md:flex-row flex-col  '>
<span className='text-orange-500 my-8 '>
    <h1 className=' lg:mx-12  mx-4'>FrontEnd</h1>
</span>

        <h1 className='flex justify-center itemscenter text-3xl font-medium text-gray-700 mx-12 '>Lets Look At Some Interactive UI </h1>

        <div className=' h-1 w-20 bg-orange-400'></div>
    </div>


    <div className="slide-container  md:mx-36 lg:mx-44 rounded-2xl ">
        
        <Zoom scale={0.4}>
          {
            images.map((each, index) =>
            <Link to={links[index]}>
            <img className=' min-w-60  h-96 w-screen rounded-2xl ' key={index} style={{width: "100%"}} src={each}  alt='buggie'/>
            </Link>
            )
          }
        </Zoom>
      </div>
    </>
    
  )
}
