'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate, signOut } from '@/lib/actions';
import Image from "next/image";
import '@/app/index.css';


export default function Home() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const handleSignOut = async (event: React.FormEvent) => {
    event.preventDefault();
    await signOut();
  };

  return (
    <main className="landing-page">
      <Image
        className="landing-img"
        src="/hero-image.jpg"
        alt="hero image"
        width={400}
        height={800}
      />
      <form action={dispatch} className="login-form">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
        />
        <label className="login-lbl">
          Email
          <input type="email" className="login-field" />
        </label>
        <label className="login-lbl">
          Password
          <input type="password" className="login-field" />
        </label>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      {/* Sign-out section */}
      <div className="signout-container">
        <form onSubmit={handleSignOut}>
          <button
            type="submit"
            className="signout-btn flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <span className="icon">&#x26A1;</span>
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </main>
  );
}