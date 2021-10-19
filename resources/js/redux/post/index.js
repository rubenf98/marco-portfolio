import { types } from "./types";

export const initialState = {
    data: [],
    infiniteData: [],
    meta: {},
    links: {},
    loading: false,
    current: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.CREATE_POST}_PENDING`:
        case `${types.FETCH_POSTS}_PENDING`:
        case `${types.FETCH_POST}_PENDING`:
            return {
                ...state,
                loading: true,

            };
        case `${types.FETCH_POST}_REJECTED`:
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
        case `${types.FETCH_POST}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        case `${types.FETCH_POSTS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                infiniteData: { ...state.infiniteData, [action.payload.data.meta.current_page]: action.payload.data.data },
                data: action.payload.data.data,
                meta: action.payload.data.meta,
                links: action.payload.data.links
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