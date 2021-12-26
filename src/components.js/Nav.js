import { StyledNav } from "./styles/Nav.styles"
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <StyledNav>
                <nav>
                    <div>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <p>Who Am I</p>
                        </Link>
                        <Link to="technologies" style={{ textDecoration: 'none' }}>
                            <p>How I do It</p>
                        </Link>
                        <p>What Have I done</p>
                    </div>
                    <div className="navsocials">
                        <h2>Socials</h2>
                        <div className="socialicons">
                            <div className="icon">
                                <a href="https://github.com/asiqurrahman" target="_blank">
                                    <img src={github} width="50px" height="50px"/>
                                </a>
                            </div>
                            <div className="icon">
                                <a href="https://www.linkedin.com/in/asiqur-rahman-3605a5143/" target="_blank">
                                    <img src={linkedin} width="50px" height="50px"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </StyledNav>
        </div>
    )
}

export default Nav
