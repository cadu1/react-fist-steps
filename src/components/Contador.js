import React from 'react';

export default class Contador extends React.Component {
    constructor() {
        super();
        this.state = {
            contador: 0,
        };
    }

    decrement() {
        this.setState({
            contador: --this.state.contador
        });
    }

    increment() {
        this.setState({
            contador: ++this.state.contador
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.decrement.bind(this)}>-</button>
                    <button onClick={this.increment.bind(this)}>+</button>
                </div>
            </div>
        );
    }
}