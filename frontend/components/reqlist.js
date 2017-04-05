import React from 'react';

class ReqList extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div id="req-list">
                {
                    this.props.detailData.map((item, i) => {
                    return (
                        <Item title={item.title} count={item.count} key={i}/>
                    );
                })}
            </div>
        );
    }
}

ReqList.defaultProps = {
    detailData: []
};

ReqList.propTypes = {
    detailData: React.PropTypes.array
};

class Item extends React.Component {
    render() {
        return (
            <div>
                <i className="fa fa-arrow-circle-right"> {this.props.title} : {this.props.count}</i>
                <br/>
            </div>
        );
    }
}


export default ReqList;