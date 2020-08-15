import React from 'react'

import "../projects/ProjectCard.css";

function ProjectCard(props) {
    return (
        <div className="card">
            <img src={props.img} alt={`image of ${props.title} project`} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a className="source-btn" href={props.source}>Source</a>
            <a className="demo-btn" href={props.demo}>Demo</a>
        </div>
    )
}

export default ProjectCard;

