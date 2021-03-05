import { types } from "./types";

export const initialState = {
    data: [],
    loading: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_POSTS}_PENDING`:
            return {
                ...state,
                loading: true,

            };
        case `${types.FETCH_POSTS}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: []
            };
        case `${types.FETCH_POSTS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
            };
        default:
            return state
    }
}