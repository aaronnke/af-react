import { combineReducers } from 'redux';

const createList = (filter) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_ARTICLES_SUCCESS':
        return filter === action.filter ?
          [...state, ...action.response.result] :
          state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_ARTICLES_REQUEST':
        return true;
      case 'FETCH_ARTICLES_SUCCESS':
      case 'FETCH_ARTICLES_FAILURE':
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
  });
};

export default createList;

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
