"use client";

import styles from "./Description.module.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import data from "../../projects.json";
import Link from "next/link";

// import { ViewportBoundary } from "next/dist/lib/metadata/metadata-boundary";

export default function Description () {
    // Get projectId from useParams
    const params = useParams();

    // Unpack project data
    const {title, category, skills, bullets, paragraphs, images, embed} = data.projects[params.title];

    // console.log("[/projects/description.jsx]: ", data.projects[params.title]);
    // console.log("params = ", params);



    // return (
    //     <div>This is the description page</div>
    // );

    
    // Project Title | skills
    // Bullets
    // Images | Paragraphs

    // let slideImages = images;
    // if (embed) {
    //     slideImages.push(embed);
    //     console.log("embed added to images array: ", slideImages);
    // }
    



    return (
    <div className={styles.description}>
        <Link href="/projects">
        <button className={styles.xButton} >x</button> 
        </Link>
        <h2 className={styles.title}>
            {title}
        </h2>
        <span className={styles.skills}>
            {skills}
        </span>
        <div className={styles.divider}></div>
        <ul className={styles.bullets}>
            {bullets.map((bullet, index) => (<li className={styles.bullet} key={index}>{bullet}</li>))}
        </ul>
        <div className={styles.divider}></div>

        <div className={styles.mainContent}>
            {/* If is embed, use youtube video, else use standard slide show */}
            {embed != null ? (
                <iframe className={styles.embed}
                    src={embed}>
                </iframe>
            ) : (
            <div className={styles.slideContainer}>
                <Slide   className={styles.imageSlideshow}
                    duration={3000}
                    transitionDuration={100} 
                    
                    arrows={true} 
                    indicators={true}  >
                    {images.slice(1).map((image, index) => (
                        <div className={styles.imageSlide} key={index}>
                            {image.includes("MP4") | image.includes("mp4") ? // render video if contains mp4, else image
                            (
                                <video className={styles.projectImage} width="320" height="240" controls>
                                    <source src={image} type="video/mp4" />
                                    Your browser does not support the video tag.
                              </video>
                            ) : 
                            (
                                // image.includes("embed") ? (
                                //     <iframe className={styles.embed} src={image} width="550" height="400"></iframe>
                                // ) : 
                                // (
                                <Image className={styles.projectImage} src={image} alt={title} width="550" height="400" />
                                // )
                            )}
                        </div>

                            ))} 

                    {/* {embed != null ? (
                <iframe className={styles.embed}
                    src={embed} width="550" height="400">
                </iframe>) : null} */}

                        
                </Slide>
            </div> 
            )}
            <div className={styles.paragraphs}>
                {paragraphs.map((paragraph, index) => (<p className={styles.paragraph} key={index}>{paragraph}</p>))}
            </div>
        </div>

    </div>
    ); 
};

// export default Description