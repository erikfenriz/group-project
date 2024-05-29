'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate} from '@/lib/actions';
import Image from "next/image";
import '@/app/login/login.css';


export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <main className="login-page">
      <div className="form-wrapper">
          
      <form action={dispatch} className="login-form">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
        />
        <label className="login-lbl">
          Email
          <input type="email" 
          className="login-field" 
          id="email"
          name="email"
          placeholder="Enter your email address" 
          required/>
        </label>

        <label className="login-lbl">
          Password
          <input type="password" 
          className="login-field" 
          id="password" 
          name="password"
          placeholder="Enter password"
          required 
          minLength={4}/>
        </label>
        <LoginButton />
        <div
          className="error-message flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
      
      {/*
      <div className="account-action">
              <p>Don't have an account?</p>
              <a style={{ color: 'green' }} href="/login">Create One</a>
      </div> */}
      
      </form>
    
      </div>
    </main>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button className="login-btn" aria-disabled={pending}>
      Log in 
    </button>
  );
}