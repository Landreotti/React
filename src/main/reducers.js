import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura Cartão',
            done: true
        },{
            _id: 2,
            description: 'Reunião com a equipe as 10:00',
            dene: true
        },{
            _id: 3,
            description: 'Consulta Médica na terça depois do almoço',
            done: false
        }]    
    })
})


export default rootReducer;