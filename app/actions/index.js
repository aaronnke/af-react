import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';

export const updateText = text => dispatch =>
  dispatch({
    type: 'UPDATE_TEXT',
    text,
  });

export const fetchLatestArticles = () => dispatch => (
  api.fetchLatestArticles().then(
    (response) => {
      dispatch({
        type: 'FETCH_ARTICLES_SUCCESS',
        filter: 'all',
        response: normalize(response, schema.arrayOfArticles),
      });
    },
    (error) => {
      dispatch({
        type: 'FETCH_ARTICLES_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    },
  )
);
