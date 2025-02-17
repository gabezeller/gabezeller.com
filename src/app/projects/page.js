import Link from "next/link";
import Image from "next/image";
import data from "../projects.json";
import "./page.css"
// public\projects.json

export default function Projects() {
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

    


    // Make render project card function
    const renderProject = (project) => {
        const {title, skills, images} = project;
        return (

            // Change to pass only project title? 
            // This would require importing json again and querying
            // Seems inefficient
            <Link href={{
                pathname: '/description',
                query: { id: title },
              }}>
                <div className="project-card">
                    <Image className="project-image" alt={title} src={images[0]} width={"300"} height={"200"} />

                    <div className="project-text">
                        <div className="project-title">{title}</div>
                        <div className="sub-text">{skills}</div>
                    </div>

                    
                </div>
            </Link>
            
        )
    }
    
    return (
        <div className="main">
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

                {/* {showAllEvents
            ? allEvents.map((event) => (renderEvent(event)))
            : allEvents.map((event) => (renderEvent(event)))} */}
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