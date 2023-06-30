import './Navbar.css'
export default function Navbar(props) {
    return (
        <nav>
            <div className='nav-logo'>
                <div className='div-logo'>CHRIS<span>COSMOS</span></div>
            </div>
            <div className='div-ul'>
                <ul>
                    <li><a href='#hero-section'>HOME</a></li>
                    <li><a href='#projects-section'>PROJECTS</a></li>
                    <li><a href='#testimonials-section'>TESTIMONIALS</a></li>
                    <li><a href='#contact-section'>CONTACT</a></li>
                    <li><a href='#about-section'>ABOUT</a></li>

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