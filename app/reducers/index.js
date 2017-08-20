import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromCreateList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
});

const articles = combineReducers({
  byId,
  listByFilter,
});

export default articles;

export const getVisibleArticles = (state, filter) => {
  const ids = fromCreateList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getArticle(state.byId, id));
};

export const getArticle = (state, id) =>
  fromById.getArticle(state.byId, id);

export const getIsFetching = (state, filter) =>
  fromCreateList.getIsFetching(state.listByFilter[filter]);
