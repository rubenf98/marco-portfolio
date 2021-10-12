import { types } from "./types";

export const initialState = {
    data: [],
    selector: [],
    loading: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_ITEMS}_PENDING`:
        case `${types.FETCH_ITEM_SELECTOR}_PENDING`:
            return {
                ...state,
                loading: true,

            };

        case `${types.FETCH_ITEM_SELECTOR}_REJECTED`:
            return {
                ...state,
                loading: false,
                selector: []
            };

        case `${types.FETCH_ITEMS}_PENDING`:
            return {
                ...state,
                loading: false,
                data: []
            };

        case `${types.FETCH_ITEM_SELECTOR}_FULFILLED`:
            return {
                ...state,
                loading: false,
                selector: action.payload.data.data,
            };

        case `${types.FETCH_ITEMS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
            };
        default:
            return state
    }
}