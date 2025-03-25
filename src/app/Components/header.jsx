"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
                    <Link href={"/"} onClick={menuOpen ? toggleMenu : () => {}}><h1 className="title-text">Gabe Zeller</h1></Link>
                </div>
                <button className='hamburger' onClick={toggleMenu}>
                    ☰
                </button>
                <nav className={`navbar ${menuOpen ? "show" : ""}`}>
                    <ul className="navlist">
                        <li className="button projects-button"><Link href={"/projects"} onClick={menuOpen ? toggleMenu : () => {}}>Projects</Link></li>
                        <li className="button aboutme-button">About Me</li>
                        <li>                        
                            <Link href="https://www.linkedin.com/in/gabe-zeller-987355217/" onClick={menuOpen ? toggleMenu : () => {}}>
                                <LuLinkedin className="icon"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/gabezeller" onClick={menuOpen ? toggleMenu : () => {}}>
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