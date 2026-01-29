import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { CATEGORIES } from "../types";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-top">
        <div className="container">
          <span>Сряда, 29 януари 2025 г.</span>
          <div className="header-top-links">
            <Link to="/about">За нас</Link>
            <Link to="/contact">Контакти</Link>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <Link to="/" className="logo">
            28<span>ЧАСА</span>
          </Link>

          <div className="header-actions">
            <form className="search-box" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Търси..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <ul>
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <NavLink
                to={`/category/${category.slug}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {category.nameBg}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
