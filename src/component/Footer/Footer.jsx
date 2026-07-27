import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>Nation News</h2>

          <p>
            Nation News delivers the latest updates from India and around
            the world. Stay informed with breaking news, politics,
            business, technology, sports and entertainment.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Politics</li>
            <li>Sports</li>
            <li>Business</li>
            <li>Technology</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Categories</h3>

          <ul>
            <li>India</li>
            <li>World</li>
            <li>Education</li>
            <li>Health</li>
            <li>Entertainment</li>
          </ul>
        </div>

        <div className="footer-newsletter">

          <h3>Newsletter</h3>

          <p>
            Subscribe to receive the latest breaking news directly in your inbox.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>Subscribe</button>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Nation News. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;