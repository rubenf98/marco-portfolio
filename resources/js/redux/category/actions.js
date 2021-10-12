import { types } from "./types";
import axios from "axios";

export const fetchCategories = () => ({
    type: types.FETCH_CATEGORIES,
    payload: axios.get(`${window.location.origin}/api/category`)
})

export const fetchSelector = () => ({
    type: types.FETCH_CATEGORY_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/category`)
})