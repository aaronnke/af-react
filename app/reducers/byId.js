const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.articles,
    };
  }
  return state;
};

export default byId;

export const getArticle = (state, id) => state[id];
