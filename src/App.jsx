import { Link, Outlet } from "react-router";
import {
  blenderSvg,
  githubSvg,
  linkedinSvg,
  logoSvg,
  robloxSvg,
  stackoverflowSvg,
} from "./assets";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <li>
            <Link to="/">
              <img src={logoSvg} width="50" alt="Logo SVG" />
              Vinson Blogs
            </Link>
          </li>
          <li>
            <ul className="right-header">
              <li>
                <Link to="/Journal">Journal</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="About">About</Link>
              </li>
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
            </ul>
          </li>
        </nav>
      </header>
      <Outlet />
      <footer>
        <nav>
          <li>
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
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/roadmap">Roadmap</Link>
                <Link to="/current">Current Projects</Link>
              </li>
            </ul>
          </li>
        </nav>
        <p>Copyright ©2026; Vinson Blogs</p>
      </footer>
    </>
  );
}

export { App };
