"use client";
// Styles
import "./footer.styles.scss";
// Public & Assets

// React/Next Functions
import Link from "next/link";
// Context & Actions

// Components

const Footer = () => {
  return (
    <footer id="article-footer">
      <div className="footer-container-info">
        <div className="footer-links">
          <h3>Odkazy</h3>
          <ul>
            <li>
              <Link href="/">Domovská stránka</Link>
            </li>
            <li>
              <Link href="/about">O mně</Link>
            </li>
            <li>
              <Link href="/services">Služby</Link>
            </li>
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <h3>Podívej se na mé sociální sítě</h3>
          <ul>
            <li>
              <Link href="https://facebook.com">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-container-copyright">
        <p>&copy; 2022-2024 Adam Bartůšek. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
};

export default Footer;
