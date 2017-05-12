import React from 'react';
import ReactDOM from 'react-dom';

export default class QueryResult extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {disable: []};
    }

    render(){

        return (
          <div className="row">
            <hr/>
            code is blablabla..
          </div>
        );
    }
}
