import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  blenderSvg,
  githubSvg,
  linkedinSvg,
  robloxSvg,
  stackoverflowSvg,
} from "../assets";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.footerUl}>
          <li>
            <p className={styles.socialPara}>See me around!</p>
            <ul className={styles.socialLinks}>
              <li>
                <a
                  href="https://github.com/vinsonio0920"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={githubSvg}
                    width="50"
                    alt="My GitHub account link"
                  />
                </a>
              </li>
              <li>
                <Link to="">
                  <img
                    src={linkedinSvg}
                    width="50"
                    alt="My LinkedIn account link"
                  />
                </Link>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/31326408/vinson-he"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={stackoverflowSvg}
                    width="50"
                    alt="My StackOverflow account link"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.roblox.com/users/9169918282/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={robloxSvg}
                    width="50"
                    alt="Link to my roblox games"
                    className="roblox-svg"
                  />
                </a>
              </li>
              <li>
                <Link to="">
                  <img
                    src={blenderSvg}
                    width="50"
                    alt="Link to my blender creations"
                  />
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className={styles.otherLinks}>
              <li>
                <Link to="/attributions">Attributions</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/posts?category=journal">Journals</Link>
              </li>
              <li>
                <Link to="/posts">Articles</Link>
              </li>
              <li>
                <Link to="posts?userId=3&authorName=Vinsonius">
                  Blogs by Vinson
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <p className={styles.copyrightStatement}>Copyright ©2026; Vinson Blogs</p>
    </footer>
  );
};

export { Footer };
