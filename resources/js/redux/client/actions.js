import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchClients = (page = 1, filters = {}) => ({
    type: types.FETCH_CLIENTS,
    payload: axios.get(`${window.location.origin}/api/client`)
})

export const fetchSelector = (filters = {}) => ({
    type: types.FETCH_CLIENT_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/client?${stringify(filters, {
        arrayFormat: "index"
    })}`)
})
