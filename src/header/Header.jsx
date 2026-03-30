import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";
import { logoSvg } from "../assets";

const Header = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  function handleDropdownClick() {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  return (
    <header className="homepage-header">
      <nav>
        <ul>
          <li>
            <Link to="/" className="logo-link">
              <img
                src={logoSvg}
                width="30"
                alt="Logo SVG"
                className="logo-svg"
              />
              <span className="logo-text">Vinson Blogs</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="burger-menu"
              aria-label="Open dropdown menu"
              onClick={handleDropdownClick}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <ul className={"right-header" + (dropdownIsOpen ? " open" : "")}>
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
        </ul>
      </nav>
    </header>
  );
};

export { Header };
