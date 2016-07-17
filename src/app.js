"use strict";
var React = require("react");
var react_dom_1 = require("react-dom");
var header_1 = require("./layout/header");
var footer_1 = require("./layout/footer");
var sidebar_1 = require("./layout/sidebar");
var Root = function () { return (React.createElement("div", {className: "wrapper"}, React.createElement(header_1.Header, null), React.createElement(sidebar_1.Sidebar, null), React.createElement("div", {className: "content-wrapper"}, "aaa"), React.createElement(footer_1.Footer, null))); };
react_dom_1.render(React.createElement(Root, null), document.getElementById("app"));
//# sourceMappingURL=app.js.map