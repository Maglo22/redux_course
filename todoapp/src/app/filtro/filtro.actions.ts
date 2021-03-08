import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const asignar = createAction(
    '[Filtro] Asignar filtro',
    props<{ filtro: filtrosValidos }>()
);