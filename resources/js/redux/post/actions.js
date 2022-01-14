import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchPosts = (page = 1, filters = {}) => ({
    type: types.FETCH_POSTS,
    payload: axios.get(`${window.location.origin}/api/post?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchPost = (id) => ({
    type: types.FETCH_POST,
    payload: axios.get(`${window.location.origin}/api/post/${id}`)
})

export const createPost = (data) => ({
    type: types.CREATE_POST,
    payload: axios.post(`${window.location.origin}/api/post`, data)
})

export const resetInfiniteData = () => ({
    type: types.RESET_INFINITE_DATA,
    payload: "teste"
})

