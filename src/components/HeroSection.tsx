import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Article } from "../types";

interface HeroSectionProps {
  mainArticle: Article;
  sidebarArticles: Article[];
}

const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "току що";
    if (diffMins < 60) return `преди ${diffMins} мин`;
    if (diffHours < 24) return `преди ${diffHours} ч`;
    if (diffDays < 7) return `преди ${diffDays} дни`;

    return date.toLocaleDateString("bg-BG", {
      day: "numeric",
      month: "short",
    });
  } catch {
    return "преди малко";
  }
};

const HeroSection = ({ mainArticle, sidebarArticles }: HeroSectionProps) => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <motion.div
          className="hero-main"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={`/article/${mainArticle.id}`}>
            {mainArticle.urlToImage ? (
              <img src={mainArticle.urlToImage} alt={mainArticle.title} />
            ) : (
              <div className="hero-placeholder">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            )}
            <div className="hero-main-content">
              {mainArticle.category && (
                <span className="news-card-category">
                  {mainArticle.category}
                </span>
              )}
              <h1>{mainArticle.title}</h1>
              <p>{mainArticle.description}</p>
            </div>
          </Link>
        </motion.div>

        <div className="hero-sidebar">
          {sidebarArticles.slice(0, 3).map((article, index) => (
            <motion.div
              key={article.id}
              className="sidebar-article"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={`/article/${article.id}`}>
                {article.urlToImage ? (
                  <img src={article.urlToImage} alt={article.title} />
                ) : (
                  <div className="sidebar-placeholder">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                )}
              </Link>
              <div className="sidebar-article-content">
                <Link to={`/article/${article.id}`}>
                  <h3>{article.title}</h3>
                </Link>
                <span>{formatDate(article.publishedAt)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
