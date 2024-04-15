import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navabar';
import HomePage from './Pages/HomePage';
import AboutPage from './Components/About'
import ProjectPage from './Components/Projects'
import ContactPage from './Components/Contact';
// import ResumeComponent from './Components/ResumeComponent';
import Resume from './Components/Resume';
function App() {
  return (
   <>
  
  <Navbar/>
  <Routes>

  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/about' element={<AboutPage/>}></Route>
  <Route path='/projects' element={<ProjectPage/>}></Route>
  <Route path='/contact' element={<ContactPage/>}></Route>
  <Route path='/resume' element={<Resume/>}></Route>
  </Routes>
   </>
  );
}

export default App;
