import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
});

const articles = combineReducers({
  byId,
  listByFilter,
});

export default articles;

export const getLatestArticles = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getArticle(state.byId, id));
};

export const getText = state => state;
