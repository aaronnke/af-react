import axios from 'axios';

export const fetchArticle = id =>
  axios.get(`https://stage.asia.finance/wp-json/wp/v2/posts/${id}`);

export const fetchLatestArticles = () =>
  axios.get('https://stage.asia.finance/wp-json/wp/v2/posts')
    .then(articles =>
      articles.data,
    );
