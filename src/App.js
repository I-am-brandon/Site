
import './App.css';
import './Sections/NavBar.css';
import './Sections/banner/Banner.css';
import './Sections/projects/Projects.css';

import { Link, animateScroll as scroll } from "react-scroll";
import React, {Component} from 'react';

import { NavBar } from './Sections/NavBar';
import { Banner } from './Sections/banner/Banner.js';
// import { Projects } from './Sections/projects/Projects.js';
import Projects from './Sections/projects/Projects.js';
// import { ProjectCard } from './Sections/projects/ProjectCard.js';
import ProjectCard from './Sections/projects/ProjectCard.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import About from './Sections/about/About';
import Contact from './Sections/contact/Contact';
import Experience from './Sections/experience/Experience';





function App() {
  return (
    
    // #everything in here will be displayed
  <div className='App'>

    <NavBar/>
    <Banner/>
    {/* <ProjectCard/> */}
    <Projects/>

    {/* <img 
    src = {}
    className = ""
    alt = ""
    onClick={this.scrollToTop}/> */}

{/* <div className='navigation'> */}

{/* <ul>
  <li>
    <Link 
    activeClass="active"
    smooth={true}
    offset= {-70}
    duration = {700}
     spy = {true}
    to= "about"> About </Link>
    </li>

<Link 
    activeClass="active"
    smooth={true}
    offset= {-70}
    duration = {700}
    // spy = {true}
    to= "experience"> Experience </Link>

<Link 
    activeClass="active"
    smooth={true}
    offset= {-70}
    duration = {700}
    // spy = {true}
    to= "projects"> Projects </Link>

<Link 
    activeClass="active"
    smooth={true}
    offset= {-70}
    duration = {700}
    // spy = {true}
    to= "contact"> Contact </Link> */}
{/* 

</ul> */}
{/* </div> */}
{/* 
<h1 className='MH1'> Hi I'm Brandon</h1> */}
{/* 
    <About/>
    <Contact/>
    <Experience/> */}
    {/* <Projects/> */}

    {/* <div class = "NavBar"> 
    <a class="active" href="#home">Home </a>
    <a href="#news">News </a>
    <a href="#contact">Contact </a>
    <a href="#about">About </a>
    </div> */}
    </div>
  );
}



export default App;
