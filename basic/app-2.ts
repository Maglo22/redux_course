import { Action } from './not-redux/fake-redux';
import { decrementadorAction, dividirAction, incrementadorAction, multiplicarAction, resetAction } from './contador/contador.actions';

// regresa un nuevo estado
const reducer = (state = 10, action: Action) => {
    
    switch(action.type) {
        case 'INCREMENTAR':
            return state += 1;
            break;

        case 'DECREMENTAR':
            return state -= 1;
            break;

        case 'MULTIPLICAR':
            return state * action.payload;
            break;

        case 'DIVIDIR':
            return state / action.payload;
            break;

        case 'RESET':
            return state = 0;

        default:
            return state;
            break;
    }
}

// usar reducer
console.log('Estado inicial:', 10);
console.log('Incrementar:', reducer(10, incrementadorAction));
console.log('Decrementar:', reducer(10, decrementadorAction));
console.log('Multiplicar:', reducer(10, multiplicarAction));
console.log('Dividir:', reducer(10, dividirAction));
console.log('Reset:', reducer(10, resetAction));