import React from 'react';
import ReactDOM from 'react-dom';
import ReqList from './reqlist';
import FindButton from './findbutton';
import QueryResult from './queryresult';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class MainWrapper extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {disabledFindbutton: ''};
        this.handleFinder = this.handleFinder.bind(this);

    }

    // request find code
    handleFinder(code) {
        // console.log("checkbox", this.refs);
        //console.log("checkbox", this.refs.reqlist);
        //console.log("checkbox", this.refs.reqlist.getChilds());

        var checkboxList = this.refs.reqlist.getChilds();
        var checkedList = [];

        for(var i in checkboxList) {
            if ( checkboxList[i].state.checked) {
                checkedList.push(checkboxList[i].props.id);
            }
        }

        if (checkedList.length <= 0 )
        {
            return;
        }

        fetch('/query', {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({'code': code,'query-list': checkedList})
        })
        .then(result=>{
            result.json().then(data=>{
                //console.log("result: ", data);
                this.refs.querylist.OnChangeResult(data);
            });
        });
    }

    render(){
        return(
            <div className="grid">
                <div className='row'>
                    <ReqList ref='reqlist'/>
                    <br/>
                </div>
                <div className='row'>
                    <br/>
                    <FindButton handleFinder={this.handleFinder} enabled={this.state.disabledFindbutton}/>
                </div>
                <br/>
                <hr/>
                <div className=''>
                    <QueryResult ref='querylist'/>
                </div>
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