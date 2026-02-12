import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";

const AboutPage = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <header className="page-header">
          <h1>За нас</h1>
          <p className="page-subtitle">
            Запознайте се с екипа и мисията на {siteConfig.name}
          </p>
        </header>

        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>Нашата мисия</h2>
          <p>
            {siteConfig.name} е водещ информационен портал, посветен на
            предоставянето на актуални, точни и обективни новини от България и
            света. Нашата мисия е да информираме читателите си за най-важните
            събития, да анализираме процесите и да предоставяме платформа за
            обществен диалог.
          </p>
        </motion.section>

        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Нашите ценности</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Достоверност</h3>
              <p>Проверяваме всяка информация и цитираме надеждни източници.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3>Обективност</h3>
              <p>
                Представяме фактите без пристрастия и даваме слово на всички
                страни.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Оперативност</h3>
              <p>
                Доставяме новините бързо, без да жертваме качеството на
                проверката.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Общност</h3>
              <p>
                Вярваме в силата на информираното общество и активния граждански
                диалог.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="content-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Редакционен екип</h2>
          <p>
            Нашият екип се състои от опитни журналисти, редактори и анализатори
            с дългогодишен опит в сферата на медиите. Всеки ден работим усилено,
            за да ви предоставяме качествено съдържание по всички важни теми.
          </p>
        </motion.section>

        <motion.section
          className="content-section contact-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Свържете се с нас</h2>
          <div className="contact-details">
            {/* TODO: Replace with client contact details */}
            <div className="contact-item">
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
              <span>{siteConfig.contact.email}</span>
            </div>
            <div className="contact-item">
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
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="contact-item">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{siteConfig.contact.address}</span>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AboutPage;
