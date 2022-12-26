import './Home.css';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="header-name">
                    <p className="my-name">Cesar Villalvir</p>
                </div>
                <div className="header-role">
                    <p className="my-role">
                        Front End Developer<span className="cursor"></span>
                    </p>
                </div>
            </div>
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;
