"use client";

import { useState } from "react";
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
            </div>
        </div>
    );

};

export default Header;