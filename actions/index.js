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

const addTodoFailure = (error) => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error,
    },
});
