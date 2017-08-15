import React from 'react';
import PropTypes from 'prop-types';
import '../css/ArticleCard.css';

const ArticleCard = ({ image, category, readingTime, title, excerpt }) =>
  (
    <div className="ArticleCard">
      <div style={{ backgroundImage: `url(${image})` }} className="ArticleCard__image" />
      <div className="ArticleCard__container">
        <div className="ArticleCard__info">
          <h5 className="ArticleCard__info__category">{category}</h5>
          <img className="ArticleCard__info__clock" src="https://stage.asia.finance/wp-content/themes/Newsmag-child/gec/frontend/images/clock-grey.png" alt="clock" />
          <span className="ArticleCard__info__time">{readingTime} min read</span>
        </div>
        <h3 className="ArticleCard__title">{title}</h3>
        <div className="ArticleCard__excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
    </div>
  );

ArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ArticleCard;
