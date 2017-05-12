import React from 'react';

import { connect } from 'react-redux';
import { receiveValue } from '../actions';

export default class ReqList extends React.Component {

    constructor()
    {
        super();
        this.state = {detailData: [], _childs: []};
        this.getChilds = this.getChilds.bind(this);
    }

    getChilds() {
        return this.state._childs;
    }

    componentDidMount() {

        // request list
        fetch('/list')
        .then(result=>{
            result.json().then(data=>{
                this.setState({detailData: data.list});
            });
        });
    }

    render(){
        return (
            <div id="req-list">
               {
                   this.state.detailData.map((item, i) => {
                       var checked='';
                       if ( item.hasOwnProperty('option')
                            && item.option.hasOwnProperty('checked')
                            && item.option.checked)
                       {
                           checked='checked';
                       }

                       return (
                            <Checkbox title={item.title} key={i} id={item.id} files={item.files} checked={checked}
                                ref={(checkbox) => {this.state._childs.push(checkbox);}}/>
                    );
                })}
            </div>
        );
    }
}

class Checkbox extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="checkbox checkbox-primary">
                    <input type="checkbox" className="styled" id={this.props.id} defaultChecked={this.props.checked} ref={this.props.id}/>
                    <label>{this.props.title}</label>
                </div>
            </div>
        );
    }
}
