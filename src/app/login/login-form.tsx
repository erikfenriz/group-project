
import Image from "next/image";
import '@/app/login/login.css';
import {redirect} from 'next/navigation';
import { getSession, login, logout} from '@/lib/auth';

export default function LoginForm() {

    return (
        <main className="login-page">
            <div className="form-wrapper">

                <form action={async (formData) => {
                    'use server';
                    await login(formData);
                }}
                      className="login-form">
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
                    <button className="login-btn">
                        Log in
                    </button>
                    <div
                        className="error-message flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {/*{errorMessage && (*/}
                        {/*    <>*/}
                        {/*        <p className="text-sm text-red-500">{errorMessage}</p>*/}
                        {/*    </>*/}
                        {/*)}*/}
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
