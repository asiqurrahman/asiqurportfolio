import { StyledProjects } from "./styles/Projects.style"
import zavixs from '../images/zavixs.png'
import swup from '../images/swup.png'
import portfolio from '../images/portfolio.png'
import { motion } from "framer-motion"


const Projects = () => {

    const alert = () => {
        window.alert('This is a private repository. Please contact me for access to the repository.')
    }

    const alreadyonsite = () => {
        window.alert('You are already on the site. Keep exploring :)')
    }


    return (
        <StyledProjects>
            <div className="title">
                <h1>Projects</h1>
            </div>
            <div className="projectcontainer">
                {/* Project One */}
                 <motion.div className="project"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .5}}
                 >
                    <div className="item">
                        <div>
                            <h2>Portfolio Website</h2>   
                        </div>
                        <div>
                            <img src={portfolio} />
                        </div>
                    </div>
                    <div className="item description">
                        <h2>Description</h2>
                        <p>A portfolio website showcasing my skills and projects</p>
                    </div>
                    <div className="item">
                        <h2>Tech Stack</h2>
                        <div>
                            <h3>React.Js</h3>
                            <h3>React Router</h3>
                            <h3>Framer Motion</h3>
                            <h3>Styled Componenets</h3>
                        </div>
                    </div>
                    <div className="item sources">
                        <div className="live" onClick={alreadyonsite}>
                            <p>Live Site</p>
                        </div>
                        <div className="live git">
                            <a href="https://github.com/asiqurrahman/asiqurportfolio" target="_blank">
                                <p>Code</p>
                            </a>
                        </div>
                    </div>
                </motion.div>
                {/* Project Two */}
                <motion.div className="project"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: .3}}
                >
                    <div className="item">
                        <div>
                            <h2>Zavixs</h2>   
                        </div>
                        <div>
                            <img src={zavixs} />
                        </div>
                    </div>
                    <div className="item description">
                        <h2>Description - JAM Stack</h2>
                        <p>Zavixs is a free tool that analyzes any website and displays data in a meaningful way. A way to see traffic data, ad revenue, worth of a website, and more.</p>
                    </div>
                    <div className="item">
                        <h2>Tech Stack</h2>
                        <div>
                            <h3>Next.Js</h3>
                            <h3>Bootstrap</h3>
                            <h3>Web Scrapping</h3>
                            <h3>Styled Componenets</h3>
                            <h3>Alexa Web API</h3>
                            <h3>Vercel</h3>
                        </div>
                    </div>
                    <div className="item sources">
                        <div className="live">
                            <a href="https://www.zavixs.com/" target="_blank">
                                <p>Live Site</p>
                            </a>
                        </div>
                        <div className="live git" onClick={alert}>
                            <p>Code</p>
                        </div>
                    </div>
                </motion.div>
                {/* Project Three */}
                <motion.div className="project"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: .5}}
                >
                    <div className="item">
                        <div>
                            <h2>Swup</h2>   
                        </div>
                        <div>
                            <img src={swup} />
                        </div>
                    </div>
                    <div className="item description">
                        <h2>Description - Full Stack</h2>
                        <p>Swup is a peer to peer marketplace for swapping unwanted items for desired items. </p>
                        <br />
                        <br />
                        <p className="wakeup">Please give the site some time to load. The backend is hosted on a free tier of heroku dyno and requires time to wake up.</p>
                    </div>
                    <div className="item">
                        <h2>Tech Stack</h2>
                        <div>
                            <h3>Next.Js</h3>
                            <h3>Redux</h3>
                            <h3>Styled Componenets</h3>
                            <h3>Framer Motion</h3>
                            <h3>Django-Rest-Framework</h3>
                            <h3>JWT</h3>
                            <h3>AWS S3 Bucket</h3>
                            <h3>Heroku</h3>
                            <h3>PostgreSQL</h3>
                            <h3>Google Places API</h3>
                            <h3>Google Maps API</h3>
                        </div>
                    </div>
                    <div className="item sources">
                        <div className="live">
                            <a href="https://www.zavixs.com/" target="_blank">
                                <p>Live Site</p>
                            </a>
                        </div>
                        <div className="live git">
                            <a href="https://github.com/asiqurrahman/nexttradingwebsite" target="_blank">
                            <p>Frontend</p>
                            </a>
                        </div>
                        <div className="live git">
                            <a href="https://github.com/asiqurrahman/swapbackend" target="_blank">
                                <p>Backend</p>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </StyledProjects>
    )
}

export default Projects
