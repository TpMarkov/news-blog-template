import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NewsCard from '../components/NewsCard';
import { Article, searchNews } from '../types';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (query) {
      const performSearch = async () => {
        setLoading(true);
        try {
          const results = await searchNews(query);
          setArticles(results);
        } catch (error) {
          console.error('Error searching news:', error);
        } finally {
          setLoading(false);
          setHasSearched(true);
        }
      };

      performSearch();
    }
  }, [query]);

  return (
    <motion.div
      className="search-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <header className="search-header">
          <h1>Резултати от търсене: "{query}"</h1>
          {hasSearched && (
            <p>Намерени {articles.length} резултата</p>
          )}
        </header>

        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div className="search-results">
            {articles.length > 0 ? (
              <div className="news-grid">
                {articles.map((article, index) => (
                  <NewsCard key={article.id} article={article} index={index} />
                ))}
              </div>
            ) : (
              hasSearched && (
                <div className="error">
                  <h2>Няма намерени резултати</h2>
                  <p>Опитайте с различни ключови думи.</p>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SearchPage;
