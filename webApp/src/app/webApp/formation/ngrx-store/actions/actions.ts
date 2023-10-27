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
