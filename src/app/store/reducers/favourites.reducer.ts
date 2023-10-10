import { createReducer, on } from '@ngrx/store';
import { toggle } from '../actions/favourites.actions';
import { default as animalData } from '../../../animals.json';
import { Animal } from 'types';

export interface AnimalsAppState {
  animals: Animal[];
  favourites: string[];
}

export const initialState: AnimalsAppState = {
  animals: animalData,
  favourites: [],
};

export const favouritesReducer = createReducer(
  initialState,
  on(toggle, (state, { animalName }) => {
    const favourites = [...state.favourites];
    const animalIndex = favourites.indexOf(animalName);

    if (animalIndex !== -1) {
      favourites.splice(animalIndex, 1);
    } else {
      favourites.push(animalName);
    }

    return {
      ...state,
      favourites,
    };
  })
);
