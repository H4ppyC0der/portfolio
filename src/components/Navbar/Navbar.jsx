import './Navbar.css'
import logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <nav>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='div-ul'>
                <ul>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>PROJECTS</a></li>
                    <li><a href='#'>TESTIMONIALS</a></li>
                    <li><a href='#'>CONTACT</a></li>
                    <li><a href='#'>ABOUT</a></li>

                </ul>
            </div>
            <div className='nav-menu-icon'>
                <span className="material-symbols-outlined menu-icon">
                    menu
                </span>
            </div>
        </nav>
    )
}