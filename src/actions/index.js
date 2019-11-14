export const SAVE_COMMENTS = 'SAVE_COMMENTS';

export const saveComments = (payload) => {
    return {
        type: SAVE_COMMENTS,
        payload,
    }
}