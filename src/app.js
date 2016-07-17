"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_dom_1 = require("react-dom");
var header_1 = require("./layout/header");
var footer_1 = require("./layout/footer");
var sidebar_1 = require("./layout/sidebar");
var login_1 = require("./pages/login");
var react_router_1 = require('react-router');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, this.props.isLogged ? [(React.createElement(header_1.Header, null)), (React.createElement(sidebar_1.Sidebar, null))] : null, React.createElement("div", {className: "content-wrapper", style: { marginLeft: this.props.isLogged ? '230px' : 0 }}, this.props.children), this.props.isLogged ? (React.createElement(footer_1.Footer, null)) : null));
    };
    return App;
}(React.Component));
react_dom_1.render(React.createElement(react_router_1.Router, {history: react_router_1.hashHistory}, React.createElement(react_router_1.Route, {path: "/", component: App}, React.createElement(react_router_1.Route, {path: "login", component: login_1.Login}), React.createElement(react_router_1.Route, {path: "*", component: login_1.Login}))), document.getElementById("app"));
//# sourceMappingURL=app.js.map