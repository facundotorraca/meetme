import axios from 'axios';

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

export const matchearUsuario = (usuario) => ({
    type: 'MATCH_USER',
    payload: usuario,
});
