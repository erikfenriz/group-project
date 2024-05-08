import Image from "next/image";
import './index.css'

export default function Home() {
  return (
    <main className="landing-page">
      <Image
        src="/hero-image.jpg"
        alt="hero image"
        width={400}
        height={800}
      />
      <form className="login-form">
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
