import './HeroSection.css'
import { Typewriter } from 'react-simple-typewriter'

export default function HeroSection() {
    return (
        <div className="div-hero-section" id='hero-section'>
            <div className='div-hero-content'>
                <div className='div-hero-name'>
                    CHRISTIAN M. RODRIGUEZ
                </div>
                <div className='div-hero-roles'>
                    <span>
                        <Typewriter
                            words={['Front-end']}
                            loop={1000}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={3000}
                        />
                    </span> |
                    <span>
                        <Typewriter
                            words={['Web Developer']}
                            loop={1000}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={3000}
                        />
                    </span> | 
                    <span>
                        <Typewriter
                            words={['Back-end']}
                            loop={1000}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={3000}
                        />
                    </span>
                </div>
                <div className='div-hero-details'>
                    Perfectionist as a perfect Mayon, I always have revisions in my mind.
                
                </div>
            </div>

         

        </div>
    )
}