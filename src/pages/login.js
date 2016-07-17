"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Login = (function (_super) {
    __extends(Login, _super);
    function Login() {
        _super.apply(this, arguments);
    }
    Login.prototype.render = function () {
        return (React.createElement("section", {className: "content"}, React.createElement("div", {className: "modal", style: { display: "block" }}, React.createElement("div", {className: "modal-dialog"}, React.createElement("div", {className: "modal-content"}, React.createElement("div", {className: "modal-header"}, React.createElement("h4", {className: "modal-title"}, "Login")), React.createElement("div", {className: "modal-body"}, React.createElement("div", {className: "form-group"}, React.createElement("label", {htmlFor: "inputEmail"}, "Email address"), React.createElement("input", {type: "email", className: "form-control", id: "inputEmail", placeholder: "Enter email"})), React.createElement("div", {className: "form-group"}, React.createElement("label", {htmlFor: "inputPassword"}, "Password"), React.createElement("input", {type: "password", className: "form-control", id: "inputPassword", placeholder: "Password"}))), React.createElement("div", {className: "modal-footer"}, React.createElement("button", {type: "button", className: "btn btn-primary"}, "Login")))))));
    };
    return Login;
}(React.Component));
exports.Login = Login;
//# sourceMappingURL=login.js.map