import { types } from "./types";

export const initialState = {
    data: [],
    selector: [],
    meta: {},
    loading: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_CATEGORIES}_PENDING`:
        case `${types.FETCH_CATEGORY_SELECTOR}_PENDING`:
            return {
                ...state,
                loading: true,

            };
        case `${types.FETCH_CATEGORY_SELECTOR}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: []
            };
        case `${types.FETCH_CATEGORIES}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: []
            };
        case `${types.FETCH_CATEGORY_SELECTOR}_FULFILLED`:
            return {
                ...state,
                loading: false,
                selector: action.payload.data.data,
            };
        case `${types.FETCH_CATEGORIES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta
            };
        default:
            return state
    }
}