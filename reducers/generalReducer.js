import { initialState } from './initialState';

export default function generalReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGGEAR':
            const stateUsuario = state.usuario;
            stateUsuario = { ...stateUsuario, autorizado: true };
            return { ...state, usuario: stateUsuario };

        case 'MATCH_USER': {
            let usuario = action.payload;
            let usuariosTotales = state.usuariosTotales;

            let match = { ...usuario, match: true };

            return {
                ...state,
                usuariosTotales: usuariosTotales.map((u) => (u.id != match.id ? u : match)),
            };
        }
        default:
            return state;
    }
}
