import './Skills.css';

const Skills = () => {
    return (
        <>
            <div className="main-skills-reel">
                <div className="skills-reel" id="skill-reel">
                    <div className="reel">&nbsp; - My Skills </div>
                    <div className="reel">&nbsp; - My Skills </div>
                    <div className="reel">&nbsp; - My Skills </div>
                    <div className="reel">&nbsp; - My Skills </div>
                    <div className="reel">&nbsp; - My Skills </div>
                    <div className="reel">&nbsp; - My Skills </div>
                    <div className="reel">&nbsp; - My Skills </div>
                    <div className="reel">&nbsp; - My Skills </div>
                    <div className="reel">&nbsp; - My Skills </div>
                    <div className="reel">&nbsp; - My Skills </div>
                </div>
            </div>
            <div className="skills-boxes">
                <div className="skill-box">
                    <h1 className="skill-title">JavaScript</h1>
                    <p className="skill-desc">For interactions with the DOM</p>
                    <p className="skill-desc">--</p>
                </div>
                <div className="skill-box">
                    <h1 className="skill-title">HTML5</h1>
                    <p className="skill-desc">
                        Mainly used to develop website markup
                    </p>
                    <p className="skill-desc">--</p>
                </div>
                <div className="skill-box">
                    <h1 className="skill-title">CSS3</h1>
                    <p className="skill-desc">
                        To style and bring design to the website
                    </p>
                    <p className="skill-desc">--</p>
                </div>
                <div className="skill-box">
                    <h1 className="skill-title">React</h1>
                    <p className="skill-desc">
                        Used to create single-page applications that involve
                        reactivity
                    </p>
                    <p className="skill-desc">--</p>
                </div>
                <div className="skill-box">
                    <h1 className="skill-title">TypeScript</h1>
                    <p className="skill-desc">
                        Using types, to catch bugs at the compile-time instead
                        of having them occurr at runtime.
                    </p>
                    <p className="skill-desc">--</p>
                </div>
                <div className="skill-box">
                    <h1 className="skill-title">Node.js</h1>
                    <p className="skill-desc">
                        For building fast and scalable server-side and
                        networking applications
                    </p>
                    <p className="skill-desc">--</p>
                </div>
                <div className="skill-box">
                    <h1 className="skill-title">Express</h1>
                    <p className="skill-desc">
                        Framework for Node.js to provide server-side logic
                    </p>
                    <p className="skill-desc">--</p>
                </div>
                <div className="skill-box">
                    <h1 className="skill-title">MongoDB</h1>
                    <p className="skill-desc">
                        NoSQL database used to manage document-oriented
                        information
                    </p>
                    <p className="skill-desc">--</p>
                </div>
                <div className="skill-box">
                    <h1 className="skill-title">Git</h1>
                    <p className="skill-desc">
                        Use this tool for source code management
                    </p>
                    <p className="skill-desc">--</p>
                </div>
                <div className="skill-box">
                    <h1 className="skill-title">Agile</h1>
                    <p className="skill-desc">
                        For taking an iterative approach for project management
                        and software development
                    </p>
                    <p className="skill-desc">--</p>
                </div>
            </div>
        </>
    );
};

export default Skills;
