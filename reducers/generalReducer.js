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
                { senderMe: true, tipo: action.payload.tipo, fecha: new Date() },
            ];

            let nuevasActividadesConUsuario = {
                ...state.misActividades,
                [`${usuario.id}`]: {
                    agenda: nuevaAgenda,
                },
            };

            let misNuevasActividades = { ...misActividadesConUsuario, nuevasActividadesConUsuario };

            let nuevaListaActividades = [
                ...state.listaDeActividades,
                {
                    id: state.listaDeActividades.length,
                    usuarioId: usuario.id,
                    senderMe: true,
                    tipo: action.payload.tipo,
                    fecha: new Date(),
                    pub: action.payload.pub,
                },
            ];

            return {
                ...state,
                misActividades: misNuevasActividades,
                listaDeActividades: nuevaListaActividades,
            };
        }
        case 'AUTORIZAR': {
            let password = state.usuario.password;
            let email = state.usuario.email;

            if (
                action.payload.password.toLowerCase() == password &&
                action.payload.email.toLowerCase() == email
            ) {
                return {
                    ...state,
                    usuario: { ...state.usuario, autorizado: true },
                    error: '',
                };
            }

            return {
                ...state,
                error: 'Email o contraseña incorrectos',
            };
        }

        case 'DESAUTORIZAR': {
            return {
                ...state,
                usuario: { ...state.usuario, autorizado: false },
            };
        }

        case 'GUARDAR_AVATAR': {
            const nuevosAtributos = action.payload;

            return {
                ...state,
                usuario: { ...state.usuario, atributos: nuevosAtributos },
            };
        }
        default:
            return state;
    }
}
