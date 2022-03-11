import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Navbar.css';
import menuIcon from '../../assets/menu.svg';

const Navbar = () => {
    const navTimeline = gsap.timeline();
    let nameLink = useRef(null);
    let li1 = useRef(null);
    let li2 = useRef(null);
    let li3 = useRef(null);

    useEffect(() => {
        navTimeline.from([nameLink, li1, li2, li3], {
            opacity: 0,
            duration: 1,
            delay: 0.2,
            y: 20,
            stagger: {
                amount: 0.6,
            },
        });
    });

    return (
        <>
            <header>
                <Link
                    to='/'
                    className='name-link'
                    ref={(el) => (nameLink = el)}
                >
                    cesar
                </Link>
                <div className='toggle-nav'>
                    <img src={menuIcon} alt='menu logo' />
                </div>
                <ul className='nav-items'>
                    <li ref={(el) => (li1 = el)}>
                        <Link to='/work' className='li'>
                            work
                        </Link>
                    </li>
                    <li ref={(el) => (li2 = el)}>
                        <Link to='/resume' className='li'>
                            resume
                        </Link>
                    </li>
                    <li ref={(el) => (li3 = el)}>
                        <Link to='/about' className='li'>
                            about
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Navbar;
