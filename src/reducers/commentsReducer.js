import { SAVE_COMMENTS } from 'actions';

export default (state = [], action) => {
    switch(action.type) {
        case SAVE_COMMENTS:
            return [ ...state, action.payload ];
        default:
            return state;
    }
}