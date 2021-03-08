import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';
 
export const estadoInicial: Todo[] = [];
 
const _todoReducer = createReducer(
  estadoInicial,
  on(actions.limpiar, (state,) => state.filter(todo => !todo.completado)),
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id }) => {
    return state.map(todo => 
      (todo.id === id) ? { ...todo, completado: !todo.completado } : todo
    );
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map(todo => 
      (todo.id === id) ? { ...todo, texto } : todo
    );
  }),
  on(actions.borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(actions.toggleAll, (state) => state.map(todo => ({ ...todo, completado: !todo.completado }))),
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}