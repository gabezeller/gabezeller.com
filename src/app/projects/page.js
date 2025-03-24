"use client";

import Link from "next/link";
import Image from "next/image";
import data from "../projects.json";
import "./page.css"
import { useState } from "react";
import Description from "../Components/description";
// public\projects.json

export default function Projects() {
    const [descriptionOpen, setDescriptionOpen] = useState(false);

    // Read json
    const projects = data.projects;

    
    let softwareProjects = [];
    let gisProjects = [];

    for (let i = 0; i < projects.length; i++) {
        let currProject = projects[i];
        if (currProject.category == "Software") {
            softwareProjects.push(currProject);
        } else {
            gisProjects.push(currProject);
        }
    }

    // @TODO: Make toggleProjectDescription function

    const toggleProjectDescription = () => {
        if (descriptionOpen) {
            document.body.style.overflow = "";
            setDescriptionOpen(!descriptionOpen);
        } else {
            document.body.style.overflow = "hidden";
            setDescriptionOpen(!descriptionOpen);
        }
    }
    


    // Make render project card function
    const renderProject = (project) => {
        const {title, skills, images, bullets} = project;
        
        return (

            // Change to pass only project title? 
            // This would require importing json again and querying
            // Seems inefficient

                // On click, if description is open, do nothing, else open description
                <div key={title} className="project-card" onClick={descriptionOpen ? () => {} : toggleProjectDescription}>
                    <Image className="project-image" alt={title} src={images[0]} width={"300"} height={"200"} />

                    <div className="project-text">
                        <div className="project-title">{title}</div>
                        <div className="sub-text">{skills}</div>
                    </div>
                    {/* Only render description if descriptionOpen */}
                    {/* Only return description object if bullets is not empty aka project has no description*/}
                        {bullets.length === 0 ? null : (
                            <>
                                <Description className={`description ${descriptionOpen ? "show" : ""}`} project={project} />
                                <button className={`x-button ${descriptionOpen ? "show" : ""}`}>X</button> 
                            </>) }
                    
                    
                </div>
            
        )
    }
    
    return (
        <div className="projects">
            <h2 className="projects-title">
                PROJECTS
            </h2>

            <Description project={projects[2]} />


            <div className="project-section software">
                <h3 className="category">
                    Software Development
                </h3>
                <div className="project-cards">
                    {softwareProjects.map((project) => (renderProject(project)))}
                </div>

            </div>

            <div className="project-section gis">
                <h3 className="category">
                    Geographic Information Science
                </h3>
                <div className="project-cards">
                    {gisProjects.map((project) => (renderProject(project)))}


                </div>
            </div>
        </div>

    );
}