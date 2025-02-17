"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Linkedin, LogoGithub } from '@geist/icons';
// import { Github, Linkedin } from '@geist-ui/icons';
import { LuLinkedin, LuGithub  } from "react-icons/lu";
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
                    <Link href={"/"} onClick={toggleMenu}><h1 className="title-text">Gabe Zeller</h1></Link>
                </div>
                <button className='hamburger' onClick={toggleMenu}>
                    ☰
                </button>
                <nav className={`navbar ${menuOpen ? "show" : ""}`}>
                    <ul className="navlist">
                        <li className="button projects-button"><Link href={"/projects"} onClick={toggleMenu}>Projects</Link></li>
                        <li className="button aboutme-button">About Me</li>
                        <li>                        
                            <Link href="https://www.linkedin.com/in/gabe-zeller-987355217/" onClick={toggleMenu}>
                                <LuLinkedin className="icon"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/gabezeller" onClick={toggleMenu}>
                                <LuGithub className="icon" />
                            </Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    );

};

export default Header;