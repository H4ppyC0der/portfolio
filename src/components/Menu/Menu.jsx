import './Menu.css'

export default function Menu(props) {
    return (
        <div className='div-menu' style={{display: props.display}}>
            <ul className='ul-menu'>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>PROJECTS</a></li>
                    <li><a href='#'>TESTIMONIALS</a></li>
                    <li><a href='#'>CONTACT</a></li>
                    <li><a href='#'>ABOUT</a></li>

                </ul>

        </div>
    )
}