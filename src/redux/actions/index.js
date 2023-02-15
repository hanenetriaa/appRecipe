import {ADD_RECIPES} from './actionTypes';

export const addRecipes = data => ({
  type: ADD_RECIPES,
  payload: {data},
});
