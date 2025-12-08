import {  Handjet, Geist_Mono, Geist, Google_Sans_Code, Metal_Mania, VT323} from "next/font/google";
import "./globals.css";
import Header from "./Components/header"
import { Fragment } from "react";

// const VT323Font = VT323({
//   variable: "--font-vt323",
//   subsets: ["latin"],
//   weight: ['400'],
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const metalMania = Metal_Mania({
//   variable: "--font-metal-mania",
//   subsets: ["latin"],
//   weight: ['400'],
// });

// const googleSansCode = Google_Sans_Code({
//   variable: "--font-google-sans-code",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const handJet = Handjet({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Gabe Zeller",
  description: "Gabe Zeller",
  icon: "/images/headshot.png"
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en" >
      <body
        className={handJet.className}
      >
        <div className="backdrop">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
          <div className="circle-5"></div>
          <div className="circle-6"></div>
          <div className="circle-7"></div>
          <div className="circle-8"></div>
         
          
        </div>
        
          <Header/>
          <main>
          
            {children}
          
          
          </main>
        
        
      </body>
    </html>




  );
}
