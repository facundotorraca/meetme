import axios from 'axios';
import { actividades } from '../reducers/initialState';

export const addTodo = ({ title, userId }) => {
    return (dispatch) => {
        dispatch(addTodoStarted());

        axios
            .post(`https://jsonplaceholder.typicode.com/todos`, {
                title,
                userId,
                completed: false,
            })
            .then((res) => {
                dispatch(addTodoSuccess(res.data));
            })
            .catch((err) => {
                dispatch(addTodoFailure(err.message));
            });
    };
};

const loggearUsuario = () => ({
    type: 'LOGGEAR',
});

export const guardarInvite = (usuario, mensaje, pub) => ({
    type: 'GUARDAR_INVITE',
    payload: { usuario, mensaje, pub, tipo: actividades.INVITACION },
});

export const guardarRegalo = (usuario, mensaje, regalo) => ({
    type: 'GUARDAR_INVITE',
    payload: { usuario, mensaje, regalo, tipo: actividades.REGALO },
});

export const matchearUsuario = (usuario) => ({
    type: 'MATCH_USER',
    payload: usuario,
});

export const guardarMensaje = (message) => ({
    type: 'GUARDAR_MENSAJE',
    payload: message,
});
