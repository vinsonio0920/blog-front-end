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
                <Link to="">
                  <img
                    src={githubSvg}
                    width="50"
                    alt="My GitHub account link"
                  />
                </Link>
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
                <Link to="">
                  <img
                    src={stackoverflowSvg}
                    width="50"
                    alt="My StackOverflow account link"
                  />
                </Link>
              </li>
              <li>
                <Link to="">
                  <img
                    src={robloxSvg}
                    width="50"
                    alt="Link to my roblox games"
                    className="roblox-svg"
                  />
                </Link>
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
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/roadmap">Roadmap</Link>
              </li>
              <li>
                <Link to="/current">Current Projects</Link>
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
