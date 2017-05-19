import React from 'react';
import ReactDOM from 'react-dom';

export default class FindButton extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {code: 0};
        this.OnClick = this.OnClick.bind(this);
        this.OnKeyPress = this.OnKeyPress.bind(this);
        this.OnChangeCode = this.OnChangeCode.bind(this);
    }

    OnKeyPress(target) {
        // input enter key
        if(target.charCode==13){
            this.OnClick(target);
        }
    }

    OnClick(target) {
        if ( this.props.disabledFindbutton === 'disabled')
            return;

        this.props.handleFinder(this.state.code);
    }

    OnChangeCode(o) {
        this.setState({code: o.target.value});
    }

    setDisable(isDisable) {
       // this.setState({detailData: data.list})
    }

    render(){

        return (
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." onKeyPress={this.OnKeyPress} onChange={this.OnChangeCode}/>
            <span className="input-group-btn">
                <button id="button" className="btn btn-secondary" type="button" onClick={this.OnClick} disabled={this.props.disabledFindbutton}>Find!</button>
            </span>
          </div>
        );
    }
}

//     <button id="button" className="btn btn-secondary" type="button" onClick={this.onClick.bind(this)} /*disabled={this.state.disable}*/>Find!</button>
