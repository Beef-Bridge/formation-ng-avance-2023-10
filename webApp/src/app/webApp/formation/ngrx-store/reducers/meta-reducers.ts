// affiche en console les différentes étapes
// qui se déroulent dans le store entre les actions et les reducers…

import { ActionReducer, MetaReducer } from "@ngrx/store"

// actionReducer représente la combinaison de l'action et du reducer
// nous donne le résultat de ce qui se passe entre l'action et le reducer

const log = (paramReducer:ActionReducer<any>) => {

    return(state:any, action:any) => {

        const currentState = paramReducer(state, action);

        console.groupCollapsed(action.type);

                console.log('Etat précédent : ', state);
                console.warn('Action : ', action);
                console.log('Etat suivant : ', currentState);

        console.groupEnd();

        return currentState;
    }
}
// ------------ export le metaReducer ---
export const metaReducersX: MetaReducer[] = [log];
