"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        return (React.createElement("header", {className: "main-header"}, React.createElement("a", {href: "http://localhost:8081", className: "logo"}, React.createElement("span", {className: "logo-mini"}, React.createElement("img", {src: "assets/images/icon@2x.png", style: { height: '30px', width: '30px', border: '2px solid white', marginTop: '-4px' }})), React.createElement("span", {className: "logo-lg"}, React.createElement("img", {src: "assets/images/icon@2x.png", style: { height: '30px', width: '30px', border: '2px solid white', marginTop: '-4px' }}), " ", React.createElement("b", null, "Prototype1"))), React.createElement("nav", {className: "navbar navbar-static-top"}, React.createElement("div", {className: "navbar-custom-menu"}, React.createElement("ul", {className: "nav navbar-nav"}, React.createElement("li", {className: "user user-menu"}, React.createElement("a", null, React.createElement("img", {src: "assets/images/default-user.png", className: "user-image", alt: "User Image"}), React.createElement("span", {className: "hidden-xs"}, "Dave Hurt"))), React.createElement("li", null, React.createElement("a", null, React.createElement("i", {className: "fa fa-sign-out"}))))))));
    };
    return Header;
}(React.Component));
exports.Header = Header;
//# sourceMappingURL=header.js.map