import { initialState } from './initialState';

export default function userReduer(state = initialState, action) {
    switch (action.type) {
        default:
            return { ...state };
    }
}
