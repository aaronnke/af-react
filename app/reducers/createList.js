import { combineReducers } from 'redux';

const createList = (category) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_ARTICLES_SUCCESS':
        return category === action.category ?
          [...state, ...action.response.result] :
          state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.category !== category) {
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

  const page = (state = 1, action) => {
    if (action.category !== category) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_ARTICLES_SUCCESS':
        return state + 1;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    page,
  });
};

export default createList;

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
export const getPage = state => state.page;
