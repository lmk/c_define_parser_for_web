import React from 'react';
import ReactDOM from 'react-dom';
import ReqList from './components/reqlist';
//import ReqList from './components/test';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reqListReducer from './reducers';

const store = createStore(reqListReducer);

console.log("TRACE frontend/index.js")

const rootElement = document.getElementById('req-list');
ReactDOM.render(
    <Provider store={store}>
        <ReqList detailData={reqListReducer}/>
    </Provider>, rootElement
);
