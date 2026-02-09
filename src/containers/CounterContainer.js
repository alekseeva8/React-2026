/*
файл, представленный в виде ES6 class, содержащий всю логику счетчика (хранения и изменения), 
но не содержащий не одного html элемента. 
В return содержит лишь одну строку. return <Counter {…props} />
 */

import React, { Component } from "react";
import Counter from '../views/Counter/index.js';


export default class CounterContainer extends Component {
    state = { count: 0 };

    handleIncrement = () => this.setState(prev => ({ count: prev.count + 1 }));
    handleDecrement = () => this.setState(prev => ({ count: prev.count - 1 }));
    handleReset = () => this.setState({ count: 0 });

    render() {
        const props = {
            count: this.state.count,
            onIncrement: this.handleIncrement,
            onDecrement: this.handleDecrement,
            onReset: this.handleReset
        };
        return <Counter {...props}/>;
    }
}
