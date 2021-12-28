import { StyledTec } from "./styles/Tech.styles"
import react from '../images/logo512.png'
import Javascript from '../images/javascript.png'
import html from '../images/html.png'
import css from '../images/css.png'
import next from '../images/next.svg'
import styled from '../images/styled.png'
import python from '../images/python.png'
import django from '../images/django.png'
import drf from '../images/drf.png'
import aws from '../images/awss3.webp'
import postgres from '../images/postgre.png'
import heroku from '../images/heroku.png'
import github from '../images/github.png'
import postman from '../images/postman.png'
import { motion } from "framer-motion"

const Tech = () => {
    return (
        <StyledTec>
            <div>
                <div className="titlecontinar">
                    <div className="title">
                        <h1>Technologies I use to develope</h1>
                    </div>
                    {/* <div>
                        <h2>Compact View</h2>
                        <button>Click Me</button>
                    </div> */}
                </div>
                <div className="techcontainer">
                    <motion.div className="tech html" 
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3}}>
                        <div className="techimage">
                            <img src={html} />
                        </div>
                        <div className="techtext">
                            <h2>HTML 5</h2>
                            <p>HyperText Markup Language for documents designed to be displayed in a web browser.</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech css"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: .2}}>
                        <div className="techimage">
                            <img src={css} />
                        </div>
                        <div className="techtext">
                            <h2>CSS</h2>
                            <p>Stylesheet language used to describe the presentation of a document written in HTML.</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech javascript"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: .3}}                   
                    >
                        <div className="techimage">
                            <img src={Javascript} />
                        </div>
                        <div className="techtext">
                            <h2>Javascript</h2>
                            <p>A dynamic programming language used for web development.</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: .4}}                      
                    >
                        <div className="techimage">
                            <img src={react} />
                        </div>
                        <div className="techtext">
                            <h2>React.js</h2>
                            <p>Free and open-source front-end JavaScript library for building user interfaces based on UI components.</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech next"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: .5}}                      
                    >
                        <div className="techimage nextimage">
                            <img src={next} />
                        </div>
                        <div className="techtext">
                            <h2>Next.js</h2>
                            <p> An open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.</p>
                        </div>
                    </motion.div>
                    {/* <div className="tech styled">
                        <div className="techimage">
                            <img src={styled} />
                        </div>
                        <div className="techtext">
                            <h2>Next.js</h2>
                            <p> An open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.</p>
                        </div>
                    </div> */}
                    <motion.div className="tech python"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: .6}} 
                    >
                        <div className="techimage">
                            <img src={python} />
                        </div>
                        <div className="techtext">
                            <h2>Python</h2>
                            <p>An interpreted high-level general-purpose programming language.</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech django"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: .7}} 
                    >
                        <div className="techimage">
                            <img src={django} />
                        </div>
                        <div className="techtext">
                            <h2>Django</h2>
                            <p>Python-based free and open-source web framework that follows the model–template–views architectural pattern.</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech drf"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: .8}} 
                    >
                        <div className="techimage drfimage">
                            <img src={drf} />
                        </div>
                        <div className="techtext">
                            <h2>Django-Rest-Framework</h2>
                            <p>A powerful and flexible toolkit for building Web APIs.</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech aws"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: .9}}                    
                    >
                        <div className="techimage">
                            <img src={aws} />
                        </div>
                        <div className="techtext">
                            <h2>AWS S3 Buckets</h2>
                            <p>An object storage service that stores data as objects within buckets.</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech postgres"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: 1}} 
                    >
                        <div className="techimage">
                            <img src={postgres} />
                        </div>
                        <div className="techtext">
                            <h2>PostgreSQL</h2>
                            <p>Free and open-source relational database management system emphasizing extensibility and SQL compliance.</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech heroku"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: 1.1}} 
                    >
                        <div className="techimage">
                            <img src={heroku} />
                        </div>
                        <div className="techtext">
                            <h2>Heroku</h2>
                            <p>Cloud platform that lets companies build, deliver, monitor and scale apps.</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech github"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: 1.2}} 
                    >
                        <div className="techimage gitimage">
                            <img src={github} />
                        </div>
                        <div className="techtext">
                            <h2>Github</h2>
                            <p>A code hosting platform for version control and collaboration</p>
                        </div>
                    </motion.div>
                    <motion.div className="tech postman"
                    initial={{opacity: 0, translateX: -300}} 
                    animate={{opacity: 1, translateX: 0}} 
                    transition={{duration: .3, delay: 1.3}} 
                    >
                        <div className="techimage">
                            <img src={postman} />
                        </div>
                        <div className="techtext">
                            <h2>Postman</h2>
                            <p>An application used for API testing</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </StyledTec>
    )
}

export default Tech
