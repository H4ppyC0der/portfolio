import './Menu.css'

export default function Menu(props) {
    return (
        <div className='div-menu' style={{display: props.display}}>
            <ul className='ul-menu'>
                    <li><a href='#hero-section'>HOME</a></li>
                    <li><a href='#projects-section'>PROJECTS</a></li>
                    <li><a href='#testimonials-section'>TESTIMONIALS</a></li>
                    <li><a href='#contact-section'>CONTACT</a></li>
                    <li><a href='#about-section'>ABOUT</a></li>

                </ul>

        </div>
    )
}