import { types } from "./types";
import axios from "axios";

export const fetchItems = (page = 1, filters = {}) => ({
    type: types.FETCH_ITEMS,
    payload: axios.get(`${window.location.origin}/api/item`)
})

export const fetchSelector = () => ({
    type: types.FETCH_ITEM_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/item`)
})