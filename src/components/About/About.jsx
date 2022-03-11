import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../Navbar/Navbar';
import './About.css';
import Dog from '../../assets/oso.png';

const About = () => {
    const aboutTimeline = gsap.timeline();

    let p1 = useRef(null);
    let p2 = useRef(null);
    let p3 = useRef(null);
    let arrow1 = useRef(null);

    useEffect(() => {
        aboutTimeline.from(
            [p1, p2, p3, arrow1],
            {
                duration: 0.8,
                skewY: 10,
                y: 400,
                stagger: {
                    amount: 0.4,
                },
            },
            '-=0.5'
        );
    });

    return (
        <div>
            <Navbar />
            <div className='about-container'>
                <div className='main-about'>
                    <p ref={(el) => (p1 = el)} className='about-text'>
                        Shortly
                    </p>
                    <p ref={(el) => (p2 = el)} className='about-text'>
                        About
                    </p>
                    <p ref={(el) => (p3 = el)} className='about-text myself'>
                        Myself<span className='cursor'></span>
                    </p>
                </div>
            </div>
            <div
                className='arrow-container about-arrow'
                ref={(el) => (arrow1 = el)}
            >
                <div className='arrow'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='container-text text1'>
                I create easy-to-use <br /> applications with <br /> pleasant
                layouts
            </div>

            <div className='container-text text2'>
                Although I have an eye for front end, I too can <br /> manage
                full stack development
            </div>

            <div className='container-text text3'>
                Skills: <br />
                JavaScript / HTML5 / CSS3 <br />
                React / Node.js / Express / MongoDB <br />
                MySQL / Git / Agile
            </div>

            <div className='about2'>
                <div className='about-container2'>
                    <div className='sub-about'>
                        <p>Besides coding?</p>
                    </div>
                </div>
                <div className='container-text text4'>
                    I am a die hard Team Apatow fan, <br /> food enthusiast, and
                    enjoy
                    <br />
                    taking Oso on many adventures
                </div>
                <div className='dog'>
                    <img src={Dog} alt='my dog' />
                </div>
            </div>
        </div>
    );
};

export default About;
