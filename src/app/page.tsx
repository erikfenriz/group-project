'use client'
import Image from "next/image";
import './index.css'
import { useState } from "react";
import { authenticate, signOut } from '@/lib/actions';

const Home = () => {
  const [accountAction, setAccountAction] = useState ("login")
  const handleSignOut = async (event: React.FormEvent) => {
    event.preventDefault();
    await signOut();
  };
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
          <a style={{ color: 'black' }} href="/register">REGISTER</a>
          </form>
        }
      </div>
      
      {/* Sign-out section */}
      <div className="signout-container">
        <form onSubmit={handleSignOut}>
          <button
            type="submit"
            className="signout-btn"
          >
            <span className="icon">&#x26A1;</span>
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>

    </main>
  );
}

export default Home;
