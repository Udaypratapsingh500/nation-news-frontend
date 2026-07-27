import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/nation-news-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Nation News" />
        </NavLink>

        {/* Navigation */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>

          <li>
            <NavLink
              to="/category/politics"
              onClick={closeMenu}
            >
              Politics
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/business"
              onClick={closeMenu}
            >
              Business
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/sports"
              onClick={closeMenu}
            >
              Sports
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/technology"
              onClick={closeMenu}
            >
              Technology
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/entertainment"
              onClick={closeMenu}
            >
              Entertainment
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Right Side */}

        <div className="navbar-right">

          <NavLink
            to="/search"
            className="search-btn"
          >
            <FaSearch />
          </NavLink>

          <NavLink
            to="/live"
            className="live-btn"
          >
            ● LIVE
          </NavLink>

          <button
            className="mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;