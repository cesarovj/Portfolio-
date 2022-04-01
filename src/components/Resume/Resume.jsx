import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../Navbar/Navbar';
import './Resume.css';
import resumeImg from '../../assets/resumeImg.jpg';
import resumePdf from '../../assets/resumePdf.pdf';

const Resume = () => {
    const resumeTimeline = gsap.timeline();

    let p1 = useRef(null);
    let p2 = useRef(null);
    let arrow1 = useRef(null);

    useEffect(() => {
        resumeTimeline.from([p1, p2, arrow1], {
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

            <div className='my-resume'>
                <p ref={(el) => (p1 = el)} className='resume-text'>
                    My
                </p>
                <p ref={(el) => (p2 = el)} className='resume-text resume-text2'>
                    Resume<span className='cursor resume-cursor'></span>
                </p>
            </div>
            <div
                ref={(el) => (arrow1 = el)}
                className='arrow-container resume-arrow'
            >
                <div className='arrow'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='resume'>
                <button className='btn resume-btn'>
                    <a download href={resumePdf}>
                        Download as Pdf
                    </a>
                </button>
                <div className='resume-container'>
                    <div className='resume-img'>
                        <img
                            className='res-img'
                            src={resumeImg}
                            alt='my resume'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
