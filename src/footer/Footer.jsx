import { Link } from "react-router";
import "./Footer.css";
import {
  blenderSvg,
  githubSvg,
  linkedinSvg,
  robloxSvg,
  stackoverflowSvg,
} from "../assets";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className="footer-ul">
          <li className="social-li">
            <p className="social-para">See me around!</p>
            <ul className="social-links">
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
            <ul className="other-links">
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
      <p className="copyright-statement">Copyright ©2026; Vinson Blogs</p>
    </footer>
  );
};

export { Footer };
