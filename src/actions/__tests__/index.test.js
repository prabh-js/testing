import { saveComments, SAVE_COMMENTS } from 'actions';

describe('save comments block', () => {
    it('has the correct action type', () => {
        const action = saveComments();
        expect(action.type).toEqual(SAVE_COMMENTS);
    });
    it('has correct payload', () => {
        const action = saveComments('New comment');
        expect(action.payload).toEqual('New comment');
    })
})