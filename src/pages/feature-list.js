"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var iconStyle = {
    textAlign: "center",
    cursor: "pointer"
};
var FeatureList = (function (_super) {
    __extends(FeatureList, _super);
    function FeatureList() {
        _super.apply(this, arguments);
    }
    FeatureList.prototype.render = function () {
        var mockFeatureList = [
            {
                title: "Improve Your CX with Live Analytics",
                slug: "improve-your-cx-with-live-analytics-fbf440c07d94",
                orderNumber: 0
            },
            {
                title: "Should You Try Your Hand at Startup Investing?",
                slug: "should-you-try-your-hand-at-startup-investing-8a4c8a6b864f",
                orderNumber: 1
            },
            {
                title: "Four Common Types of Software Prototypes",
                slug: "four-common-types-of-software-prototypes-8fa275c0602f",
                orderNumber: 2
            },
        ];
        return (React.createElement("section", {className: "content"}, React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("div", {className: "box"}, React.createElement("div", {className: "box-header", style: { height: '50px' }}, React.createElement("h3", {style: { margin: 0 }}, "List Feature Articles"), React.createElement("div", {className: "box-tools"}, React.createElement("button", {className: "btn btn-primary btn-sm", disabled: "disabled"}, "Save"))), React.createElement("div", {className: "box-body table-responsive no-padding"}, React.createElement("table", {className: "table table-hover"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("th", null, "Title"), React.createElement("th", {style: { textAlign: 'center', width: '50px' }}, "Up"), React.createElement("th", {style: { textAlign: 'center', width: '50px' }}, "Down")), mockFeatureList.map(function (article) { return (React.createElement("tr", {key: article.slug}, React.createElement("td", null, article.title, " (", React.createElement("a", {href: "http://blog.prototype1.io/article/" + article.slug, target: "_blank"}, "Open Article"), ")"), React.createElement("td", {style: iconStyle}, React.createElement("i", {className: "fa fa-arrow-up"})), React.createElement("td", {style: iconStyle}, React.createElement("i", {className: "fa fa-arrow-down"})))); })))))))));
    };
    return FeatureList;
}(React.Component));
exports.FeatureList = FeatureList;
//# sourceMappingURL=feature-list.js.map