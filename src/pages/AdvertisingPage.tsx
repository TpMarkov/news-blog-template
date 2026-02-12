import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

const AdvertisingPage = () => {
  return (
    <motion.div
      className="advertising-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <header className="page-header">
          <h1>Реклама</h1>
          <p className="page-subtitle">
            Достигнете до хиляди читатели чрез рекламни позиции в{" "}
            {siteConfig.name}
          </p>
        </header>

        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>Защо да рекламирате при нас?</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Ежемесечни посещения</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150K+</div>
              <div className="stat-label">Уникални читатели</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Години на пазара</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">18-55</div>
              <div className="stat-label">Възрастова група</div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Рекламни формати</h2>
          <div className="ad-formats-grid">
            <div className="ad-format-card">
              <div className="ad-format-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </div>
              <h3>Банерна реклама</h3>
              <p>
                Класически банери в различни размери - 728x90, 300x250, 160x600
                и други.
              </p>
            </div>
            <div className="ad-format-card">
              <div className="ad-format-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3>Нативна реклама</h3>
              <p>
                Рекламни статии и съдържание, което се интегрира естествено с
                редакционното.
              </p>
            </div>
            <div className="ad-format-card">
              <div className="ad-format-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Спонсорирани статии</h3>
              <p>
                Професионално написани статии, които представят вашия бранд или
                продукт.
              </p>
            </div>
            <div className="ad-format-card">
              <div className="ad-format-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Видео реклама</h3>
              <p>Видео спотове преди, по време или след съдържанието.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Предимства</h2>
          <ul className="benefits-list">
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Гъвкави цени и пакети за всякакъв бюджет</span>
            </li>
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Детайлни отчети за ефективността на кампанията</span>
            </li>
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Таргетиране по демография, интереси и локация</span>
            </li>
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Професионална поддръжка и консултации</span>
            </li>
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Бързо стартиране на кампанията</span>
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="content-section contact-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Свържете се с нас</h2>
          <p>
            Готови сте да започнете рекламна кампания? Свържете се с нашия
            рекламен отдел за оферта и консултация.
          </p>
          {/* TODO: Replace with client contact details */}
          <div className="contact-options">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="contact-btn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="contact-btn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {siteConfig.contact.phone}
            </a>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AdvertisingPage;
