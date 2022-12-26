import Navbar from '../Navbar/Navbar';
import './Resume.css';
import resumeImg from '../../assets/my_ResumeImg.jpg';
import resumePdf from '../../assets/my_resume.pdf';

const Resume = () => {
    return (
        <div>
            <Navbar />

            <div className="my-resume">
                <p className="resume-text">My</p>
                <p className="resume-text resume-text2">
                    Resume<span className="cursor resume-cursor"></span>
                </p>
            </div>

            <div className="resume">
                <button className="btn resume-btn">
                    <a download href={resumePdf}>
                        Download as Pdf
                    </a>
                </button>
                <div className="resume-container">
                    <div className="resume-img">
                        <img
                            className="res-img"
                            src={resumeImg}
                            alt="my resume"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
