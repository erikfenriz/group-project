import Image from "next/image";
import '@/app/login/login.css';

export default function LoginForm() {
    return (
        <main className="login-page">
            <div className="form-wrapper">
                <form className="login-form">
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
                    </div>
                </form>
            </div>
        </main>
    );
}
