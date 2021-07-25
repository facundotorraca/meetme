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
            let mensajes = state.mensajes;

            let match = { ...usuario, match: true };

            let nuevosMensajes = {
                ...mensajes,
                [`${usuario.id}`]: {
                    conversacion: [
                        { senderMe: false, mensaje: 'Has hecho match conmigo!', fecha: new Date() },
                    ],
                },
            };

            return {
                ...state,
                usuariosTotales: usuariosTotales.map((u) => (u.id != match.id ? u : match)),
                mensajes: nuevosMensajes,
            };
        }
        case 'GUARDAR_MENSAJE': {
            console.log('payload', action.payload);

            let mensajes = state.mensajes;

            let mensaje = action.payload[0];

            let nuevaConversacion = [
                ...mensajes[`${mensaje.user._id}`].conversacion,
                { senderMe: true, mensaje: mensaje.text, fecha: new Date() },
            ];

            let nuevosMensajes = {
                ...mensajes,
                [`${mensaje.user._id}`]: {
                    conversacion: nuevaConversacion,
                },
            };

            return {
                ...state,
                mensajes: nuevosMensajes,
            };
        }
        default:
            return state;
    }
}
