import { Col } from "react-bootstrap";
import React from "react";
import "./Projects.css";


// export const ProjectCard = ({ title, description, imgUrl }) => {
export default function ProjectCard({ info }) {
  return (
    // <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {/* <img src={imgUrl} /> */}
        <img alt = "hi" src={info.cover[0]} />
        <div className="proj-txtx">
          <h4>{info.Name}</h4>
          <span>{info.description}</span>
        </div>
      </div>
    // </Col>
  )
}