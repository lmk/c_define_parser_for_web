import React from 'react';
import ReactDOM from 'react-dom';
//import MainWrapper from './components/mainwrapper';
import ReqList from './reqlist';
import FindButton from './findbutton';
import QueryResult from './queryresult';
//import ReqList from './components/test';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reqListReducer from './reducers';

// const store = createStore(reqListReducer);
export default class MainWrapper extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {disabledFindbutton: ''};
        this.handleFinder = this.handleFinder.bind(this);

    }

    handleFinder() {
        console.log("checkbox", this.refs);
        console.log("checkbox", this.refs.reqlist);
        console.log("checkbox", this.refs.reqlist.getChilds());

        var obj = ReactDOM.findDOMNode(this.refs.reqlist);

        console.log('findDOMNode', obj);


        // fetch('/query', {
        //     headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //     },
        //     method: "POST",
        //     body: JSON.stringify({a: 1, b: 2})
        // })
        // .then(result=>{
        //     result.json().then(data=>{
        //         this.setState({detailData: data.list});
        //     });

        //     //
        // });
    }



    render(){
        return(
            <div>
                <ReqList ref='reqlist'/>
                <FindButton handleFinder={this.handleFinder} enabled={this.state.disabledFindbutton}/>
                <QueryResult ref='querylist'/>
                {this.props.children}
            </div>
        )
    }
}

/*
            {this.props.children}


*/

        // <Provider store={store}>
        //     <ReqList detailData={reqListReducer}/>
        // </Provider>

        // <Provider store={store}>
        //     <ReqList detailData={reqListReducer}/>
        // </Provider>
        // <FindButton/>