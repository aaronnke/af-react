const categories = (state = {}, action) => {
  if (action.type === 'FETCH_CATEGORIES_SUCCESS') {
    return {
      ...state,
      ...action.response.entities.categories,
    };
  }
  return state;
};

export default categories;

export const getCategoryName = (state, id) => state[id].name;
