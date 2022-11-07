import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import './index.scss';
import 'antd/dist/antd.min.css';
import './assets/fonts.scss';
import store from './store/index';
import {Provider} from 'react-redux';
import LoadableApp from './LoadableApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <LoadableApp/>
        </Router>
    </Provider>
);
