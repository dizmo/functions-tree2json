"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var TreeMock = function () {
    function TreeMock() {
        _classCallCheck(this, TreeMock);
    }

    _createClass(TreeMock, null, [{
        key: "value",
        value: function value(path) {
            switch (path) {
                case null:
                    return undefined;
                case "a":
                    return "α";
                case "b":
                    return "β";
                case "b/i":
                    return 0;
                case "b/j":
                    return 1;
                case "b/k":
                    return 2;
                case "c":
                    return "γ";
                case "c/x":
                    return "ξ";
                case "c/x/y":
                    return "υ";
                case "c/x/y/z":
                    return "ζ";
                default:
                    return undefined;
            }
        }
    }, {
        key: "nodes",
        value: function nodes(path) {
            switch (path) {
                case null:
                    return ["a", "b", "c"];
                case "a":
                    return [];
                case "b":
                    return ["i", "j", "k"];
                case "c":
                    return ["x"];
                case "c/x":
                    return ["y"];
                case "c/x/y":
                    return ["z"];
                case "c/x/y/z":
                    return null;
                default:
                    return undefined;
            }
        }
    }]);

    return TreeMock;
}();

exports.TreeMock = TreeMock;
exports.default = TreeMock;
//# sourceMappingURL=mock.js.map