import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import async from 'middlewares/async';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, compose(applyMiddleware(async)))
    return  <Provider store={store}>
        {children}
    </Provider>
};