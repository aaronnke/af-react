import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../css/ArticleCard.css';

const ArticleCard = ({ image, category, author, date, readingTime, title, excerpt }) => {
  const timeAgo = moment(date).fromNow();
  return (
    <div className="ArticleCard">
      <div style={{ backgroundImage: `url(${image})` }} className="ArticleCard__image" />
      <div className="ArticleCard__container">
        <h3 className="ArticleCard__title">{title}</h3>
        <div className="ArticleCard__excerpt">{`${excerpt}..`}</div>
        <div className="ArticleCard__info">
          <h6 className="ArticleCard__info__category ArticleCard__info__item">{category.name}</h6>
          <h6 className="ArticleCard__info__author ArticleCard__info__item">{author.name}</h6>
          <span className="ArticleCard__info__date ArticleCard__info__item">{timeAgo}</span>
          <img className="ArticleCard__info__clock" src="https://stage.asia.finance/wp-content/themes/Newsmag-child/gec/frontend/images/clock-grey.png" alt="clock" />
          <span className="ArticleCard__info__read ArticleCard__info__item">
            {readingTime} min read
          </span>
        </div>
      </div>
    </div>
  );
};


ArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default ArticleCard;
