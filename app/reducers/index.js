import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromCreateList from './createList';

const listByCategory = combineReducers({
  all: createList('all'),
  popular: createList('popular'),
  wealthManagement: createList('wealthManagement'),
  privateEquity: createList('privateEquity'),
  entrepreneur: createList('entrepreneur'),
  personalFinance: createList('personalFinance'),
});

const articles = combineReducers({
  byId,
  listByCategory,
});

export default articles;

export const getVisibleArticles = (state, category) => {
  const ids = fromCreateList.getIds(state.listByCategory[category]);
  return ids.map(id => fromById.getArticle(state.byId, id));
};

export const getArticle = (state, id) =>
  fromById.getArticle(state.byId, id);

export const getIsFetching = (state, category) =>
  fromCreateList.getIsFetching(state.listByCategory[category]);

export const getPage = (state, category) =>
  fromCreateList.getPage(state.listByCategory[category]);
