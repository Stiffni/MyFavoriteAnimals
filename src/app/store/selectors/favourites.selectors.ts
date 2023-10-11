import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AnimalsAppState } from '../reducers/favourites.reducer';
import { Animal } from 'types';

const animalPlaceholder: Animal = {
  Name: '',
  Food: {
    Likes: [],
    Dislikes: [],
  },
  Image: '',
};

const selectAnimalsFeature =
  createFeatureSelector<AnimalsAppState>('animalsApp');

export const selectFavourites = createSelector(
  selectAnimalsFeature,
  (state: AnimalsAppState) => {
    return state.favourites;
  }
);

export const selectAnimals = createSelector(
  selectAnimalsFeature,
  (state: AnimalsAppState) => {
    return state.animals;
  }
);

export const selectedAnimal = createSelector(
  selectAnimalsFeature,
  (state: AnimalsAppState) => {
    return state.selectedAnimal;
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

export const animalDetails = createSelector(
  selectAnimals,
  selectedAnimal,
  (animals, selection) => {
    const animal = animals.find((animal) => selection === animal.Name);
    return animal || animalPlaceholder;
  }
);
