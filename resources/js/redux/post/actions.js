import { types } from "./types";
import axios from "axios";

export const fetchPosts = (page = 1) => ({
    type: types.FETCH_POSTS,
    payload: axios.get(`${window.location.origin}/api/post?page=${page}`)
})

export const createPost = (data) => ({
    type: types.CREATE_POST,
    payload: axios.post(`${window.location.origin}/api/post`, data)
})