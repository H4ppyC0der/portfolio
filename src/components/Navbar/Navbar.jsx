import './Navbar.css'
import { useState } from 'react'

export default function Navbar(props) {
    const [focusedChild, setFocusedChild] = useState()
    
    return (
        <nav>
            <div className='nav-logo'>
                <div className='div-logo'>CHRIS<span>COSMOS</span></div>
            </div>
            <div className='div-ul'>
                <ul>
                    <li><a id='HOME' onClick={(e)=> setFocusedChild(e.target.id)} 
                    style={{color: focusedChild === 'HOME' ? 'rgb(16, 185, 129)' : 'rgb(15, 23, 42)'}} href='#hero-section'>HOME</a></li>
                    <li><a id='PROJECTS' onClick={(e)=> setFocusedChild(e.target.id)} 
                    style={{color: focusedChild === 'PROJECTS' ? 'rgb(16, 185, 129)' : 'rgb(15, 23, 42)'}} href='#projects-section'>PROJECTS</a></li>
                    <li><a id='TESTIMONIALS'onClick={(e)=> setFocusedChild(e.target.id)} 
                    style={{color: focusedChild === 'TESTIMONIALS' ? 'rgb(16, 185, 129)' : 'rgb(15, 23, 42)'}}  href='#testimonials-section'>TESTIMONIALS</a></li>
                    <li><a id='CONTACT' onClick={(e)=> setFocusedChild(e.target.id)} 
                    style={{color: focusedChild === 'CONTACT' ? 'rgb(16, 185, 129)' : 'rgb(15, 23, 42)'}} href='#contact-section'>CONTACT</a></li>
                    <li><a id='ABOUT' onClick={(e)=> setFocusedChild(e.target.id)} 
                    style={{color: focusedChild === 'ABOUT' ? 'rgb(16, 185, 129)' : 'rgb(15, 23, 42)'}} href='#about-section'>ABOUT</a></li>

                </ul>
            </div>
            <div className='nav-menu-icon'>
                <span className="material-symbols-outlined menu-icon" onClick={props.onClick}>
                    {props.icon}
                </span>
            </div>
        </nav>
    )
}