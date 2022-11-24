
import './App.css';
import './Sections/NavBar.css';
import './Sections/banner/Banner.css';
import './Sections/projects/Projects.css';

import { Link, animateScroll as scroll } from "react-scroll";
import React, {Component} from 'react';

import { NavBar } from './Sections/NavBar';
import { Banner } from './Sections/banner/Banner.js';
import { Projects } from "./Sections/projects/Projects.js";
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
    <Projects/>

    </div>
  );
}

export default App;
