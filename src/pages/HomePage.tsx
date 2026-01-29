import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import NewsCard from "../components/NewsCard";
import BreakingNews from "../components/BreakingNews";
import { Article, fetchBulgarianNews, fetchWorldNews } from "../types";

const HomePage = () => {
  const [bulgarianNews, setBulgarianNews] = useState<Article[]>([]);
  const [worldNews, setWorldNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const [bgNews, wNews] = await Promise.all([
          fetchBulgarianNews(),
          fetchWorldNews(),
        ]);
        setBulgarianNews(bgNews);
        setWorldNews(wNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const mainArticle = bulgarianNews[0] || worldNews[0];
  const sidebarArticles = [...bulgarianNews.slice(1), ...worldNews.slice(0, 2)];
  const allNews = [...bulgarianNews, ...worldNews];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BreakingNews />

      {mainArticle && (
        <HeroSection
          mainArticle={mainArticle}
          sidebarArticles={sidebarArticles}
        />
      )}

      <section className="container">
        <div className="section-header">
          <h2>Последни новини от България</h2>
          <a href="/category/politika">Виж още →</a>
        </div>

        <div className="news-grid">
          {bulgarianNews.slice(1, 5).map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-header">
          <h2>Свят</h2>
          <a href="/category/svyat">Виж още →</a>
        </div>

        <div className="news-grid">
          {worldNews.slice(0, 4).map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

      <section className="container">
        <div className="two-column">
          <div className="main-content">
            <div className="section-header">
              <h2>Спорт</h2>
              <a href="/category/sport">Виж още →</a>
            </div>
            <div className="news-grid">
              {allNews
                .filter((a) => a.category === "sports")
                .slice(0, 4)
                .map((article, index) => (
                  <NewsCard key={article.id} article={article} index={index} />
                ))}
            </div>
          </div>

          <aside className="sidebar-content">
            <h3 className="sidebar-title">Най-четени</h3>
            <div className="sidebar-article-list">
              {allNews.slice(0, 5).map((article, index) => (
                <motion.div
                  key={article.id}
                  className="sidebar-list-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#c00",
                    }}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h4>
                      <a href={`/article/${article.id}`}>{article.title}</a>
                    </h4>
                    <span>{article.source.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="section-header">
          <h2>Култура</h2>
          <a href="/category/kultura">Виж още →</a>
        </div>
        <div className="news-grid">
          {allNews
            .filter((a) => a.category === "culture")
            .slice(0, 4)
            .map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
        </div>
      </section>

      <section className="container">
        <div className="section-header">
          <h2>Технологии</h2>
          <a href="/category/tehnologii">Виж още →</a>
        </div>
        <div className="news-grid">
          {allNews
            .filter((a) => a.category === "technology")
            .slice(0, 4)
            .map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
