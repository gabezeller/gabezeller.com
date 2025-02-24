import styles from "./Description.module.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image";
import React from "react";

const Description = ({project}) => {

    const {title, category, skills, bullets, paragraphs, images, embed} = project;

  
    // Project Title | skills
    // Bullets
    // Images | Paragraphs
   
    
  
 


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
                            <Image  className={styles.projectImage} src={image} alt={title} width="550" height="400" />
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