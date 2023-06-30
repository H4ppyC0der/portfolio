
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu'
import HeroSection from './components/HeroSection/HeroSection'
import { useState } from 'react';

function App() {
  const [menuIcon, setMenuIcon] = useState('menu')
  return (
    <>
    <Navbar icon={menuIcon} onClick={()=>setMenuIcon(menuIcon === 'menu' ? 'close' : 'menu')}/>
    <Menu display={menuIcon === 'menu' ? 'none' : 'block'}/>
    <HeroSection />
    </>
    

    

  );
}

export default App;
