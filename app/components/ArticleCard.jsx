import React from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({ title, excerpt }) =>
  (
    <div>
      <div>
        <h3>{title.rendered}</h3>
        <p>{excerpt.rendered}</p>
      </div>
    </div>
  );

// ArticleCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   excerpt: PropTypes.string.isRequired,
// };

export default ArticleCard;
