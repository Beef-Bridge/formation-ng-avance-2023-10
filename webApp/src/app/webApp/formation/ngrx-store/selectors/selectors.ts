// on va créer des parties du store qu'on veut select
// pour le smettre à dispo des composants

import { createSelector } from '@ngrx/store';

const selectRootState = (state: any) => {
  return state.root;
};

export const selectorGetActor = createSelector(
  selectRootState,
  (state: any) => state.actor
);

export const selectorGetFilms = createSelector(
  // on prend une partie du state
  selectRootState, // a partir de quoi on va filtrer ce que l'on veut afficher
  (state: any) => state.films
);
export const selectorGetLoaded = createSelector(
  selectRootState,
  (state: any) => state.loaded
);
export const selectorGetKO = createSelector(
  selectRootState,
  (state: any) => state.KO
);
