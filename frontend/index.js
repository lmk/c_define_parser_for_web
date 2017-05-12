import React from 'react';
import ReactDOM from 'react-dom';
import MainWrapper from './components/mainwrapper';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reqListReducer from './reducers';

// const store = createStore(reqListReducer);


ReactDOM.render(
    <MainWrapper/>
    ,
    document.getElementById('root')
);


        // <Provider store={store}>
        //     <ReqList detailData={reqListReducer}/>
        // </Provider>

        // <Provider store={store}>
        //     <ReqList detailData={reqListReducer}/>
        // </Provider>
        // <FindButton/>