import React from 'react';
import ReactDOM from 'react-dom';
//import ReqList from './components/reqlist';
import ReqList from './components/test';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

const rootElement = document.getElementById('req-list');
ReactDOM.render(
    <Provider store={store}>
        <ReqList />
    </Provider>, rootElement
);
