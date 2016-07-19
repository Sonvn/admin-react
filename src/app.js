"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_dom_1 = require("react-dom");
var react_router_1 = require('react-router');
var header_1 = require("./layout/header");
var footer_1 = require("./layout/footer");
var sidebar_1 = require("./layout/sidebar");
var login_1 = require("./pages/login");
var feature_list_1 = require("./pages/feature-list");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        console.log(this.props);
        return (React.createElement("div", null, this.props.header, this.props.sidebar, React.createElement("div", {className: "content-wrapper", style: { marginLeft: this.props.header ? '230px' : 0 }}, this.props.main), this.props.footer));
    };
    return App;
}(React.Component));
function GetComponents(mainComponent, isLogged) {
    if (isLogged) {
        return {
            main: mainComponent,
            header: header_1.Header,
            sidebar: sidebar_1.Sidebar,
            footer: footer_1.Footer
        };
    }
    else {
        return {
            main: mainComponent
        };
    }
}
react_dom_1.render(React.createElement(react_router_1.Router, {history: react_router_1.hashHistory}, React.createElement(react_router_1.Route, {path: "/", component: App}, React.createElement(react_router_1.Route, {path: "login", components: GetComponents(login_1.Login, false)}), React.createElement(react_router_1.Route, {path: "feature-list", components: GetComponents(feature_list_1.FeatureList, true)}))), document.getElementById("app"));
//# sourceMappingURL=app.js.map