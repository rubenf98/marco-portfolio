import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchCategories = (page = 1, filters = {}) => ({
    type: types.FETCH_CATEGORIES,
    payload: axios.get(`${window.location.origin}/api/category?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchSelector = () => ({
    type: types.FETCH_CATEGORY_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/category`)
})