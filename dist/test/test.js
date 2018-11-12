"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var lib_1 = require("../lib");
var lib_2 = require("../lib");
require("mocha");

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

describe("tree2array", function () {
    it("should exist", function () {
        chai_1.expect(lib_1.tree2array).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_1.tree2array).to.be.a("function");
    });
});
describe("tree2object", function () {
    it("should exist", function () {
        chai_1.expect(lib_2.tree2object).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_2.tree2object).to.be.a("function");
    });
});
describe("tree2array", function () {
    it("should map 'a' node of tree to an array", function () {
        var a_array = lib_1.tree2array("a", TreeMock.value, TreeMock.nodes);
        chai_1.expect(a_array).to.deep.eq(["α"]);
    });
    it("should map 'b' node of tree to an array", function () {
        var b_array = lib_1.tree2array("b", TreeMock.value, TreeMock.nodes);
        chai_1.expect(b_array).to.deep.eq(["β", ["i", [0]], ["j", [1]], ["k", [2]]]);
    });
    it("should map 'c' node of tree to an array", function () {
        var c_array = lib_1.tree2array("c", TreeMock.value, TreeMock.nodes);
        chai_1.expect(c_array).to.deep.eq(["γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]]]);
    });
    it("should map root node of tree to an array", function () {
        var array = lib_1.tree2array(null, TreeMock.value, TreeMock.nodes);
        chai_1.expect(array).to.deep.eq([undefined, ["a", ["α"]], ["b", ["β", ["i", [0]], ["j", [1]], ["k", [2]]]], ["c", ["γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]]]]]);
    });
});
describe("tree2object", function () {
    it("should map 'a' node of tree to an object", function () {
        var a_object = lib_2.tree2object("a", TreeMock.value, TreeMock.nodes);
        chai_1.expect(a_object).to.deep.eq("α");
    });
    it("should map 'b' node of tree to an object", function () {
        var b_object = lib_2.tree2object("b", TreeMock.value, TreeMock.nodes);
        chai_1.expect(b_object).to.deep.eq({
            _: "β", i: 0, j: 1, k: 2
        });
    });
    it("should map 'c' node of tree to an object", function () {
        var c_object = lib_2.tree2object("c", TreeMock.value, TreeMock.nodes);
        chai_1.expect(c_object).to.deep.eq({
            _: "γ", x: { _: "ξ", y: { _: "υ", z: "ζ" } }
        });
    });
    it("should map root node of tree to an object", function () {
        var object = lib_2.tree2object(null, TreeMock.value, TreeMock.nodes);
        chai_1.expect(object).to.deep.eq({
            a: "α",
            b: { _: "β", i: 0, j: 1, k: 2 },
            c: { _: "γ", x: { _: "ξ", y: { _: "υ", z: "ζ" } } }
        });
    });
});
//# sourceMappingURL=test.js.map