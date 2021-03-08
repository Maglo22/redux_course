import { Action } from "../not-redux/fake-redux";

// regresa un nuevo estado
export const contadorReducer = (state = 10, action: Action) => {
    
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