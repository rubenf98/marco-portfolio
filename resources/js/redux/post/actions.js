import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => ({
    type: types.FETCH_POSTS,
    payload: axios.get(`${window.location.origin}/api/post`)
})