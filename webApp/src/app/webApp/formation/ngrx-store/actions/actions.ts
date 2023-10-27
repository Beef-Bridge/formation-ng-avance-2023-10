import { createAction, props } from "@ngrx/store";
import { Films } from "src/app/sharedModels/models/class/films";

export const initAction =  createAction(
    // nom de l'action
    '[ROOT] Init Action'
);
