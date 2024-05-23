'use client'
import Image from "next/image";
import './index.css'
import { useState } from "react";

export default function Home() {
  const [accountAction, setAccountAction] = useState ("login")
  return (
    <main className="landing-page"> 
      <div className="form-wrapper">
        <Image
          className="landing-img"
          src="/hero-image.jpg"
          alt="hero image"
          width={400}
          height={800}
        />
      
        {
          accountAction === "login" &&
          <form className="login-form">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={150}
            />
          <a style={{ color: 'black' }} href="/login">Sign in</a> 
          </form>
        }
      </div>
    </main>
  );
}
