import './Navbar.css'
export default function Navbar(props) {
    return (
        <nav>
            <div className='nav-logo'>
                <div className='div-logo'>CHRIS<span>COSMOS</span></div>
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
                <span className="material-symbols-outlined menu-icon" onClick={props.onClick}>
                    {props.icon}
                </span>
            </div>
        </nav>
    )
}