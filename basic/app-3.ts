import { Action, Reducer } from './not-redux/fake-redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

class Store<T> {

    constructor(
        private reducer: Reducer<T>,
        private state: T
    ) { }

    getState() {
        return this.state;
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(contadorReducer, 10);

// estado inicial
console.log(store.getState());

// modificar estado con accion
store.dispatch(incrementadorAction);

// estado modificado
console.log(store.getState());