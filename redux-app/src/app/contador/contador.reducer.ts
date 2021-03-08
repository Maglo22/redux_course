import { createReducer, on } from '@ngrx/store';
import * as actions from './contador.actions';

// estado inicial del reducer
export const initialState = 10;

// reducer que regresa un nuevo estado con base una accion
const _contadorReducer = createReducer(
    initialState,
    on(actions.incrementar, (state) => state + 1),
    on(actions.decrementar, (state) => state - 1),
    on(actions.multiplicar, (state, { numero }) => state * numero),
    on(actions.dividir, (state, { numero }) => state / numero),
    on(actions.reset, (state) => initialState ),
);

// funcion exportada para usar el reducer del contador
export function contadorReducer(state, action) {
    return _contadorReducer(state, action);
}