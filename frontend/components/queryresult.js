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
          <div className="">
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
                <div className="row">
                    <span className="row badge badge-danger"><h6>{this.props.data.title}</h6></span>
                    <br/><br/>
                    <div className="row alert alert-danger">
                        <h4>
                            <div>{this.props.data.result}</div>
                        </h4>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row">
                    <span className="row badge badge-success">{this.props.data.title}</span>
                    <br/><br/>
                    {
                        this.props.data.result.map((item, i) => {
                            return (
                                <div className="alert alert-success" key={i}>
                                    <h4>{item}</h4>
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
    }
}