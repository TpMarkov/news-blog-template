import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <motion.div
      className="not-found-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="not-found-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="error-code">404</div>
          <h1>Страницата не е намерена</h1>
          <p>
            Съжаляваме, но страницата, която търсите, не съществува или е била
            преместена.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="primary-btn">
              Към началната страница
            </Link>
            <Link to="/search" className="secondary-btn">
              Търсене
            </Link>
          </div>
          <div className="suggested-links">
            <h3>Може би търсите:</h3>
            <ul>
              <li>
                <Link to="/category/politika">Политика</Link>
              </li>
              <li>
                <Link to="/category/sport">Спорт</Link>
              </li>
              <li>
                <Link to="/category/tehnologii">Технологии</Link>
              </li>
              <li>
                <Link to="/contact">Контакти</Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
