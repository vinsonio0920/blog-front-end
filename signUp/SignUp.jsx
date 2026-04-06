import { Link } from "react-router";
import styles from "./SignUp.module.css";
import { logoSvg } from "../src/assets";

const SignUp = () => {
  return (
    <>
      <section className="logoSection">
        <img
          src={logoSvg}
          width="30"
          alt="Logo SVG"
          className={styles.logoSvg}
        />
        <h1>
          Read [placeholder] with <span>Vinson Blogs</span>
        </h1>
        <p>
          "Tung, tung, tung, tung, tung, tung, tung, tung, tung, sahur." Anomali
          mengerikan yang hanya keluar pada sahur, konon katanya kalau ada orang
          yang dipanggil sahur tiga kali dan tidak nyaut, maka makhluk ini
          datang di rumah kalian.
        </p>
      </section>
      <section className="formSection">
        <form>
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
        <p>
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </section>
    </>
  );
};

export { SignUp };
