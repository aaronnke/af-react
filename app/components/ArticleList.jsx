import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import '../css/ArticleList.css';

const ArticleList = ({ articles }) => (
  <div className="ArticleList">
    {articles.map(article => (
      <Link
        key={article.id}
        to={`/${article.category.name.toLowerCase().replace(' ', '-')}/${article.id}`}
      >
        <ArticleCard
          {...article}
        />
      </Link>
    ))}
  </div>
);

ArticleList.propTypes = {
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

export default ArticleList;
