import Image from "next/image";
import Link from "next/link";
import Header from "./Components/header";
import HomePage from "./Components/homepage";
import "./page.css"


export default function Home() {
  return (
    <div className="main">
      <div className="main-text">
        <h2 className="greeting">Hi, I'm Gabe.</h2>
        <p className="field">Software Development</p>
        <p className="field">Geographic Information Science</p>
        <div className="icons">
          {/* ADD GITHUB and LINKED IN ICONS TO HEADER */}
            {/* <Link href="https://www.linkedin.com/in/gabe-zeller-987355217/"><Image class="logo" alt="Linkedin Icon" src="/images/linkedinicon.png" width="300" height="300"/></Link>
            <Link href="https://github.com/gabezeller"><Image class="logo" alt="Github Icon" src="/images/githubicon.png" width="300" height="300"/></Link> */}
            <Link class="resumeicon" href="images/Gabe_Zeller_Resume.pdf">
                <b>Resume</b>
            </Link>
        
        </div>
      </div>
      <div className="headshot">

      </div>
      
    </div>
  );
}
