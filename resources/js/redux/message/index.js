import { types } from "./types";

export const initialState = {
    data: [],
    loading: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.CREATE_MESSAGE}_PENDING`:
            return {
                ...state,
                loading: true,

            };
        case `${types.CREATE_MESSAGE}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: []
            };
        case `${types.CREATE_MESSAGE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [action.payload.data.data, ...state.data]
            };
        default:
            return state
    }
}