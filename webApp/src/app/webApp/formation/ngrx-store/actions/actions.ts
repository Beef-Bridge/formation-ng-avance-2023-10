import { createAction, props } from "@ngrx/store";
import { Films } from "src/app/sharedModels/models/class/films";

export const initAction =  createAction(
  // nom de l'action
  '[ROOT] Init Action'
);


export const changenameAction =  createAction(
  // nom de l'action
  '[ROOT] Change Name Actor Action',
  // props à faire ajouter par le reducer dans le state
  props<{paramNameActionCOMP:string}>()
);

export const loadFilmsAction =  createAction(
  // nom de l'action
  '[FILMS] Ask Load Films Action'
);

export const loadFilmsOkAction = createAction(
  '[FILMS DATAS] Load films OK',
  props<{films:Films[]}>()
);

export const loadFilmsNotOkAction = createAction(
  '[FILMS DATAS] Load films Not OK',
  props<{err:any}>()
);
