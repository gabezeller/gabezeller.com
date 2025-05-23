"use client";

import styles from "./AboutMe.module.css";
import Image from "next/image";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function AboutMe() {

    const coursework = [
        "cs374 - Intro to Algorithms and Models of Computation", 
        "cs225 - Data Structures and Algorithms (C++)",
        "cs415 - Game Development (Unreal Engine)",
        "cs233 - Computer Architecture *in progress",
        "ggis480 - Principles of GIScience (Python)",
        "ggis479 - Enterprise GIS",
        "ggis224 - Environmental Data Science (R)",
        "ggis379 - Intro to GISystems",
        "ggis489 - Programming for GIS (R) *in progress"
    ];

    const images = [
        "/images/floatpic.jpg",
        "/images/NHBmammothskating.jpg",
        "/images/snowboarding.jpg",
        "/images/QuadPicture.jpg"
    ];

    

    return (
    <div className={styles.AboutMe}>
        <h2 className={styles.title}>
            ABOUT ME
        </h2>

        <div className={styles.intro}>
            Hi, I&apos;m Gabe Zeller, a Senior STEM student at the University of Illinois at Urbana-Champaign. I have a passion 
            for programming and software development, an academic background 
            in Geographic Information Science and Computer Science, and leadership experience as a 2-time elected executive 
            board member of a STEM Fraternity.
        </div>

        <div className={styles.aboutContainer}>
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Education
                </h3>
                <div className={styles.sectionParagraphs}>
                    <p>
                    I am a current Senior at the University of Illinois Urbana-Champaign pursuing a degree in Geography & Geographic Information 
                    Science with a minor in Computer Science.
                    </p>
                    <h4 className={styles.sectionSubtitle}>
                        Relevant Coursework
                    </h4>
                    <ul className={styles.coursework}>
                        
                        {coursework.map((course, index) => (<li className={styles.course} key={index}>{course}</li>))}

                    </ul>
                    <Image className={styles.image} src="/images/careerfairpicture.jpg" alt="Me and a friend at the Grainger career fair" width="400" height="400" />
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Extracurricular
                </h3>
                <div className={styles.sectionParagraphs}>
                    <h4 className={styles.sectionSubtitle}>
                        Triangle Fraternity
                    </h4>
                    <p>
                    I actively participate in the Illinois chapter of Triangle Fraternity, a unique organization that 
                    brings together STEM majors. I have held numerous positions in the Chapter, but most notably I 
                    served two terms as Social Director, an elected executive board position responsible for planning 
                    social events for the chapter.
                    </p>

                    <Image className={styles.image} src="/images/triangleconventionpic.jpg" alt="Me at the Triangle National Convention" width="400" height="400" />
                    <p className={styles.topMargin}>
                    In this position, I managed a $10,000 budget, led a team of 7 social coordinators, and focused 
                    on the overall success of the chapter in addition to my specific duties. The work was fulfilling, 
                    and I even introduced new events for my chapter. The most exciting was a live music house show where
                     we raised ~$900 for RACES, a local charity that provides counseling and support for victims of sexual assault.
                   </p>

                   <p className={styles.topMargin}>
                    One exciting fact about the Illinois Chapter of Triangle is that we were voted as the 2025 
                    best fraternity on campus via the yearly Best of CU polling of the communitiy&apos;s favorite things
                    done by the Daily Illini, our local newspaper. 
                   </p>


                    <h4 className={styles.sectionSubtitle}>
                        Project Code
                    </h4>

                    <p>
                        I am a member of Project Code, an organization that brings together students
                        to build various coding projects. I am currently on a team builing an e-commerce website
                        for students to buy and sell academic materials. So far, we have developed the front-end
                        and now we are developing the back-end. 
                    </p>

                    <Image className={styles.image} src="/images/projectcodepresenting.jpg" alt="Me presenting end of semester Project Code project progress" width="400" height="400" />

                    <p className={styles.topMargin}>
                        Previously, I worked in a group developing a mobile app to showcase events around the UIUC
                        campus. The app, Illini Happenings, was never pushed to completion by the project manager,
                        but it was still a fun learning experience. More detailed information can be found on the projects page.
                    </p>

                    
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Work Experience
                </h3>
                <div className={styles.sectionParagraphs}>
                    <h4 className={styles.sectionSubtitle}>
                        GIS Intern
                    </h4>
                    <p>
                        In the summer of 2024, I worked as GIS Intern for the Peoria County Government IT Department.
                        As a GIS intern, I updated and created various feature layers often used for web applications,
                        worked with the Peoria County Emergency Management Agency to vizualize risk from hazardous 
                        chemical facilities, and developed or fixed multiple Python scripts to automate vital department work.  
                    </p>

                    
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Personal
                </h3>
                <div className={styles.sectionParagraphs}>
                    <p>
                    I am a lover of live music, and I frequently attend local shows both in my hometown of Peoria and in the 
                    Champaign-Urbana area. I especially enjoy it when there is a mosh pit! In general, I enjoy most music, 
                    but my favorite is most genres of metal. Currently, I love listening to Slipknot, Deftones, Knocked Loose, and Lorna Shore.
                    </p>

                    <Image className={styles.image} src="/images/knockedloose.JPG" alt="Knocked Loose picture" width="400" height="400" />

                    <p className={styles.topMargin}>
                    In addition to my love for music, I also find joy in longboarding, especially around campus, exploring fashion through thrifting, 
                    spending time outdoors, and playing pool — even though I am not very good.
                    </p>
                    
                </div>
            </div>

            <div className={styles.slideContainer}>
                <Slide   className={styles.imageSlideshow}
                    duration={3000}
                    transitionDuration={100} 
                    
                    arrows={true} 
                    indicators={true}  >
                    {images.map((image, index) => (
                        <div className={styles.imageSlide} key={index}>

                                <Image className={styles.image} src={image} alt="General image" width="500" height="500" />

           
                        </div>

                            ))}
                </Slide>
            </div>

        </div>


    </div>
    )
}