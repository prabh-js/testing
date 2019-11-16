import axios from 'axios';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CHANGE_AUTH = 'CHANGE_AUTH';

export const saveComments = (payload) => {
    return {
        type: SAVE_COMMENTS,
        payload,
    }
}
export const fetchComments = () => {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
};
export const changeAuth = (payload) => {
    return {
        type: CHANGE_AUTH,
        payload
    }
};