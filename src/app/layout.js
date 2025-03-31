import {  Handjet } from "next/font/google";
import "./globals.css";
import Header from "./Components/header"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
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
        <Header/>
        <main>
        {children}
        </main>
        
      </body>
    </html>




  );
}
