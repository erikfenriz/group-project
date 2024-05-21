'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions';
import Image from "next/image";
import './index.css'

export default function Home() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

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
          <input type="email" className="login-field"/>
        </label>
        <label className="login-lbl">
          Password
          <input type="password" className="login-field"/>
        </label>
        <button type="submit" className="login-btn" >Login</button>
      </form>
    </main>
  );
}
