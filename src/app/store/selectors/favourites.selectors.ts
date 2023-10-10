import {
  createSelector,
  createFeatureSelector,
  props,
  select,
} from '@ngrx/store';
import { AnimalsAppState } from '../reducers/favourites.reducer';
import { pipe } from 'rxjs';

const selectAnimalsFeature =
  createFeatureSelector<AnimalsAppState>('animalsApp');

export const selectFavourites = createSelector(
  selectAnimalsFeature,
  (state: AnimalsAppState) => {
    console.log(state);
    return state.favourites;
  }
);

export const selectAnimals = createSelector(
  selectAnimalsFeature,
  (state: AnimalsAppState) => {
    console.log(state);
    return state.animals;
  }
);

export const selectAnimalFavouriteStatus = (animalName?: string) =>
  createSelector(
    selectFavourites,
    (favourites: AnimalsAppState['favourites']) => {
      if (!animalName) {
        return false;
      }
      return favourites.includes(animalName);
    }
  );

export const allFavouriteAnimals = createSelector(
  selectAnimals,
  selectFavourites,
  (animals, favourites) => {
    return animals.filter((animal) => favourites.includes(animal.Name));
  }
);
