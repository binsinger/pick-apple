/* mobx实现 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
// import App from './App'
// import counter from './stores/counterStore'

import AppleBasket from './mobx/AppleBasket';
import store from './stores/appleStore'


// ReactDOM.render(
//     <Provider counter={counter}><App ></App></Provider>,
//     document.getElementById('app')
// )
ReactDOM.render(
<Provider store={store}><AppleBasket/></Provider>, 
document.getElementById('app'));
