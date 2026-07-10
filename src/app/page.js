
import Image from "next/image";
import Link from "next/link";
import Header from "./Components/header";
import HomePage from "./Components/homepage";
import "./page.css";
const images_url = process.env.NEXT_PUBLIC_S3_IMAGE_URL;





export default function Home() {


  return (
    <div className="main">
      <div className="main-text">
        <h2 className="greeting">Hi, I&apos;m Gabe.</h2>
        <p className="field">Software Development</p>
        <p className="field">Geographic Information Science</p>
        <div className="icons">
            <Link className="resumeicon" href={`${images_url}Gabe_Zeller_CV.pdf`}>
                <button >
                  <b>Resume</b>
                </button>
            </Link>
        
        </div>
      </div>
      <div className="headshot">
        <Image className="headshot" alt="Headshot" src={`${images_url}headshot.png`} width="400" height="400"/>
      </div>
      
    </div>
  );
}
