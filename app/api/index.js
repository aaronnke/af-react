/* global DOMParser */

import axios from 'axios';
import _ from 'lodash';

const rootUrl = 'http://asia.finance.local/wp-json/wp/v2';

export const fetchArticle = id =>
  axios.get(`${rootUrl}/posts/${id}`);

export const fetchLatestArticles = () =>
  axios.get(`${rootUrl}/posts`)
    .then(articles =>
      articles.data,
    );

export const fetchCategories = () =>
  axios.get(`${rootUrl}/categories?per_page=100`)
    .then(categories =>
      categories.data,
    );

const sanitizeArticles = (articles, articleKeys) => (
  articles.map(article => (
    {
      ...article,
      title: new DOMParser().parseFromString(article.title.rendered, 'text/html').documentElement.textContent,
      excerpt: article.excerpt.rendered,
      content: article.content.rendered,
      image: article.af_featured_image,
      readingTime: _.ceil(article.content.rendered.replace(/(<([^>]+)>)/ig, '').split(' ').length / 200),
    }
  )).map(article =>
    _.pick(article, articleKeys),
  )
);

export const fetchInitialData = () =>
  axios.all([
    fetchCategories(),
    fetchLatestArticles(),
  ]).then((data) => {
    const categories = data[0];
    const articles = data[1];
    const categoryKeys = ['id', 'name', 'link'];
    const articleKeys = ['id', 'image', 'readingTime', 'title', 'author', 'categories', 'excerpt', 'content', 'tags'];
    return {
      categories: categories.map(category => _.pick(category, categoryKeys)),
      articles: sanitizeArticles(articles, articleKeys),
    };
  });
