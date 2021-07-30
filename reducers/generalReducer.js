import { initialState, actividades } from './initialState';

export default function generalReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGGEAR':
            const stateUsuario = state.usuario;
            stateUsuario = { ...stateUsuario, autorizado: true };
            return { ...state, usuario: stateUsuario };

        case 'MATCH_USER': {
            const usuario = action.payload;

            const mensajes = state.mensajes;
            const usuariosTotales = state.usuariosTotales;

            const usuarioLikeado = { ...usuario, leDiLike: true };

            const nuevosMensajes = {
                ...mensajes,

                [usuario.id]: {
                    conversacion: [
                        { senderMe: false, mensaje: 'Has hecho match conmigo!', fecha: new Date() },
                    ],
                },
            };

            return {
                ...state,
                usuariosTotales: usuariosTotales.map((u) =>
                    u.id == usuarioLikeado.id ? usuarioLikeado : u
                ),
                mensajes: nuevosMensajes,
            };
        }

        case 'GUARDAR_MENSAJE': {
            let mensajes = state.mensajes;
            let mensaje = action.payload;
            console.log(mensaje);

            let nuevaConversacion = [
                ...mensajes[`${mensaje._id}`].conversacion,
                { senderMe: true, mensaje: mensaje.text, fecha: new Date() },
            ];

            let nuevosMensajes = {
                ...mensajes,
                [`${mensaje._id}`]: {
                    conversacion: nuevaConversacion,
                },
            };

            return {
                ...state,
                mensajes: nuevosMensajes,
            };
        }
        case 'GUARDAR_INVITE': {
            let usuario = action.payload.usuario;

            let misActividadesConUsuario = state.misActividades[`${usuario.id}`] ?? { agenda: [] };

            let agenda = misActividadesConUsuario.agenda;
            let nuevaAgenda = [
                ...agenda,
                { senderMe: true, tipo: actividades.INVITACION, fecha: new Date() },
            ];

            let nuevasActividadesConUsuario = {
                ...state.misActividades,
                [`${usuario.id}`]: {
                    agenda: nuevaAgenda,
                },
            };

            let misNuevasActividades = { ...misActividadesConUsuario, nuevasActividadesConUsuario };

            return { ...state, misActividades: misNuevasActividades };
        }
        default:
            return state;
    }
}
