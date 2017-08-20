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

export const fetchArticles = (page, filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_ARTICLES_REQUEST',
    filter,
  });

  return api.fetchArticles(page, filter).then(
    (response) => {
      dispatch({
        type: 'FETCH_ARTICLES_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfArticles),
      });
    },
    (error) => {
      dispatch({
        type: 'FETCH_ARTICLES_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};
