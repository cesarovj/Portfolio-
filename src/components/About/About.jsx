import Navbar from '../Navbar/Navbar';
import './About.css';
import Dog from '../../assets/oso.png';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about-page">
                <div className="about-container">
                    <div className="main-about">
                        <p className="about-text">Shortly</p>
                        <p className="about-text">About</p>
                        <p className="about-text myself">
                            Myself<span className="cursor"></span>
                        </p>
                    </div>
                </div>
                <div className="container-text text1">
                    I create easy-to-use <br /> applications with <br />{' '}
                    pleasant layouts
                </div>

                <div className="container-text text2">
                    Although I have an eye for front end, I too can <br />{' '}
                    manage full stack development
                </div>

                <div className="container-text text3">
                    Skills: <br />
                    JavaScript / HTML5 / CSS3 <br />
                    React / TypeScript / Node.js / Express <br /> MongoDB / Git
                    / Agile
                </div>

                <div className="about2">
                    <div className="about-container2">
                        <div className="sub-about">
                            <p>Besides coding?</p>
                        </div>
                    </div>
                    <div className="dog-about">
                        <div className="dog">
                            <img src={Dog} alt="my dog" />
                        </div>
                        <div className="container-text">
                            I am a die hard Team Apatow fan, <br /> food
                            enthusiast, and enjoy
                            <br />
                            taking Oso on many adventures
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
