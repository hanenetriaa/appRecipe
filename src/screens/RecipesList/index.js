import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useFetchRecipes} from '../../api/recipes/useFetchRecipes.js';
import {getRecipesList} from '../../redux/selectors.js';
import RecipeTile from './RecipeTile.js';

export default function RecipesList() {
  const {getAllRecipes} = useFetchRecipes();
  const allRecipes = useSelector(getRecipesList);
  console.log('all recipices', allRecipes);
  useEffect(() => {
    getAllRecipes();
  }, []);

  const renderItem = ({item}) => {
    return <RecipeTile item={item} />;
  };
  return (
    <FlatList
      data={allRecipes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
}
