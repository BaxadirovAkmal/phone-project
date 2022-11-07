import React, {Component} from "react";
import Loadable from "react-loadable";
import {Spin} from "antd";

const LoadApp = Loadable({
    loader: () => import("./App.js"),
    loading() {
        return <div className="main-loader d-flex justify-content-center align-items-center"><Spin size="large"/></div>;
    },
    timeout: 10000 // 10 seconds
});
export default class LoadableApp extends Component {
    render() {
        return <LoadApp/>
    }
}