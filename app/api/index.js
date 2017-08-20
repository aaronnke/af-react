/* global DOMParser */

import axios from 'axios';
import _ from 'lodash';

const rootUrl = 'http://asia.finance.local/wp-json/wp/v2';

const sanitizeArticle = (article) => {
  const articleKeys = ['id', 'image', 'readingTime', 'title', 'author', 'date', 'category', 'excerpt', 'content', 'tags'];
  const sanitizedArticle = {
    ...article,
    title: new DOMParser().parseFromString(article.title.rendered, 'text/html').documentElement.textContent,
    excerpt: article.excerpt.rendered.replace(/<p>|<\/p>|\n/g, ''),
    content: article.content.rendered,
    image: article.af_featured_image,
    author: article.af_author,
    category: article.af_category,
    readingTime: _.ceil(article.content.rendered.replace(/(<([^>]+)>)/ig, '').split(' ').length / 200),
  };

  return _.pick(sanitizedArticle, articleKeys);
};

export const fetchArticle = id =>
  axios.get(`${rootUrl}/posts/${id}`)
    .then(article =>
      sanitizeArticle(article.data),
    );

export const fetchArticles = (page, filter) =>
  axios.get(`${rootUrl}/posts?page=${page}`)
    .then(articles =>
      articles.data.map(article => (sanitizeArticle(article))),
    );
