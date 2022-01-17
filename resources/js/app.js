import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import Routes from "./routes";
import { Provider } from 'react-redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import jwtDecode from "jwt-decode";
import {
    loginSuccess,
    setAuthorizationToken,
    refreshAuthorizationToken
} from "./redux/auth/actions";
import '../css/app.css';
import 'antd/dist/antd.css';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            promise,
        )
    )
)

if (localStorage.token) {
    const token = jwtDecode(localStorage.token);
    const tokenExp = token.exp < Date.now() / 1000;

    if (tokenExp) {
        store.dispatch(refreshAuthorizationToken(localStorage.token));
    } else {
        store.dispatch(loginSuccess());
        setAuthorizationToken(localStorage.token);
    }
}


render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('index')
)