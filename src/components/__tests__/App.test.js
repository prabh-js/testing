import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import Commentlist from 'components/CommentList';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<App />);
})
it('shows comment box', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
});
it('shows comment list', () => {
    expect(wrapper.find(Commentlist).length).toEqual(1);
})
