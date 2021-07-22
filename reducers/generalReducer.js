import { initialState } from './initialState';

export default function generalReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGGEAR':
            const stateUsuario = state.usuario;
            return { ...stateUsuario, autorizado: true };

        default:
            return state;
    }
}
