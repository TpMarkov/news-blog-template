import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import NewsCard from "../components/NewsCard";
import {
  Article,
  CATEGORIES,
  fetchBulgarianNews,
  fetchWorldNews,
} from "../types";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(CATEGORIES[0]);

  useEffect(() => {
    const foundCategory = CATEGORIES.find((c) => c.slug === slug);
    if (foundCategory) {
      setCategory(foundCategory);
    }
  }, [slug]);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let news: Article[] = [];

        if (
          category.id === "politics" ||
          category.id === "business" ||
          category.id === "culture"
        ) {
          news = await fetchBulgarianNews(category.id);
        } else {
          news = await fetchWorldNews(category.id);
        }

        setArticles(news);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchNews();
    }
  }, [category]);

  const categoryDescriptions: Record<string, string> = {
    politics:
      "Политически новини от България и света. Актуална информация за парламента, правителството и всички политически събития.",
    world:
      "Новини от целия свят. Международни събития, външна политика и глобални процеси.",
    sports:
      "Спортен всекидневник. Футбол, тенис, волейбал, баскетбол и всички спортни събития.",
    culture:
      "Култура и изкуство. Театър, кино, музика, литература и културни събития в България и света.",
    business:
      "Бизнес новини. Финанси, икономика, инвестиции и пазарни тенденции.",
    technology:
      "Технологии и иновации. IT новини, наука, електроника и бъдещето на технологиите.",
    entertainment: "Забавление и шоубизнес. Кино, музика, телевизия и звезди.",
    health:
      "Здраве и медицина. Полезна информация за вашето здраве, лечение и превенция.",
    science:
      "Наука и открития. Научни новини, изследвания и технологични пробиви.",
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <motion.div
      className="category-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <header className="category-header">
          <h1>{category.nameBg}</h1>
          <p className="category-description">
            {categoryDescriptions[category.id]}
          </p>
        </header>

        <div className="news-grid">
          {articles.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {articles.length === 0 && (
          <div className="error">
            <h2>Няма намерени новини</h2>
            <p>Съжаляваме, но в момента няма новини в тази категория.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CategoryPage;
