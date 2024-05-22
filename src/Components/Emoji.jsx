import React,{useEffect, useRef} from 'react'
import snail from '../Images/emojiImg.png';
import banner from '../Images/emojiText.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)
export default function Emoji() {
    const container5 =  useRef(null);
    useEffect(()=>{
        if(container5.current){
            
            let tl  = gsap.timeline({
scrollTrigger:{
trigger: container5.current,
start:"top center",
end:"bottom center",
scrub: true,
toggleActions: 'play none none reverse',
 markers: true,
}
            })

            tl.fromTo(container5.current,{x:700 ,duration:1} ,{x:-1400,duration:1})
        }
    })
  return (
    <>

     <div  ref={container5} className=' h-44 whole  flex justify-end items-end '>
        
        <div className='img-1'>
            <img className=' h-28 ' src={snail} alt="" />
        </div>

        <div className='img-2 mx-4 bg-orange-400  rounded-full '>
<h2 className='mx-4 p-0 m-0 text-amber-900 font-extrabold text-2xl my-0'> "Intrigued? I’d love to hear from you!"      </h2>
        </div>
        </div> 
    </>
  )
}
