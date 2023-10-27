import { createReducer, on } from '@ngrx/store';
import { changenameAction, initAction } from '../actions/actions';
import { Films } from 'src/app/sharedModels/models/class/films';

// const INITIAL_STATE = {}; // à l'init => en prod

// ------------------- OPTIMISATION ------------------
// export const STATE_NAME = 'appli';
// export interface rootState {
//     appName: string;
//     actor: {
//         name: string;
//         isJedi: boolean;
//     }
//     film?: Films;
//     films?: Films[],
//     loaded?: boolean
// }

//--------------------------------------------------------
const INITIAL_STATE = {
  appName: 'Formation Angular NGRX',
  actor: {
    name: '',
    isJedi: false,
  },
};

export const rootReducer = createReducer(
  // state initial
  INITIAL_STATE,
  // ons => 'on' sur une action
  // définir les actions invoquées
  on(
    initAction,
    // tâche ou le job que va faire le reducer ...
    // sur les props du store représenté par un state
    (state) => {
      // le reducer est capable de prendre qu'une partie du store(state)
      return {
        ...state, // ... spread operators ES2015 (déstructure notre state)
        actor: {
          ...state.actor, // copie de la valeur de actor
          isJedi: true, // param modifié
        },
      };
    }
  ),
  // un autre ON sur une autre action
  on(changenameAction, (state, props) => {
    return {
      ...state,
      actor: {
        ...state.actor,
        name: props.paramNameActionCOMP,
      },
    };
  })
);
