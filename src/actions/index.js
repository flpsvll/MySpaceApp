import axios from 'axios';

export const FETCH_POSTS = 'fetch_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=clip123';

export function fetchPost() {
    const request = axios.get('${ROOT_URL}/posts${API_KEY}');

    return {
        type: FETCH_POSTS,
        payload: request
    };
}
