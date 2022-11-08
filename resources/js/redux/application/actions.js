import { types } from "./types";

export const setFilters = (filters = {}) => ({
    type: types.SET_FILTERS,
    payload: filters
})