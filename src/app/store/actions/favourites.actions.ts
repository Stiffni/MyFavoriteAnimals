import { createAction, props } from '@ngrx/store';

export const toggle = createAction(
  '[AnimalCard Component] Toggle',
  props<{ animalName: string }>()
);

export const showAnimal = createAction(
  '[AnimalCard Component] Show Animal Details',
  props<{ animalName: string }>()
);
