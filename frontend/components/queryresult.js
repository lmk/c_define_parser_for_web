import React from 'react';
import ReactDOM from 'react-dom';

export default class QueryResult extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {result: []};
        this.OnChangeResult = this.OnChangeResult.bind(this);
    }

    OnChangeResult(data) {
        this.setState({result: data});
    }

    render(){
        return (
          <div className="row">
            {
                this.state.result.map((item, i) => {
                    return (
                        <ResultItem key={i} data={item}/>
                    );
                })
            }

          </div>
        );
    }
}

class ResultItem extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        //console.log("ResultItem::render::RESULT", this.props.data)
        if (this.props.data.length == 0 ) {
            return (
                <div className="row">
                </div>
            );
        }

        if (this.props.data.category === 'ERROR') {
            return (
                <div className="row col-md-12">
                    <span className="badge badge-danger">{this.props.data.title}</span>
                    <br/>
                    <div className="row alert alert-danger">
                        <h4>
                            <div>{this.props.data.result}</div>
                        </h4>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row col-md-12">
                    <span className="badge badge-success">{this.props.data.title}</span>
                    <br/>
                    <div className="row alert alert-success">
                        <h4>
                            <div>{this.props.data.result}</div>
                        </h4>
                    </div>
                </div>
            );
        }


    }
}