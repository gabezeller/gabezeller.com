"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./header.css";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
            document.body.style.overflow = "";
            setMenuOpen(!menuOpen);
        } else {
            document.body.style.overflow = "hidden";
            setMenuOpen(!menuOpen);
        }
        
    }

    return (
        
        <div className="header">
            <div className="header-content">
                <div className="title">
                    <h1 className="title-text">Gabe Zeller</h1>
                </div>
                <button className='hamburger' onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`navbar ${menuOpen ? "show" : ""}`}>
                    <div className="button projects-button" >
                        Projects
                    </div>
                    <div className="button aboutme-button">
                        About Me
                    </div>

                    <div className="icons">
                        <Link href="https://www.linkedin.com/in/gabe-zeller-987355217/">
                            <Image class="icon" alt="Linkedin Icon" src="/images/linkedinicon.png" width="300" height="300"/>
                        </Link>
                        <Link href="https://github.com/gabezeller">
                            <Image class="icon" alt="Github Icon" src="/images/githubicon.png" width="300" height="300"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Header;