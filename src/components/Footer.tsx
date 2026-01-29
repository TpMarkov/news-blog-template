import { Link } from "react-router-dom";
import { CATEGORIES } from "../types";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>24 ЧАСА</h3>
            <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.6" }}>
              Най-новите новини от България и света. Политика, спорт, култура,
              бизнес и още.
            </p>
          </div>

          <div className="footer-col">
            <h3>Категории</h3>
            <ul>
              {CATEGORIES.map((category) => (
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
            <ul>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} 24 ЧАСА. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
