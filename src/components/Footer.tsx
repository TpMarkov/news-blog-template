import { Link } from "react-router-dom";
import { CATEGORIES } from "../types";
import { siteConfig } from "../config/siteConfig";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>{siteConfig.name}</h3>
            <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.6" }}>
              {siteConfig.tagline}. Политика, спорт, култура, бизнес и още.
            </p>
            {/* TODO: Replace with client contact details */}
            <div className="footer-contact">
              <p>
                <strong>Имейл:</strong>{" "}
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <strong>Телефон:</strong>{" "}
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="footer-col">
            <h3>Категории</h3>
            <ul>
              {CATEGORIES.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link to={`/category/${category.slug}`}>
                    {category.nameBg}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Информация</h3>
            <ul>
              <li>
                <Link to="/about">За нас</Link>
              </li>
              <li>
                <Link to="/contact">Контакти</Link>
              </li>
              <li>
                <Link to="/privacy">Поверителност</Link>
              </li>
              <li>
                <Link to="/terms">Условия за ползване</Link>
              </li>
              <li>
                <Link to="/advertising">Реклама</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Следвайте ни</h3>
            <ul className="social-links">
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon
                      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                      fill="#fff"
                    />
                  </svg>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Всички права
            запазени.
          </p>
          <p className="footer-legal">
            {/* TODO: Replace with client legal information */}
            {siteConfig.legal.companyName} | ЕИК:{" "}
            {siteConfig.legal.registrationNumber}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
