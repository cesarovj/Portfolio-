import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import Scroll from './components/Scroll/Scroll';

function App() {
    const load = gsap.timeline({
        paused: 'true',
    });

    let loader = useRef(null);
    let percent = useRef(null);
    let bar = useRef(null);
    let barConfirm = useRef(null);
    let progress = useRef(null);

    useEffect(() => {
        load.to([percent, bar], {
            duration: 0.2,
            opacity: 0,
            zIndex: -1,
        });
        load.to([progress], {
            duration: 0.8,
            width: '0%',
        });
        load.to([loader], {
            visibility: 'hidden',
            zIndex: -1,
        });
    });

    let id,
        width = 1;

    const loading = () => {
        id = setInterval(frame, 25);
    };

    const frame = () => {
        if (width >= 100) {
            clearInterval(id);
            load.play();
        } else {
            width++;
            document.getElementById('bar-confirm').style.width = width + '%';
            document.getElementById('loading-percent').innerHTML = width + '%';
        }
    };

    window.addEventListener('load', (e) => {
        loading();
    });

    return (
        <div>
            <Router>
                <div className='noise-bg'></div>
                <div className='App'>
                    <div className='loader' ref={(el) => (loader = el)}>
                        <div className='progress' ref={(el) => (progress = el)}>
                            <div id='loading-bar' ref={(el) => (bar = el)}>
                                <div
                                    id='bar-confirm'
                                    ref={(el) => (barConfirm = el)}
                                ></div>
                            </div>
                            <div
                                id='loading-percent'
                                ref={(el) => (percent = el)}
                            ></div>
                        </div>
                    </div>
                    <Scroll />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/work' element={<Work />} />
                        <Route exact path='/resume' element={<Resume />} />
                        <Route exact path='/about' element={<About />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
