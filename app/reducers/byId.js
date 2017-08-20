const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLE_SUCCESS':
    case 'FETCH_ARTICLES_SUCCESS':
      return {
        ...state,
        ...action.response.entities.articles,
      };
    default:
      return state;
  }
};

export default byId;

export const getArticle = (state, id) => state[id];
