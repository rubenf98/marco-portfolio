import { types } from "./types";

export const initialState = {
    exampleCounter: 0,
    loading: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.ADD_EXAMPLE}_PENDING`:
            return {
                ...state,
                loading: true,

            };
        case `${types.ADD_EXAMPLE}_REJECTED`:
            return {
                ...state,
                loading: false,
                exampleCounter: 0
            };
        case `${types.ADD_EXAMPLE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                exampleCounter: initialState.exampleCounter + 1,
            };
        default:
            return state
    }
}