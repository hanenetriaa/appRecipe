import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addRecipes} from '../../redux/actions';

const URL_API = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'cf405be1e420411a9511589193b8ed74';
const MAX_PER_PAGE = 30;

export const useFetchRecipes = () => {
  const dispatch = useDispatch();
  const getAllRecipes = async () => {
    try {
      const response = await axios.get(URL_API, {
        params: {
          apiKey: API_KEY,
          number: MAX_PER_PAGE,
        },
      });
      dispatch(addRecipes(response.data.results));
    } catch (e) {
      console.error('error in get all recipes', e);
    }
  };

  return {
    getAllRecipes,
  };
};
