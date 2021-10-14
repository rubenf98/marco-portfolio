import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchPosts = (page = 1, filters) => ({
    type: types.FETCH_POSTS,
    payload: axios.get(`${window.location.origin}/api/post?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const createPost = (data) => ({
    type: types.CREATE_POST,
    payload: axios.post(`${window.location.origin}/api/post`, data)
})