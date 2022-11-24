import React from "react";
import { Container, Row, Col, Tab, Nav, TabContent } from "react-bootstrap";
import projImg1 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/git.png";
import projImg2 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/numpy.png";
import projImg3 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/enigma.png";
import projImg4 from "/Users/brandonpenilla/Desktop/Codebase/my-app/src/assets/images/brain.png";
import ProjectCard  from "./ProjectCard.js";
import axios from "axios";
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

      return (
        <div className="project" id="project">
           <div className="proj-title">projects</div>
            <div className="project-container project-tabs ">

        { NP.map((record) => (
          <ProjectCard key = {record.id} info={record.fields} />
          ))}
        </div>
         </div>
      );
    }
    