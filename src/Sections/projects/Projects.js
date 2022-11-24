import React from "react";
import { Container, Row, Col, Tab, Nav, TabContent } from "react-bootstrap";
import projImg1 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/git.png";
import projImg2 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/numpy.png";
import projImg3 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/enigma.png";
import projImg4 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/brain.png";
// import { ProjectCard } from "./ProjectCard";
import ProjectCard  from "./ProjectCard.js";
import axios from "axios";
// import 'animate.css';



// export const Projects = () => {
export default function Projects(){
  
    const [NP,setNP] = React.useState();

    async function fetchData() {

      const resulting = await axios.get(
        "https://api.airtable.com/v0/appGSjN5HyPEXRgxZ/Projects?maxRecords=3&view=Grid%20view",
        {
        headers: {
          authorization:'Bearer keyKrpAEgO1McM3GX', 
        },
       }
      );
      console.log(resulting.data)
      // cuz in airtable api the data is called records
      setNP(resulting.data.records);
    }

    React.useEffect(() => {
      fetchData();
    },[]);

    if (!NP){
      return <div> Loading...</div>;
    }
    



    // const projects = [
    //     {
    //       title: "Gitlet - Java",
    //       description: "● Built version-control system that utilizes SHA1 hashing system and serialization to maintain persistence of files within the program, with the ability to commit file changes, revert to previous versions, and create branches ● Implemented through the use of the breadth-first search algorithm, sets, maps, deques, and other data structures.",
    //       imgUrl: projImg1,
    //     },
    //     {
    //       title: "Jump Game with AI Opponent - Java",
    //       description: "● Built classic jump game with support for human players as well as AI that finds the optimal move to make with adjustable difficulty. ● Achieved by recursively using the MiniMax algorithm which incorporated the use of Alpha-Beta Pruning as well as through the use of Stacks, 2D Arrays, and ArrayDeques.",
    //        imgUrl: projImg4,
    //     },
    //     {
    //       title: "Enigma Encryption Machine - Java",
    //       description: "● Translated an analog Enigma machine into code that functions like its original used in WW2 to encrypt input. Accomplished primarily using scanners, Hashmaps, String Manipulation(Regex), and ArrayLists.",
    //        imgUrl: projImg3,
    //     },

    //   ];

      const projects2 = [
        {
          title: "MiniNumpy - C",
          description: "● Developed a library for performing mathematical operations on matrices and arrays with specific attention to memory allocation using SIMD instructions and OpenMP for parallelization in order to achieve maximum speed and efficiency.",
           imgUrl: projImg2,
        },

      ];

      const projects3 = [
        {
          title: "Ramp-up Project ",
          description: "",
          //  imgUrl: projImg4,
        },

      ];


      return (
        
        <div className="project" id="project">
           <div className="proj-title">projects</div>
            <div className="project-container project-tabs ">

        { NP.map((record) => (
          // return (
          <ProjectCard key = {record.id} info={record.fields} />
          ))}
        
        </div>
         </div>



        //   <Container>
        //     <Row>
        //       <Col size={12}>
        //         {/* <TrackVisibility>
        //           {({ isVisible }) =>
        //           <div className={isVisible ? "animate__animated animate__fadeIn": ""}> */}
        //             <h2>Projects</h2>
        //             <p>Below is a description of my recent projects. Enjoy!</p>
        //             {/* <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
        //             <Tab.Container id="projects-tabs">
        //               <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
        //                 {/* <Nav.Item>
        //                   <Nav.Link eventKey="first">Java</Nav.Link>
        //                 </Nav.Item>
        //                 <Nav.Item>
        //                   <Nav.Link eventKey="second">C</Nav.Link>
        //                 </Nav.Item>
        //                 <Nav.Item>
        //                   <Nav.Link eventKey="third">Web</Nav.Link>
        //                 </Nav.Item> */}
        //               </Nav>
        //               {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> */}
        //               <Tab.Content>
        //                 <Tab.Pane eventKey="first">
        //                   <Row>
        //                     {NP.map((record) => {
        //                       return (
        //                         <ProjectCard key = {record.id} info={record.fields} />
        //                       )})
        //                     }

        //                     {/* {
        //                       projects.map((project, index) => {
        //                         return (
        //                           <ProjectCard
        //                             key={index}
        //                             {...project}
        //                             /> 
        //                         )
        //                       })
        //                     } */}



        //                   </Row>
        //                   <p> Java </p>
        //                 </Tab.Pane>
        //                 {/* <Tab.Pane eventKey="second"> This tab</Tab.Pane>
        //                 <Tab.Pane eventKey="third"> This tab</Tab.Pane> */}

        //                 {/* <Tab.Pane eventKey="second">
        //                 <Row>
        //                     {
        //                       projects2.map((project, index) => {
        //                         return (
        //                           <ProjectCard
        //                             key={index}
        //                             {...project}
        //                             /> 
        //                         )
        //                       })
        //                     }
        //                   </Row>
        //                   <p> C </p>
        //                 </Tab.Pane>


        //                 <Tab.Pane eventKey="third">
        //                 <Row>
        //                     {
        //                       projects3.map((project, index) => {
        //                         return (
        //                           <ProjectCard
        //                             key={index}
        //                             {...project}
        //                             /> 
        //                         )
        //                       })
        //                     }
        //                   </Row>
        //                   <p> Web </p>
        //                 </Tab.Pane> */}


        //               {/* </Tab.Content> */}
        //               </Tab.Content>
        //             </Tab.Container>
        //           {/* </div>} */}
        //         {/* </TrackVisibility> */}
        //       </Col>
        //     </Row>
        //   </Container>
        //   {/* <img className="background-image-right" src={colorSharp2}></img> */}
        // </section>



              

      );
    }
    