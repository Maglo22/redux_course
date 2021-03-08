// acciones
interface Action {
    type: string;
    payload?: any;
}

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
};

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};

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