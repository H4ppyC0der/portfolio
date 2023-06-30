
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu'
import HeroSection from './components/HeroSection/HeroSection'
import Projects from './components/Projects/Projects'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [menuIcon, setMenuIcon] = useState('menu')
  return (
    <>
    <Navbar icon={menuIcon} onClick={()=>setMenuIcon(menuIcon === 'menu' ? 'close' : 'menu')}/>
    <Menu display={menuIcon === 'menu' ? 'none' : 'block'}/>
    <HeroSection />
    <Projects />
    <Testimonials/>
    <Contact/>
    <About />
    <Footer />

    </>
    

    

  );
}

export default App;
