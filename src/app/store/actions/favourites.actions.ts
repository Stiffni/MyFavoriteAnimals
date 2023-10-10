import { createAction, props } from '@ngrx/store';

export const toggle = createAction(
  '[AnimalCard Component] Toggle',
  props<{ animalName: string }>()
);
