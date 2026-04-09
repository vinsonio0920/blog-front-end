import { Form, Link } from "react-router";
import styles from "./SignIn.module.css";
import { logoSvg } from "../assets";

const SignIn = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>
            Welcome back to{" "}
            <img
              src={logoSvg}
              className={styles.logoSvg}
              width={30}
              alt="Logo SVG"
            />
            <span className={styles.logoText}>Vinson Blogs</span>
          </h1>
          <p className={styles.attribution}>
            🔥 Peak from{" "}
            <Link to="https://www.deviantart.com/jen-and-kris" target="_blank">
              jen-and-kris
            </Link>{" "}
            on DeviantArt
          </p>
        </div>
      </section>
      <section className={styles.formSection}>
        <div className={styles.formContent}>
          <Link to="/" className={styles.logoLink}>
            <img
              src={logoSvg}
              width="30"
              alt="Logo SVG"
              className={styles.logoSvg}
            />
            <span className={styles.logoText}>Vinson Blogs</span>
          </Link>
          <Form className={styles.authForm} method="POST">
            <h1>Sign In</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" id="password" name="password" required />
            </div>
            <button type="submit">Sign in</button>
          </Form>
          <p className={styles.redirectLink}>
            New to Vinson Blogs? <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export { SignIn };
