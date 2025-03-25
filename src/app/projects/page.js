"use client";

import Link from "next/link";
import Image from "next/image";
import data from "../projects.json";
import "./page.css"
import { useState, useEffect } from "react";
import Description from "../Components/description";

export default function Projects() {
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [currProject, setCurrProject] = useState(null);
    const [renderingDescription, setRenderingDescription] = useState(false);


    // Place holder project to prevent DOM updating when changing project selection
    const placeholderProject = {"title":"Title", "category":"Category", "skills":"Skills", "bullets":[], "paragraphs":[],
        "images":[], "embed":"Embed"
    };

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

    

    const handleProjectClick = (project) => {
        console.log("handling project click...");

        if (project.bullets.length != 0) {

            console.log("setting curr project... (should trigger useEffect)");
            setCurrProject(project);
            setRenderingDescription(true);
        } else {
            openInNewTab(project.link);
        }
        
        

    }


    const toggleProjectDescription = () => {
        console.log("toggling project description...");
        if (descriptionOpen) {
            document.body.style.overflow = "";
            setDescriptionOpen(false);
            setCurrProject(placeholderProject);
        } else {
            document.body.style.overflow = "hidden";
            setDescriptionOpen(true);

        }
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    useEffect(() => {
        console.log("reached currProject useEffect...");

        if (currProject && renderingDescription) {
            console.log("reached line 64!");
            toggleProjectDescription();
            setRenderingDescription(false);
        }
    }, [currProject]);

    useEffect(() => {
        console.log("descriptionOpen = ", descriptionOpen);
    }, [descriptionOpen]);



    


    // Make render project card function
    const renderProject = (project) => {
        const {title, skills, images} = project;
        
        return (
            
                

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