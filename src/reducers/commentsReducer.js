import { SAVE_COMMENTS, FETCH_COMMENTS } from 'actions';

export default (state = [], action) => {
    switch(action.type) {
        case SAVE_COMMENTS:
            return [ ...state, action.payload ];
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => {
                return comment.name;
            });
            return [...state, ...comments];
        default:
            return state;
    }
}