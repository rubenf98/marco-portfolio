import { types } from "./types";

export const initialState = {
    filters: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.SET_FILTERS}`:
            return {
                ...state,
                filters: action.payload,

            };

        default:
            return state
    }
}