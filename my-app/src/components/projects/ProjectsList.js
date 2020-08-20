import React from 'react';
import "../projects/ProjectsList.css";


import ProjectCard from "./ProjectCard"

function ProjectsList(props) {
    


    return (
        <div className="project-container">
            <h2 id="project-heading" className="heading-secondary">Project Portfolio</h2>
            <div className="grid-container">
                {props.projects && props.projects.map((item) =>
                    <ProjectCard 
                    key={item.id} 
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    />
                )}
            </div>    
        </div>     
    )
}

export default ProjectsList;
