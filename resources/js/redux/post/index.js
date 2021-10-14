import { types } from "./types";

export const initialState = {
    data: [],
    meta: {},
    loading: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.CREATE_POST}_PENDING`:
        case `${types.FETCH_POSTS}_PENDING`:
            return {
                ...state,
                loading: true,

            };

        case `${types.CREATE_POST}_REJECTED`:
            return {
                ...state,
                loading: false
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
                meta: action.payload.data.meta
            };

        case `${types.CREATE_POST}_FULFILLED`: {
            let newData = state.data;
            newData.pop();
            return {
                ...state,
                loading: false,
                data: [action.payload.data.data, ...newData]
            };
        }
        default:
            return state
    }
}