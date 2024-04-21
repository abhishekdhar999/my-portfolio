import React from 'react'
// import Navbar from '../Components/Navabar'
import Home from '../Components/Home'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navabar'
// import Emoji from '../Components/Emoji'
function HomePage() {
  return (
    <>
     
      <Home/>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
{/* <Emoji></Emoji> */}
      <Contact></Contact>
      
    </>
  )
}

export default HomePage
