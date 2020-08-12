/* eslint-disable react/prop-types */
import React from 'react';
class Form extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        // this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: this.props.value,
        };
    }

    render() {
        return (
            <form onSubmit={this.props.submit}>
                <input
                    type="text"
                    onChange={this.props.change}
                    onFocus={this.props.focus}
                    onBlur={this.props.focusOut}
                    value={this.props.value}
                    placeholder="Put Your Text Here"
                ></input>

                <input type="submit" className="button" value="OK"></input>
            </form>
        );
    }
}
export default Form;
