import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect} from "react";
import navIcon3 from '../assets/images/github.svg';
import navIcon2 from '../assets/images/instalogo.svg';
import navIcon1 from '../assets/images/linkedin.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // function that determines what happens when scrolled, so if scrolled in y position 50px then set scrolled true then back or no scroll then sceroll false
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    // takes in the value and sets it in the active link
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }


    return (
      <Router>
          <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
              <Navbar.Brand href="#home">
              {/* //LOGO HERE */}
                {/* <img src={} alt="Logo" />  */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav> 
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/brandonpenilla/"><img src={navIcon1} alt="" /></a>  
                    <a href="https://www.instagram.com/brandon.penilla/"><img src={navIcon2} alt="" /></a>
                    <a href="https://github.com/I-am-brandon"><img src={navIcon3} alt="" /></a>
                  </div>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
      )

}

