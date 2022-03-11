import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../Navbar/Navbar';
import './Work.css';
import linkDev from '../../assets/linkdev.png';
import linkedList from '../../assets/linkedlist.png';
import pokeSearch from '../../assets/pokesearch.png';
import portfolio from '../../assets/portfolio.png';
import snakeGS from '../../assets/snakeGS.png';

const Work = () => {
    const workTimeline = gsap.timeline();

    let p1 = useRef(null);
    let arrow1 = useRef(null);

    useEffect(() => {
        workTimeline.from([p1, arrow1], {
            duration: 1,
            skewY: 10,
            y: 500,
            stagger: {
                amount: 0.4,
            },
            opacity: 0,
        });
    });

    return (
        <div>
            <Navbar />
            <div className='work'>
                <div className='my-work'>
                    <p ref={(el) => (p1 = el)} className='work-text'>
                        My Work<span className='cursor'></span>
                    </p>
                </div>
                <div
                    className='arrow-container work-arrow'
                    ref={(el) => (arrow1 = el)}
                >
                    <div className='arrow'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <button className='btn work-btn'>
                    <a href='https://github.com/cesarovj' target='_blank'>
                        Check out my GitHub
                    </a>
                </button>
                <div className='work-container'>
                    <div className='work-items'>
                        <div className='work-item'>
                            <a
                                target='_blank'
                                href='https://young-tundra-98958.herokuapp.com/'
                            >
                                <div className='work-header'>
                                    <p className='work-title'>LinkDev</p>
                                </div>
                                <div className='work-img'>
                                    <img
                                        className='work-img1'
                                        src={linkDev}
                                        alt=''
                                    />
                                    <div className='img-overlay'>
                                        <p className='img-desc'>
                                            A social network application built
                                            with the MERN Stack where users can
                                            connect and make posts. Features
                                            include a dashboard, forms,
                                            authentication, etc. The site is
                                            hosted on a Heroku and may take a
                                            few seconds to load up
                                        </p>
                                    </div>
                                </div>
                                <div className='work-footer'>
                                    <p className='tech-stack'>
                                        MongoDB / Express / React / Node.js
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className='work-item'>
                            <a
                                target='_blank'
                                href='https://fervent-goodall-5572d0.netlify.app/'
                            >
                                <div className='work-header'>
                                    <p className='work-title'>
                                        Linked List Visualizer
                                    </p>
                                </div>
                                <div className='work-img '>
                                    <img
                                        className='work-img2'
                                        src={linkedList}
                                        alt=''
                                    />
                                    <div className='img-overlay'>
                                        <p className='img-desc'>
                                            Education through visualization.
                                            Learn the methods of a linked list
                                            with an easy-to-use interface.
                                            Choose the method, arguments, color,
                                            and press run to observe how the
                                            linked list is mutated
                                        </p>
                                    </div>
                                </div>

                                <div className='work-footer'>
                                    <p className='tech-stack'>React</p>
                                </div>
                            </a>
                        </div>
                        <div className='work-item'>
                            <a
                                target='_blank'
                                href='https://determined-bartik-d482d8.netlify.app/'
                            >
                                <div className='work-header'>
                                    <p className='work-title'>
                                        Poke&#769;Search
                                    </p>
                                </div>
                                <div className='work-img'>
                                    <img
                                        className='work-img3'
                                        src={pokeSearch}
                                        alt=''
                                    />
                                    <div className='img-overlay'>
                                        <p className='img-desc'>
                                            A web application to search for
                                            Poke&#769;mon’s and receive
                                            information relating to its card,
                                            price, and stats. I built this to
                                            further my study on working with
                                            external APIs. The site is hosted on
                                            a Netlify
                                        </p>
                                    </div>
                                </div>

                                <div className='work-footer'>
                                    <p className='tech-stack'>
                                        JavaScript / HTML5 / CSS3
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className='work-item'>
                            <div className='work-header'>
                                <p className='work-title'>This Portfolio</p>
                            </div>
                            <div className='work-img'>
                                <img
                                    className='work-img4'
                                    src={portfolio}
                                    alt=''
                                />
                                <div className='img-overlay'>
                                    <p className='img-desc'>
                                        Not much to say here since you're on the
                                        site. This project was to practice with
                                        React and learn some cool animations
                                        with GSAP. Also, I needed a site to show
                                        myself off
                                    </p>
                                </div>
                            </div>

                            <div className='work-footer'>
                                <p className='tech-stack'>
                                    React / EmailJS / GSAP
                                </p>
                            </div>
                        </div>
                        <div className='work-item'>
                            <a
                                target='_blank'
                                href='https://www.youtube.com/watch?v=hNuHIryq428'
                            >
                                <div className='work-header'>
                                    <p className='work-title'>
                                        Snake: Grow or Shrink
                                    </p>
                                </div>
                                <div className='work-img'>
                                    <img
                                        className='work-img5'
                                        src={snakeGS}
                                        alt=''
                                    />
                                    <div className='img-overlay'>
                                        <p className='img-desc'>
                                            The Snake.io game with a twist. The
                                            player can increase the snake's
                                            length and score, or be penalized
                                            for eating the poisonous items. This
                                            was my first project ever created
                                            and the begining of my interest of
                                            coding so I had to display it
                                        </p>
                                    </div>
                                </div>

                                <div className='work-footer'>
                                    <p className='tech-stack'>
                                        Python / PyGame
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
