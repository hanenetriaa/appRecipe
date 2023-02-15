import {ADD_RECIPES} from '../actions/actionTypes';

const initialState = {
  list: [],
  selectedRecipe: {},
};

export const recipes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
      return {
        selectedRecipe: state.selectedRecipe,
        list: [...state.list, ...action.payload.data],
      };
    default:
      return state;
  }
};
