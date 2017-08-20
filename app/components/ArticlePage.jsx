import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../css/ArticlePage.css';

const ArticlePage = ({ category, title, author, date, image, content }) => {
  const publishDate = moment(date).format('MMMM Do YYYY, h:mma');
  return (
    <div className="Article">
      <h6 className="Article__category">{category.name}</h6>
      <h1 className="Article__title">{title}</h1>
      <div className="Article__info">
        <span className="Article__info__author Article__info__item">{author.name}</span>
        <span className="Article__info__date Article__info__item">{publishDate}</span>
      </div>
      <img className="Article__image" src={image} alt="featured" />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

ArticlePage.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ArticlePage;
