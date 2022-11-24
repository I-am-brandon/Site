import React from "react";
import { Container, Row, Col, Tab, Nav, TabContent } from "react-bootstrap";
import projImg1 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/git.png";
import projImg2 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/numpy.png";
import projImg3 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/enigma.png";
import projImg4 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/brain.png";
 import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const projects = [
        {
          title: "Gitlet - Java",
          description: "● Built version-control system that utilizes SHA1 hashing system and serialization to maintain persistence of files within the program, with the ability to commit file changes, revert to previous versions, and create branches ● Implemented through the use of the breadth-first search algorithm, sets, maps, deques, and other data structures.",
          imgUrl: projImg1,
        },
        {
          title: "Jump Game with AI Opponent - Java",
          description: "● Built classic jump game with support for human players as well as AI that finds the optimal move to make with adjustable difficulty. ● Achieved by recursively using the MiniMax algorithm which incorporated the use of Alpha-Beta Pruning as well as through the use of Stacks, 2D Arrays, and ArrayDeques.",
           imgUrl: projImg4,
        },
        {
          title: "Enigma Encryption Machine - Java",
          description: "● Translated an analog Enigma machine into code that functions like its original used in WW2 to encrypt input. Accomplished primarily using scanners, Hashmaps, String Manipulation(Regex), and ArrayLists.",
           imgUrl: projImg3,
        }
  ];

  const projects2 = [
    {
      title: "MiniNumpy - C",
      description: "● Developed a library for performing mathematical operations on matrices and arrays with specific attention to memory allocation using SIMD instructions and OpenMP for parallelization in order to achieve maximum speed and efficiency.",
       imgUrl: projImg2,
    },

    {
      title: "Insert other project here",
      description: "● Developed a library for performing mathematical operations on matrices and arrays with specific attention to memory allocation using SIMD instructions and OpenMP for parallelization in order to achieve maximum speed and efficiency.",
        imgUrl: projImg2,
    },
    {
      title: "Insert other project here",
      description: "● Developed a library for performing mathematical operations on matrices and arrays with specific attention to memory allocation using SIMD instructions and OpenMP for parallelization in order to achieve maximum speed and efficiency.",
        imgUrl: projImg2,
    }
  ];

  const projects3 = [
    {
      title: "Ramp-up Project ",
      description: "● INSERT DESC HERE",
      imgUrl: projImg4,
    },
    {
      title: "Insert project here",
      description: "● INSERT DESC HERE",
        imgUrl: projImg4,
    },
    {
      title: "Insert project here",
      description: "● INSERT DESC HERE",
        imgUrl: projImg4,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                         <Nav.Item>
                           <Nav.Link eventKey="first">Java</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                           <Nav.Link eventKey="second">C</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                           <Nav.Link eventKey="third">Web</Nav.Link>
                         </Nav.Item>
                       </Nav>
                       <Tab.Content>
                         <Tab.Pane eventKey="first">
                           <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    /> 
                                )
                              })
                            }
                          </Row>
                          <p> (example text) These are my projects in java!(example text) </p>
                        </Tab.Pane>


                        <Tab.Pane eventKey="second">
                        <Row>
                            {
                              projects2.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    /> 
                                )
                              })
                            }
                          </Row>
                          <p> (example text) These are my projects in C!(example text) </p>
                        </Tab.Pane>


                        <Tab.Pane eventKey="third">
                        <Row>
                            {
                              projects3.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    /> 
                                )
                              })
                            }
                          </Row>
                          <p> (example text) These are my web projects!(example text) </p>
                        </Tab.Pane>
                      </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}