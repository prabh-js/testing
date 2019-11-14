import commentsReducer from 'reducers/commentsReducer';
import { SAVE_COMMENTS } from 'actions';

it('handles SAVE_COMMENTS action type', () => {
    const action = {
        type: SAVE_COMMENTS,
        payload: 'New Comment'
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment']);
});
it('handles unknown action type', () => {
    const newState = commentsReducer([], { type: 'AKDJKA' });
    expect(newState).toEqual([]);
});