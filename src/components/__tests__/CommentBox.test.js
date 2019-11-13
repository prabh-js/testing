import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapper;
beforeEach(() => {
    wrapper = mount(<CommentBox />);
});
afterEach(() => {
    wrapper.unmount();
});

it('has text area and button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
});
describe('text area', () => {
    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapper.update();
    });

    it('has a text area that users can type in', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
    });
    it('the text area is emptied when form is submitted', () => {
        wrapper.find('textarea').simulate('submit');
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
});