import { Link } from "react-router";
import styles from "./SignUp.module.css";
import { logoSvg, tripleT } from "../assets";

const SignUp = () => {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img
            src={logoSvg}
            width="30"
            alt="Logo SVG"
            className={styles.logoSvg}
          />
          <div className={styles.callToAction}>
            <h1>
              Read [placeholder] with{" "}
              <span className={styles.logoText}>Vinson Blogs</span>
            </h1>
            <p>
              "Tung, tung, tung, tung, tung, tung, tung, tung, tung, sahur."
              Anomali mengerikan yang hanya keluar pada sahur, konon katanya
              kalau ada orang yang dipanggil sahur tiga kali dan tidak nyaut,
              maka makhluk ini datang di rumah kalian.
              <img
                src={tripleT}
                className={styles.tripleT}
                width="30"
                alt="An image of tung tung tung sahur"
              />
              <img
                src={tripleT}
                className={styles.tripleT}
                width="30"
                alt="An image of tung tung tung sahur"
              />
              <img
                src={tripleT}
                className={styles.tripleT}
                width="30"
                alt="An image of tung tung tung sahur"
              />
            </p>
          </div>
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
          <form className={styles.authForm}>
            <h1>Create Account</h1>
            <div>
              <label htmlFor="name">Name</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="password">Password</label>
              <input type="text" id="password" name="password" required />
            </div>
            <button type="submit">Sign up</button>
          </form>
          <p className={styles.redirectLink}>
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export { SignUp };
