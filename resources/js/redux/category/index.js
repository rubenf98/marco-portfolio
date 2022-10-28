import { types } from "./types";

export const initialState = {
    data: [{ id: 1, name: 'sofas' },
    { id: 2, name: 'cortinados' },
    { id: 3, name: 'cadeiras' },
    { id: 4, name: 'cabeceira' },
    { id: 5, name: 'outros' },],
    selector: [],
    meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        links: [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://localhost:8000/api/category?page=1",
                "label": 1,
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }],
        path: 'http://localhost:8000/api/category',
        per_page: 10,
        to: 5,
        total: 5,
    },
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