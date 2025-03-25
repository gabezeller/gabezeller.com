"use client";

import Link from "next/link";
import Image from "next/image";
import data from "../projects.json";
import "./page.css"
import { useState, useEffect } from "react";
import Description from "../Components/description";
// public\projects.json

export default function Projects() {
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [currProject, setCurrProject] = useState(null);
    const [renderingDescription, setRenderingDescription] = useState(false);

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

    // setCurrProject(projects[0]);

    const handleProjectClick = (project) => {
        console.log("handling project click...");
        //console.log(project);
        
        if (project.bullets != null) {

            console.log("setting curr project... (should trigger useEffect)");
            setCurrProject(project);
            setRenderingDescription(true);
        }
        // @TODO: add link handling for external html page (illinoisCrime)
        

    }

    // @TODO: Make toggleProjectDescription function

    const toggleProjectDescription = () => {
        console.log("toggling project descrition...");
        if (descriptionOpen) {
            document.body.style.overflow = "";
            setDescriptionOpen(false);
            setCurrProject(null);
        } else {
            document.body.style.overflow = "hidden";
            setDescriptionOpen(true);

            // console.log("toggling project description on...");
            //renderDescription();
        }
    }

    useEffect(() => {
        console.log("reached currProject useEffect...");
        // console.log("descriptionOpen= ", descriptionOpen);
        // console.log("currProject = ", currProject);
        // console.log("renderingDescription = ", renderingDescription);
        if (currProject && renderingDescription) {
            console.log("reached line 64!");
            toggleProjectDescription();
            setRenderingDescription(false);
        }
        // console.log("descriptionOpen= ", descriptionOpen);
    }, [currProject]);

    useEffect(() => {
        console.log("descriptionOpen = ", descriptionOpen);
    }, [descriptionOpen]);



    


    // Make render project card function
    const renderProject = (project) => {
        const {title, skills, images, bullets} = project;
        
        return (

            // Change to pass only project title? 
            // This would require importing json again and querying
            // Seems inefficient

                // On click, if description is open, do nothing, else open description
                <div key={title} className="project-card" onClick={() => handleProjectClick(project)}>
                    <Image className="project-image" alt={title} src={images[0]} width={"300"} height={"200"} />

                    <div className="project-text">
                        <div className="project-title">{title}</div>
                        <div className="sub-text">{skills}</div>
                    </div>       
                    
                </div>
            
        )
    }
    
    return (
        <div className="projects">


            {/* @TODO: Change to one Description component that takes props based on click */}
            {/* <Description project={projects[2]} /> */}
            {currProject === null ? null : (
                        <div className={`descriptionContainer ${descriptionOpen ? "show" : ""}`}>
                            <button className="x-button" onClick={toggleProjectDescription}>x</button> 
                            <Description className="description" project={currProject} />
                        </div>
            )}



            <h2 className="projects-title">
                PROJECTS
            </h2>

            


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