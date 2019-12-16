import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from "redux"
import { Provider } from "react-redux"



const defaultState = {
    menuItems: [], 
    user_id: 0, 
    cart: []
}
const store = createStore(reducer)



function reducer (state=defaultState, action) {
    switch (action.type) {
        case "LOGIN": 
            console.log("worked")
            return {...state, user_id: action.payload}
            break; 

        case "SET_MENU_ARRAY":
            return {...state, menuItems: action.payload}
            break; 
    
        default:
            return state 
            break;
    }
} 


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router> 
    </Provider>,
document.getElementById('root'));

 