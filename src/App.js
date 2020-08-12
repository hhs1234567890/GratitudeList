import React from 'react';

import './App.css';
import List from './modules/list';
import Form from './modules/form';
class App extends React.Component {
    constructor() {
        super();
        let list = JSON.parse(localStorage.getItem('list'));
        if (list === null) {
            localStorage.setItem('list', '[]');
            list = [];
        }
        this.state = {
            list: list,
            value: '',
            buttDis: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.focus = this.focus.bind(this);
        this.focusOut = this.focusOut.bind(this);
        this.clear = this.clear.bind(this);
        this.delete = this.delete.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.state.list.push(this.state.value);
        localStorage.setItem('list', JSON.stringify(this.state.list));
        this.setState({ list: this.state.list, value: '' });
        this.forceUpdate();
    }
    delete(index) {
        console.log(index);
        this.state.list.splice(index, 1);
        localStorage.setItem('list', JSON.stringify(this.state.list));

        this.forceUpdate();
    }
    handleChange(event) {
        console.log(event.target.value);
        console.log(this.state);

        this.setState({ value: event.target.value, buttDis: true });

        this.forceUpdate();

        // this.setState({ buttDis: true });
    }
    clear() {
        localStorage.clear();
        this.state.list.splice(0, this.state.list.length);
        this.forceUpdate();
    }

    focusOut() {
        this.setState({ buttDis: false });
    }
    focus() {
        if (this.state.value !== '') this.setState({ buttDis: true });
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1>
                        Gratitude List
                        <span id="plus">
                            <i onClick={this.clear} className="fa fa-backspace"></i>
                        </span>
                    </h1>
                    <Form
                        submit={this.handleSubmit}
                        change={this.handleChange}
                        value={this.state.value}
                        buttDis={this.state.buttDis}
                        focus={this.focus}
                        focusOut={this.focusOut}
                    />
                    <List delete={this.delete} list={this.state.list} />
                    {this.state.list.length === 0 && <p>No Items Yet</p>}
                </div>
            </div>
        );
    }
}

export default App;
