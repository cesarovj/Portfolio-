import './Home.css';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';

const Home = () => {
    const homeTimeline = gsap.timeline();

    let p1 = useRef(null);
    let p2 = useRef(null);
    let arrow1 = useRef(null);

    useEffect(() => {
        homeTimeline.from([p1, p2, arrow1], {
            duration: 1,
            skewY: 15,
            y: 400,
            stagger: {
                amount: 0.2,
            },
        });
    });

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='header-name'>
                    <p ref={(el) => (p1 = el)} className='my-name'>
                        Cesar Villalvir
                    </p>
                </div>
                <div className='header-role'>
                    <p ref={(el) => (p2 = el)} className='my-role'>
                        Front End Developer<span className='cursor'></span>
                    </p>
                </div>
            </div>
            <div
                className='arrow-container home-arrow'
                ref={(el) => (arrow1 = el)}
            >
                <div className='arrow'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <Skills />
            <Contact />
        </div>
    );
};

export default Home;
