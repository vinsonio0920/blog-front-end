import { Link } from "react-router";
import styles from "./SignUp.module.css";
import { logoSvg } from "../src/assets";

const SignUp = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <Link to="/" className={styles.logoLink}>
          <img
            src={logoSvg}
            width="30"
            alt="Logo SVG"
            className={styles.logoSvg}
          />
          <span className={styles.logoText}>Vinson Blogs</span>
        </Link>
        <div className={styles.callToAction}>
          <h1>
            Read [placeholder] with <span>Vinson Blogs</span>
          </h1>
          <p>
            "Tung, tung, tung, tung, tung, tung, tung, tung, tung, sahur."
            Anomali mengerikan yang hanya keluar pada sahur, konon katanya kalau
            ada orang yang dipanggil sahur tiga kali dan tidak nyaut, maka
            makhluk ini datang di rumah kalian.
          </p>
        </div>
      </section>
      <section className={styles.formSection}>
        <form className={styles.signInForm}>
          <h1>Create Account</h1>
          <div>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength="3"
              maxLength="64"
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              minLength="3"
              maxLength="254"
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="text" id="password" name="password" required />
          </div>
          <button type="submit">Sign up</button>
        </form>
        <p className={styles.redirectLink}>
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </section>
    </div>
  );
};

export { SignUp };
