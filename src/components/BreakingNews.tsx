import { motion } from "framer-motion";

const breakingHeadlines = [
  "Парламентът прие нов закон за образованието",
  "Българският туризъм с рекордни резултати през лятото",
  "Григор Димитров спечели турнир в САЩ",
  "София получи награда за зелен транспорт",
];

const BreakingNews = () => {
  return (
    <motion.div
      className="breaking-news"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <span className="breaking-news-label">ВАЖНО</span>
        <div className="breaking-news-content">
          {breakingHeadlines.map((headline, index) => (
            <span key={index} style={{ marginRight: "50px" }}>
              {headline}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BreakingNews;
