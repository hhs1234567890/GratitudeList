/* eslint-disable react/prop-types */
import React from 'react';
class List extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.list);
        this.state = { list: this.props.list };
    }

    render() {
        var list = this.state.list;

        return (
            <ul>
                {list.map((value, index) => {
                    return (
                        <li key={index}>
                            <span onClick={() => this.props.delete(index)}>
                                <i className="fa fa-trash"></i>
                            </span>
                            {value}
                        </li>
                    );
                })}
                {list == [] && <li>No Items Yet</li>}
            </ul>
        );
    }
}
export default List;
