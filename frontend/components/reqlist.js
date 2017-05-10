import React from 'react';

import { connect } from 'react-redux';
import { receiveValue } from '../actions';

class ReqList extends React.Component {

    constructor()
    {
        super();
        this.state = {detailData: []};
        console.log("TRACE frontend/conponents/reqlist.js - constructor");
    }

    componentDidMount() {
        console.log("TRACE frontend/conponents/reqlist.js - componentDidMount");
        fetch('http://localhost:3000/list')
        .then(result=>{
            result.json().then(data=>{
                //console.log("componentDidMount fetch", data);
                this.setState({detailData: data.list});
            });

            //
        });

    }

    render(){

        console.log("TRACE frontend/conponents/reqlist.js - rander");

        console.log("DEBUG this.state.detailData: ", this.state.detailData);

        return (
            <div id="req-list">
               {
                   this.state.detailData.map((item, i) => {
                    return (
                        <Item title={item.title} key={item.id} files={item.files} checked='checked'/>
                    );
                })}
            </div>
        );
/*
        return (
            <div id="req-list">
                this.state.detailData.forEach((item) => {
                    <div> title: {item.title} key:{item.id} files:{item.files} checked:{item.option.checked}</div>
//                    <Item title={item.title} key={item.id} files={item.files} checked={item.option.checked}/>

                })
            </div>
        );
*/
    }
}

class Item extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="checkbox checkbox-primary">
                    <input type="checkbox" className="styled" id={this.props.id} defaultChecked={this.props.checked} />
                    <label>{this.props.title}</label>
                </div>
            </div>
        );
    }
}


export default ReqList;