import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'root';
import App from 'components/App';

let wrapper;
beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status:200,
      response: [{name: 'fetch #1'}, {name:'fetch#2'}]
  });
});
afterEach(() => {
    moxios.uninstall();
})

it('fetches list of comments and displays it', (done) => {
    wrapper = mount(
        <Root>
            <App />
        </Root>
            );
    wrapper.find('.fetch-comments').simulate('click');
    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find('li').length).toEqual(2);
        done();
        wrapper.unmount();
    })
})