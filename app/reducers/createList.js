import { combineReducers } from 'redux';

const createList = (filter) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_ARTICLES_SUCCESS':
        return filter === action.filter ?
          action.response.result :
          state;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
  });
};

export default createList;

export const getIds = state => state.ids;
