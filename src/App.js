
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'


@inject('counter')
@observer
class App extends Component {
    render () {
        const { counter } = this.props;
        return <div>
            <button onClick={counter.plus}>+</button>
            <span>{ counter.count }</span>
            <button onClick={counter.minus}>-</button>
        </div>
    }
}

export default App;