import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

export const fetchArticle = id => dispatch => (
  api.fetchArticle(id).then(
    (response) => {
      dispatch({
        type: 'FETCH_ARTICLE_SUCCESS',
        response: normalize(response, schema.article),
      });
    },
    (error) => {
      dispatch({
        type: 'FETCH_ARTICLE_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    },
  )
);

export const fetchArticles = (page, category) => (dispatch, getState) => {
  if (getIsFetching(getState(), category)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_ARTICLES_REQUEST',
    category,
  });

  return api.fetchArticles(page, category).then(
    (response) => {
      dispatch({
        type: 'FETCH_ARTICLES_SUCCESS',
        category,
        response: normalize(response, schema.arrayOfArticles),
      });
    },
    (error) => {
      dispatch({
        type: 'FETCH_ARTICLES_FAILURE',
        category,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};

export const fetchPopularArticles = () => dispatch => (
  api.fetchArticles(1, 'all').then(
    (response) => {
      dispatch({
        type: 'FETCH_ARTICLES_SUCCESS',
        category: 'popular',
        response: normalize(response, schema.arrayOfArticles),
      });
    },
    (error) => {
      dispatch({
        type: 'FETCH_ARTICLES_FAILURE',
        category: 'popular',
        message: error.message || 'Something went wrong.',
      });
    },
  )
);
