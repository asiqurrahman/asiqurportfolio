import { StyledAbout } from "./styles/About.styles"
const About = () => {
    return (
        <StyledAbout>
            <div className="aboutme">
                <h1>Asiqur Rahman</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
            <div className="description">
                <p>A passionate web developer who designs, builds and publishes products of quality and reliability.</p>
                <p>Constantly looking to improve and work on the next big thing</p>
                <p className="unfunnyjoke">p.s. I can center your divs 4 different ways ;)</p>
            </div>
        </StyledAbout>
    )
}

export default About
