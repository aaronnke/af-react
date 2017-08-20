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

export const fetchArticles = (page, category) => {
  let url;
  if (category === 'all') {
    url = `${rootUrl}/posts?page=${page}`;
  } else {
    let categoryId;
    switch (category) {
      case 'wealthManagement':
        categoryId = 12;
        break;
      case 'privateEquity':
        categoryId = 58;
        break;
      case 'entrepreneur':
        categoryId = 94;
        break;
      case 'personalFinance':
        categoryId = 22;
        break;
      default:
        categoryId = 43;
        break;
    }
    url = `${rootUrl}/posts?categories=${categoryId}&page=${page}`;
  }
  return axios.get(url)
    .then(articles =>
      articles.data.map(article => (sanitizeArticle(article))),
    );
};
