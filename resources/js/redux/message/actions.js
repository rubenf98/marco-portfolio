import { types } from "./types";
import axios from "axios";

export const createMessage = data => ({
    type: types.CREATE_MESSAGE,
    payload: axios.post(`${window.location.origin}/api/message`, data)
})