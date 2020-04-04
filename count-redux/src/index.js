import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from "redux-thunk";
import counter from "./reducers/counter"
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux"

const store = createStore(counter, applyMiddleware(thunk))

        ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>,
        document.getElementById("root"));

