import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Article } from "../types";

interface NewsCardProps {
  article: Article;
  index?: number;
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

const NewsCard = ({ article, index = 0 }: NewsCardProps) => {
  return (
    <motion.article
      className="news-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/article/${article.id}`}>
        {article.urlToImage ? (
          <img src={article.urlToImage} alt={article.title} loading="lazy" />
        ) : (
          <div className="news-card-placeholder">
            <svg
              width="48"
              height="48"
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

      <div className="news-card-content">
        {article.category && (
          <span className="news-card-category">{article.category}</span>
        )}
        <Link to={`/article/${article.id}`}>
          <h3>{article.title}</h3>
        </Link>
        <p>{article.description}</p>
      </div>

      <div className="news-card-meta">
        <span>{article.source.name}</span>
        <span>{formatDate(article.publishedAt)}</span>
      </div>
    </motion.article>
  );
};

export default NewsCard;
