import { Link } from "react-router";
import styles from "./SignIn.module.css";
import { logoSvg } from "../assets";

const SignIn = () => {
  return (
    <>
      <section className="logoSection">
        <h1>
          Welcome back to <img src={logoSvg} width={30} alt="Logo SVG" />
          <span className="logo">Vinson Blogs</span>
        </h1>
        <p>🔥 Peak from jen-and-kris on DeviantArt</p>
      </section>
      <section className="formSection">
        <form>
          <h1>Sign In</h1>
          <div>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="text" id="password" name="password" required />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </section>
      <p>
        New to Vinson Blogs?
        <Link to="/sign-up">Sign Up</Link>
      </p>
    </>
  );
};

export { SignIn };
