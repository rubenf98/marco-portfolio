import { types } from "./types";
import axios from "axios";

export const fetchClients = () => ({
    type: types.FETCH_CLIENTS,
    payload: axios.get(`${window.location.origin}/api/client`)
})

export const fetchSelector = () => ({
    type: types.FETCH_CLIENT_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/client`)
})