import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <>
            <div className='mt-24'>
                <div className='flex my-6 '>
                    <h1 className='heading text-orange-500 mx-10 lg:mx-32 my-3'>
                        Contact
                    </h1>
                    <h2 className='sub heading text-4xl mr-4'>
                        Contact Me
                    </h2>
                    <div className='h-1 w-12 my-6 mx-2 bg-orange-500'></div>
                </div>
                <div className="container my-24 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section className="mb-32">
    <div
      className="relative h-[300px] overflow-hidden bg-cover bg-[50%] rounded-lg bg-no-repeat bg-[url('https://img.freepik.com/free-vector/yellow-color-elegant-wave-style-corporate-banner-design_1055-13670.jpg?w=2000&t=st=1713099941~exp=1713100541~hmac=c198bc96d485125644d7729faa3a24f99a55e13b73a894364e4724705ad805c7')]">
    </div>
    <div className="container px-6 md:px-12">

        
      <div
        className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#d8d3cd] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">

<div className='z-10 text-gray-300 font-semibold text-xl flex justify-center items-center mb-8 bg-gradient-to-r from-stone-500 to-gray-800 p-4 rounded-lg'>
        "Feel free to reach out! Whether it's for project collaborations, job opportunities, or just to exchange ideas about technology and innovation, I'm always open to connecting. Drop me a message anytime".
        </div> 
        <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            
          <div className="mx-auto mb-12 text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>
            <h6 className="font-medium">India</h6>
          </div>
          <div className="mx-auto mb-12 text-center lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <h6 className="font-medium">Mohali 140307</h6>
          </div>
          <div className="mx-auto mb-6 text-center md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <h6 className="font-medium">+91 8082810157</h6>
          </div>
          <div className="mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
            <h6 className="font-medium">dhar.abhishek999@gmail.com</h6>
          </div>
        </div>
        <div className="mx-auto max-w-[700px]">
        <form ref={form}
  className="space-y-4 md:space-y-6 p-4 md:p-8 bg-white shadow-md rounded-lg max-w-lg mx-auto my-10"
  onSubmit={sendEmail}
//   onSubmit={(e) => {
// console.log("in te fun");
//     const submitButton = e.target.querySelector('button[type="submit"]');
//     console.log(submitButton)
//     submitButton.disabled = true;
//     submitButton.style.opacity = "0.5";
//     submitButton.textContent = "Sending...";

//     // After 15 seconds, revert the button to its original state
//     setTimeout(() => {
//       submitButton.disabled = false;
//       submitButton.style.opacity = "1";
//       submitButton.textContent = "Send";
//     }, 15000);
//   }}
>
{/* <input type="hidden" name="_captcha" value="false"/> */}
  <div className="flex flex-col gap-4">
    <input
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
      type="text"
      name="name"
      placeholder="Your Name"
      required
    />
    <input
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
      type="email"
      name="email"
      placeholder="Your Email"
      required
    />
    <input
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
      type="text"
      name="number"
      placeholder="Your Phone Number"
      required
    />
    <button
    // onClick={handleSubmit}
      type="submit"
      className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ease-in-out "
    >
      Send
    </button>
  </div>

  <p className="text-center font-serif mt-4">
    After registering with us, we will get in touch with you shortly.
  </p>
</form>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
{/* <!-- Container for demo purpose --></div> */}

            </div>
        </>
    )
}
