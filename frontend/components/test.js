import React from 'react';

import { connect } from 'react-redux';
import { receiveValue } from '../actions';

// https://velopert.com/1552

class Counter extends React.Component {

    render() {
        return (
            <div>Counter</div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        value: state.value
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onReceive: (value) => {
            dispatch(receiveValue(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);