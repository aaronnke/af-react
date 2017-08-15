import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromCreateList from './createList';
import categories, * as fromCategories from './categories';

const listByFilter = combineReducers({
  all: createList('all'),
});

const articles = combineReducers({
  categories,
  byId,
  listByFilter,
});

export default articles;

export const getLatestArticles = (state, filter) => {
  const ids = fromCreateList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getArticle(state.byId, id));
};

export const getCategoryName = (state, id) =>
  fromCategories.getCategoryName(state.categories, id);
