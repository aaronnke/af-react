import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

const Sidebar = ({ articles }) => (
  <div className="Sidebar">
    <div className="TopArticles">
      <h3 className="TopArticles__title">
        Top Articles
      </h3>
      {articles.map(article => (
        <Link
          key={article.id}
          className="TopArticles__item"
          to={`/${article.category.name.toLowerCase().replace(' ', '-')}/${article.id}`}
        >
          {article.title}
        </Link>
      ))}
    </div>
  </div>
);

Sidebar.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      readingTime: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Sidebar;
