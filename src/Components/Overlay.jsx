import React,{useRef} from 'react'
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Overlay({ isActive }) {
    const overlayRef = useRef(null);

    useEffect(() => {
        // Target the overlay
        // const overlay = gsap.timeline();
    
        if (isActive) {
            // Animating from 0% to 100% width
            gsap.to(overlayRef.current, {
              width: '0%', 
              duration: 1,
              ease: "power2.out", // Use a more pronounced ease-out effect
              autoAlpha: 1
            });
          } 
          else {
            // Reset the overlay when not active
            gsap.to(overlayRef.current, {
              width: '100%',
              duration: 0.0,
              ease: "power2.out",
              autoAlpha: 0
            });
          }
        }, [isActive]);
  return (
    <>
      <div ref={overlayRef} className="overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 165, 0, 1)', zIndex: 1000, opacity: 1, visibility: 'hidden' }}>
      {/* You can put more content here if needed */}
    </div>
    </>
  )
}
