import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';

function ArticleList({ articles }) {
  if (!articles.length) {
    return (
      <div></div>
    );
  }
  return (
    <div>
      {articles.map(article =>
        (<ArticleCard
          key={article.id}
          {...article}
        />),
      )}
    </div>
  );
}

// ArticleList.propTypes = {
//   articles: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.integer.isRequired,
//       image: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       excerpt: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
// };

export default ArticleList;
