'use client'
import Image from "next/image";
import './index.css'
import { useState } from "react";
import { authenticate, signOut_ } from '@/lib/actions';

const Home = () => {
  const [accountAction, setAccountAction] = useState ("login")
  const handleSignOut = async (event: React.FormEvent) => {
    event.preventDefault();
    await signOut_();
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
          <a style={{ color: 'blue', textDecoration: 'none' }} href="/login">Sign in</a> 
          <a style={{ color: 'white', backgroundColor: 'green', padding: '10px 20px' }} href="/register">REGISTER</a>
          </form>
        }
      </div>     

    </main>
  );
}

export default Home;
