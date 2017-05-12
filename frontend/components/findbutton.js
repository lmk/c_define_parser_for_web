import React from 'react';
import ReactDOM from 'react-dom';

export default class FindButton extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {disable: []};
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            this.handleClick(target);
        }
    }

    handleClick(target) {
        if ( this.props.disabledFindbutton === 'disabled')
            return;

        this.props.handleFinder();
    }

    setDisable(isDisable) {
       // this.setState({detailData: data.list})
    }

    render(){

        return (
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." onKeyPress={this.handleKeyPress}/>
            <span className="input-group-btn">
                <button id="button" className="btn btn-secondary" type="button" onClick={this.handleClick} disabled={this.props.disabledFindbutton}>Find!</button>
            </span>
          </div>
        );
    }
}

//     <button id="button" className="btn btn-secondary" type="button" onClick={this.onClick.bind(this)} /*disabled={this.state.disable}*/>Find!</button>
