"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Sidebar = (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        _super.apply(this, arguments);
    }
    Sidebar.prototype.render = function () {
        return (React.createElement("aside", {className: "main-sidebar"}, React.createElement("section", {className: "sidebar"}, React.createElement("ul", {className: "sidebar-menu"}, React.createElement("li", {className: "header"}, "MAIN NAVIGATION"), React.createElement("li", {"ng-className": "active"}, React.createElement("a", null, React.createElement("i", {className: "fa fa-dashboard"}), " ", React.createElement("span", null, "Dashboard"))), React.createElement("li", null, React.createElement("a", null, React.createElement("i", {className: "fa fa-files-o"}), React.createElement("span", null, "Feature List")))))));
    };
    return Sidebar;
}(React.Component));
exports.Sidebar = Sidebar;
//# sourceMappingURL=sidebar.js.map