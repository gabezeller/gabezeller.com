"use client";

import styles from "./Description.module.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
// import data from "../../projects.json";
import Link from "next/link";
import { getProjectBySlug } from "@/app/services/projectServices";
import { useEffect } from "react";




// import { ViewportBoundary } from "next/dist/lib/metadata/metadata-boundary";

export default function Description () {
    // Get projectId from useParams
    const params = useParams();
    console.log("params = ", params);
    const [project, setProject] = React.useState(null);
    // Unpack project data
    // const {title, category, skills, bullets, paragraphs, images, embed} = data.projects[params.title];
    const {title, technologies, content, images} = project ? project : {"title":"Title", "category":"Category", "skills":"Skills", "content":[],};
    // fetch project/slug from backend API
    useEffect(() => {
        async function fetchProject(project_slug) {
            try {
                const response = await getProjectBySlug(project_slug);
                setProject(response);
                console.log("Fetched project data:", response);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }

        fetchProject(params.title);
    }, [params]);
    // console.log(images);
    // console.log(typeof(embed));

    // const testarr = images;
    // console.log('RENDER COUNT:', Math.random(), images.length);
    // console.log(testarr);

    // if (embed) {
    //     testarr.push("test2");
    // }
    // console.log(testarr);

    // console.log("[/projects/description.jsx]: ", data.projects[params.title]);
    // console.log("params = ", params);



    

    
    // Project Title | skills
    // Bullets
    // Images | Paragraphs

    // let slideImages = images;
    // if (embed) {
    //     slideImages.push(embed);
    //     console.log("embed added to images array: ", slideImages);
    // }
    



    return (
        project ? (
    <div className={styles.description}>
        <Link href="/projects">
        <button className={styles.xButton} >x</button> 
        </Link>
        <h2 className={styles.title}>
            {title}
        </h2>
        <span className={styles.skills}>
            {technologies.map((tech, i) => <span key={i}>{tech}{i < technologies.length - 1 ? ", " : ""}</span>)}
            {/* {skills} */}
        </span>
        <div className={styles.divider}></div>
        <ul className={styles.bullets}>
            {content.bullets.map((bullet, index) => (<li className={styles.bullet} key={index}>{bullet}</li>))}
        </ul>
        <div className={styles.divider}></div>

        <div className={styles.mainContent}>
            {/* If is embed, use youtube video, else use standard slide show */}
            {/* {embed != null ? (
                <iframe className={styles.embed}
                    src={embed}>
                </iframe>
            ) : ( */}
            <div className={styles.slideContainer}>
                <Slide   className={styles.imageSlideshow}
                    duration={3000}
                    transitionDuration={100} 
                    
                    arrows={true} 
                    indicators={true}  >
                    {images.slice(1).filter(image => !(image.url.includes("MP4")) && !(image.url.includes("mp4"))).map((image, index) => (
                        <div className={styles.imageSlide} key={index}>
                            {image.url.includes("MP4") | image.url.includes("mp4") ? // render video if contains mp4, else image
                            (
                                <video className={styles.projectImage} width="320" height="240" controls>
                                    <source src={image.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                              </video>
                            ) : 
                            (
                                image.url.includes("embed") ? (
                                    <iframe className={styles.embed} src={image.url} width="550" height="400"></iframe>
                                ) : 
                                (
                                <Image className={styles.projectImage} src={image.url} alt={image.alt_text} width="550" height="400" />
                                )
                            )}
                        </div>

                            ))} 

                    {/* {embed != null ? (
                <iframe className={styles.embed}
                    src={embed} width="550" height="400">
                </iframe>) : null} */}

                        
                </Slide>
            </div> 
            {/* )} */}
            <div className={styles.paragraphs}>
                {content.paragraphs.map((paragraph, index) => (<p className={styles.paragraph} key={index}>{paragraph}</p>))}
            </div>
        </div>

    </div>
    ) : (
        <div className={styles.loading}>
            <p>Loading project...</p>
        </div>
    )
    ); 
};

// export default Description