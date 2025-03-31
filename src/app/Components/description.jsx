import styles from "./Description.module.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";
import React from "react";
import { ViewportBoundary } from "next/dist/lib/metadata/metadata-boundary";

const Description = ({project}) => {

    const {title, category, skills, bullets, paragraphs, images, embed} = project;
    console.log(project);

  
    // Project Title | skills
    // Bullets
    // Images | Paragraphs
   
    
  
    // const renderImage = (path, index) => {
        
    //     <div className={styles.imageSlide} key={index}>
    //         {/* path.includes("mp4") ? () : () */}
    //             <Image className={styles.projectImage} src={path} alt={title} width="550" height="400" />

        
    //     </div>
    // }


    return (
    <div className={styles.description}>
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
            ) : 
            <div className={styles.slideContainer}>
                <Slide   className={styles.imageSlideshow}
                    duration={3000}
                    transitionDuration={100} 
                    
                    arrows={true} 
                    indicators={true}  >
                    {images.slice(1).map((image, index) => (
                        <div className={styles.imageSlide} key={index}>
                            {image.includes("MP4") ? // render video if contains mp4, else image
                            (
                                <video className={styles.projectImage} width="320" height="240" controls autoPlay>
                                    <source src={image} type="video/mp4" />
                                    Your browser does not support the video tag.
                              </video>
                            ) : 
                            (
                                <Image className={styles.projectImage} src={image} alt={title} width="550" height="400" />

                            )}
                        </div>

                            ))}
                </Slide>
            </div>
            }
            <div className={styles.paragraphs}>
                {paragraphs.map((paragraph, index) => (<p className={styles.paragraph} key={index}>{paragraph}</p>))}
            </div>
        </div>

    </div>
    );
};

export default Description