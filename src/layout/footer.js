"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        _super.apply(this, arguments);
    }
    Footer.prototype.render = function () {
        return (React.createElement("footer", {className: "main-footer"}, React.createElement("div", {className: "pull-right hidden-xs"}, React.createElement("b", null, "Version"), " 2.3.3"), React.createElement("strong", null, "Copyright © 2014-2015 ", React.createElement("a", {href: "http://almsaeedstudio.com"}, "Almsaeed Studio"), "."), " All rights"));
    };
    return Footer;
}(React.Component));
exports.Footer = Footer;
//# sourceMappingURL=footer.js.map